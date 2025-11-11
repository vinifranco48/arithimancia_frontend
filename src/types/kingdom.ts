import { School } from './game';
import { NPC } from './npc';

// Tipo de reino (alinhado com School)
export type Kingdom = School;

// Tipo de nó expandido com informações de reino
export interface KingdomNode {
  id: number;
  type: 'npc' | 'battle' | 'treasure' | 'boss' | 'puzzle' | 'story';
  title: string;
  description: string;
  kingdom: Kingdom;
  act: 1 | 2 | 3 | 4; // Ato narrativo (I, II, III, IV)

  // Posição no mapa
  position: { x: number; y: number };

  // Progressão
  requiredLevel: number;
  locked: boolean;
  completed: boolean;

  // Recompensas
  rewards: {
    xp: number;
    gold?: number;
    item?: string;
    axiom?: string;
    theorem?: string;
  };

  // Específico de NPC
  npcId?: string;
  npc?: NPC;
  dialogue?: {
    intro: string;
    lesson?: string;
    completion: string;
  };

  // Específico de Battle
  enemyId?: string;
  challenge?: {
    question: string;
    answer: number;
    hint: string;
    difficulty?: 'easy' | 'medium' | 'hard';
  };

  // Específico de Puzzle
  puzzleType?: string;
  puzzleData?: any;

  // Específico de Story
  storyContent?: string[];

  // Específico de Boss
  isBoss?: boolean;
  bossPhases?: number;

  // Farol Axiomático
  activatesBeacon?: boolean;
  beaconName?: string;
}

// Dados completos de um reino
export interface KingdomData {
  id: Kingdom;
  name: string;
  displayName: string; // Nome para UI (ex: "Reino da Geometria")
  description: string;
  loreIntro: string[];
  icon: string;
  color: string;
  gradient: string;

  // Conteúdo
  nodes: KingdomNode[];
  npcs: string[]; // IDs dos NPCs deste reino
  enemies: string[]; // IDs dos inimigos deste reino

  // Progressão
  totalActs: number;
  estimatedPlaytime: string; // Ex: "20-25 horas"

  // Finais
  endings: {
    id: string;
    name: string;
    description: string;
    requirement: string;
  }[];
}

// Helper type para filtros
export interface KingdomFilter {
  kingdom?: Kingdom;
  act?: number;
  type?: KingdomNode['type'];
  minLevel?: number;
  maxLevel?: number;
}
