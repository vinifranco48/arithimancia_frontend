export type School = 'algebrista' | 'geometra' | 'trigonometra' | 'numerologo';

export interface Character {
  name: string;
  school: School;
  level: number;
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  power: number;
  experience: number;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: 'damage' | 'heal' | 'buff';
  value: number; // Damage multiplier or heal amount
  school: School;
  icon: string; // Emoji or icon name
  animation: string; // CSS class for animation
}

export interface Enemy {
  id: string;
  name: string;
  type: 'zero_absoluto' | 'infinito_selvagem' | 'fractal_parasita' | 'paradoxo';
  hp: number;
  maxHp: number;
  power: number;
  description: string;
}

export interface MathChallenge {
  question: string;
  answer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  school?: School;
  topic?: string;
}

export type GameState =
  | 'intro'
  | 'character_creation'
  | 'exploration'
  | 'battle'
  | 'victory'
  | 'defeat'
  | 'story';
