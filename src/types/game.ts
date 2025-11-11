export type School = 'algebrista' | 'geometra' | 'trigonometra' | 'numerologo';

export interface Character {
  name: string;
  school: School;
  level: number;
  hp: number;
  maxHp: number;
  power: number;
  experience: number;
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
}

export type GameState = 
  | 'intro' 
  | 'character_creation' 
  | 'exploration' 
  | 'battle' 
  | 'victory' 
  | 'defeat'
  | 'story';
