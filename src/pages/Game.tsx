import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterCreation } from '@/components/game/CharacterCreation';
import { Battle } from '@/components/game/Battle';
import { StoryScene } from '@/components/game/StoryScene';
import { VictoryScreen } from '@/components/game/VictoryScreen';
import { DefeatScreen } from '@/components/game/DefeatScreen';
import { DuolingoMap } from '@/components/game/DuolingoMap';
import { NPCDialogue } from '@/components/game/NPCDialogue';
import { Character, Enemy, GameState, School } from '@/types/game';
import { MapNode } from '@/types/npc';
import { generateMapNodes } from '@/utils/mapNodes';
import { generateEnemyForKingdom } from '@/data/kingdoms';
import { toast } from 'sonner';

const Game = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>('intro');
  const [character, setCharacter] = useState<Character | null>(null);
  const [currentEnemy, setCurrentEnemy] = useState<Enemy | null>(null);
  const [encounterNumber, setEncounterNumber] = useState(0);
  const [storyChapter, setStoryChapter] = useState(0);
  const [mapNodes, setMapNodes] = useState<MapNode[]>([]);
  const [currentNode, setCurrentNode] = useState<MapNode | null>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // Carregar personagem selecionado
    const savedChar = localStorage.getItem('current_character');
    if (savedChar) {
      const char = JSON.parse(savedChar);
      const loadedChar = {
        name: char.name,
        school: char.school,
        level: char.level,
        hp: char.hp,
        maxHp: char.maxHp,
        power: 15,
        experience: char.experience,
      };
      setCharacter(loadedChar);
      // Usar o reino/escola do personagem para gerar os nós corretos
      setMapNodes(generateMapNodes(loadedChar.school, loadedChar.level));
      setShowMap(true);
    }
  }, []);

  const handleCharacterCreation = (name: string, school: School) => {
    const newCharacter: Character = {
      name,
      school,
      level: 1,
      hp: 100,
      maxHp: 100,
      power: 15,
      experience: 0,
    };
    
    // Save to localStorage
    localStorage.setItem('current_character', JSON.stringify(newCharacter));
    
    setCharacter(newCharacter);
    // Gerar nós do reino escolhido
    setMapNodes(generateMapNodes(school, 1));
    setGameState('exploration'); // Update game state
    setShowMap(true);
    
    toast.success('Personagem criado!', {
      description: `Bem-vindo, ${name}!`
    });
  };

  const handleNodeSelect = (node: any) => {
    setCurrentNode(node);

    if (node.type === 'battle' || node.type === 'boss') {
      if (!character) return;

      // Usa o enemyId do nó se disponível, senão gera baseado no tipo
      const enemyId = node.enemyId || `enemy_${node.id}`;
      const enemy = generateEnemyForKingdom(character.school, enemyId, character.level);
      setCurrentEnemy(enemy);
      setGameState('battle');
      setShowMap(false);
    } else if (node.type === 'npc') {
      setGameState('story');
      setShowMap(false);
    } else if (node.type === 'treasure') {
      if (character) {
        const xpGained = node.rewards.xp;
        handleVictory(xpGained);
      }
    }
  };

  const handleVictory = (expGained: number) => {
    if (!character) return;

    const newExp = character.experience + expGained;
    const newLevel = Math.floor(newExp / 100) + 1;
    const leveledUp = newLevel > character.level;

    const updatedCharacter = {
      ...character,
      experience: newExp,
      level: newLevel,
      hp: character.maxHp,
      maxHp: leveledUp ? character.maxHp + 20 : character.maxHp,
      power: leveledUp ? character.power + 5 : character.power,
    };

    // Save updated character to localStorage
    localStorage.setItem('current_character', JSON.stringify(updatedCharacter));
    setCharacter(updatedCharacter);

    if (leveledUp) {
      toast.success('Subiu de Nível!', {
        description: `Agora você é nível ${newLevel}! HP e Poder aumentados.`,
      });
    }

    setGameState('victory');
  };

  const handleDefeat = () => {
    setGameState('defeat');
  };

  const handleContinueAfterVictory = () => {
    setEncounterNumber(prev => prev + 1);
    setStoryChapter(prev => prev + 1);
    if (character) {
      setMapNodes(generateMapNodes(character.school, character.level));
    }
    setGameState('exploration');
    setShowMap(true);
    setCurrentNode(null);
  };

  const handleNPCComplete = (xpGained: number) => {
    if (!character) return;
    
    const newExp = character.experience + xpGained;
    const newLevel = Math.floor(newExp / 100) + 1;
    const leveledUp = newLevel > character.level;

    const updatedCharacter = {
      ...character,
      experience: newExp,
      level: newLevel,
      hp: character.hp, // Maintain current HP
      maxHp: leveledUp ? character.maxHp + 20 : character.maxHp,
      power: leveledUp ? character.power + 5 : character.power,
    };

    // Save updated character to localStorage
    localStorage.setItem('current_character', JSON.stringify(updatedCharacter));
    setCharacter(updatedCharacter);

    if (leveledUp) {
      toast.success('Subiu de Nível!', {
        description: `Agora você é nível ${newLevel}! HP e Poder aumentados.`,
      });
    }

    setMapNodes(generateMapNodes(updatedCharacter.school, updatedCharacter.level));
    setShowMap(true);
    setCurrentNode(null);
  };

  const handleRetry = () => {
    if (!character) return;

    setCharacter({
      ...character,
      hp: character.maxHp,
    });

    // Regerar o mesmo inimigo do nó atual
    if (currentNode && (currentNode.type === 'battle' || currentNode.type === 'boss')) {
      const enemyId = (currentNode as any).enemyId || `enemy_${currentNode.id}`;
      const enemy = generateEnemyForKingdom(character.school, enemyId, character.level);
      setCurrentEnemy(enemy);
    }

    setGameState('battle');
  };

  const handleUpdateCharacter = (updatedCharacter: Character) => {
    localStorage.setItem('current_character', JSON.stringify(updatedCharacter));
    setCharacter(updatedCharacter);
  };

  const handleBackToMenu = () => {
    navigate('/characters');
  };

  if (gameState === 'intro') {
    return <CharacterCreation onComplete={handleCharacterCreation} />;
  }

  if (showMap && character) {
    return (
      <DuolingoMap
        nodes={mapNodes}
        character={character}
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

  if (gameState === 'battle' && character && currentEnemy) {
    return (
      <Battle
        character={character}
        enemy={currentEnemy}
        onVictory={handleVictory}
        onDefeat={handleDefeat}
        onUpdateCharacter={handleUpdateCharacter}
      />
    );
  }

  if (gameState === 'victory' && character) {
    return <VictoryScreen character={character} onContinue={handleContinueAfterVictory} />;
  }

  if (gameState === 'defeat') {
    return <DefeatScreen onRetry={handleRetry} />;
  }

  return null;
};

export default Game;
