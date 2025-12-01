import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterCreation } from '@/components/game/CharacterCreation';
import { Battle } from '@/components/game/Battle';
import { StoryScene } from '@/components/game/StoryScene';
import { VictoryScreen } from '@/components/game/VictoryScreen';
import { DefeatScreen } from '@/components/game/DefeatScreen';
import { DuolingoMap } from '@/components/game/DuolingoMap';
import { NPCDialogue } from '@/components/game/NPCDialogue';
import { Character, Encounter } from '@/types/api';
import { MapNode } from '@/types/npc';
import { generateMapNodes } from '@/utils/mapNodes';
import { toast } from 'sonner';
import { characterService, gameService } from '@/services/api';

type GameState = 'intro' | 'exploration' | 'battle' | 'victory' | 'defeat' | 'story';

const Game = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>('intro');
  const [character, setCharacter] = useState<Character | null>(null);
  const [currentEncounter, setCurrentEncounter] = useState<Encounter | null>(null);
  const [mapNodes, setMapNodes] = useState<MapNode[]>([]);
  const [currentNode, setCurrentNode] = useState<MapNode | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initGame = async () => {
      const charId = localStorage.getItem('current_character_id');
      if (!charId) {
        navigate('/characters');
        return;
      }

      try {
        // Load Character
        const charData = await characterService.getCharacter(parseInt(charId));
        setCharacter(charData);

        // Check for active encounters
        const activeEncounters = await gameService.getActiveEncounters(charData.id);
        if (activeEncounters && activeEncounters.length > 0) {
          setCurrentEncounter(activeEncounters[0]);
          setGameState('battle');
          setShowMap(false);
        } else {
          // Generate Map (Visual only for now, triggers API encounters)
          // We need to map API School to the local School type expected by generateMapNodes if possible
          // Or just cast it if names match somewhat, or default.
          // The local generateMapNodes expects a string. API returns object.
          // We'll use the school name or a default.
          const schoolName = charData.school?.name || 'algebrista';
          // Simple mapping or just pass a valid string if generateMapNodes is robust
          // Let's assume we can pass 'algebrista' as fallback
          setMapNodes(generateMapNodes('algebrista', charData.level));
          setGameState('exploration');
          setShowMap(true);
        }
      } catch (error) {
        console.error('Failed to initialize game:', error);
        toast.error('Erro ao carregar jogo');
        navigate('/characters');
      } finally {
        setIsLoading(false);
      }
    };

    initGame();
  }, [navigate]);

  const handleNodeSelect = async (node: any) => {
    setCurrentNode(node);

    if (node.type === 'battle' || node.type === 'boss') {
      if (!character) return;

      try {
        const encounter = await gameService.startEncounter(character.id);
        setCurrentEncounter(encounter);
        setGameState('battle');
        setShowMap(false);
      } catch (error) {
        toast.error('Erro ao iniciar combate');
      }
    } else if (node.type === 'npc') {
      setGameState('story');
      setShowMap(false);
    } else if (node.type === 'treasure') {
      toast.info('Tesouro encontrado! (Funcionalidade em desenvolvimento)');
    }
  };

  const handleVictory = (rewards: any) => {
    if (!character) return;

    // Update character locally with rewards if needed, or fetch fresh
    // The Battle component already calls onUpdateCharacter with updates from solve response

    if (rewards.experienceGained) {
      toast.success(`Vitória! +${rewards.experienceGained} XP, +${rewards.goldGained} Ouro`);
    }

    setGameState('victory');
  };

  const handleDefeat = () => {
    setGameState('defeat');
  };

  const handleContinueAfterVictory = async () => {
    if (character) {
      // Refresh character to get latest stats
      try {
        const updatedChar = await characterService.getCharacter(character.id);
        setCharacter(updatedChar);
        setMapNodes(generateMapNodes('algebrista', updatedChar.level));
      } catch (e) {
        console.error("Failed to refresh character", e);
      }
    }
    setGameState('exploration');
    setShowMap(true);
    setCurrentNode(null);
    setCurrentEncounter(null);
  };

  const handleNPCComplete = (xpGained: number) => {
    // Placeholder for NPC interaction
    setShowMap(true);
    setCurrentNode(null);
  };

  const handleRetry = async () => {
    if (!character) return;

    // Reload character to reset state if needed or just go back to map
    // For now, go back to map
    setGameState('exploration');
    setShowMap(true);
    setCurrentEncounter(null);
  };

  const handleUpdateCharacter = (updatedCharacter: Character) => {
    setCharacter(updatedCharacter);
  };

  const localCharacter = character ? {
    name: character.name,
    school: (character.school?.name.toLowerCase().includes('álgebra') ? 'algebrista' :
      character.school?.name.toLowerCase().includes('geometria') ? 'geometra' :
        character.school?.name.toLowerCase().includes('trigonometria') ? 'trigonometra' : 'numerologo') as any,
    level: character.level,
    hp: character.currentHealth,
    maxHp: character.maxHealth,
    mana: 100,
    maxMana: 100,
    power: 15,
    experience: character.experiencePoints
  } : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f0b15] flex items-center justify-center">
        <div className="text-primary animate-pulse">Carregando jogo...</div>
      </div>
    );
  }

  if (gameState === 'intro') {
    // We skip intro now as character is created in previous screen
    return null;
  }

  if (showMap && localCharacter) {
    return (
      <DuolingoMap
        nodes={mapNodes}
        character={localCharacter}
        onNodeSelect={handleNodeSelect}
        currentNodeId={currentNode?.id}
      />
    );
  }

  if (gameState === 'story' && currentNode?.npc && character) {
    return (
      <NPCDialogue
        npc={currentNode.npc}
        onComplete={handleNPCComplete}
        onClose={() => {
          setShowMap(true);
          setCurrentNode(null);
        }}
      />
    );
  }

  if (gameState === 'battle' && character && currentEncounter) {
    return (
      <Battle
        character={character}
        encounter={currentEncounter}
        onVictory={handleVictory}
        onDefeat={handleDefeat}
        onUpdateCharacter={handleUpdateCharacter}
        nodeChallenge={currentNode?.challenge}
      />
    );
  }

  if (gameState === 'victory' && localCharacter) {
    return <VictoryScreen character={localCharacter} onContinue={handleContinueAfterVictory} />;
  }

  if (gameState === 'defeat') {
    return <DefeatScreen onRetry={handleRetry} />;
  }

  return null;
};

export default Game;
