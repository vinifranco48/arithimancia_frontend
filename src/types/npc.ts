export interface NPC {
  id: string;
  name: string;
  title: string;
  avatar: string;
  school: 'algebrista' | 'geometra' | 'trigonometra' | 'numerologo';
  dialogues: Dialogue[];
  lesson: MathLesson;
}

export interface Dialogue {
  text: string;
  emotion: 'neutral' | 'happy' | 'thinking' | 'excited';
}

export interface MathLesson {
  concept: string;
  explanation: string;
  examples: string[];
  practiceProblems: {
    question: string;
    answer: number;
    hint: string;
  }[];
}

export interface MapNode {
  id: number;
  type: 'battle' | 'npc' | 'treasure' | 'boss';
  title: string;
  description: string;
  npc?: NPC;
  position: { x: number; y: number };
  requiredLevel: number;
  completed: boolean;
  locked: boolean;
  rewards: {
    xp: number;
    gold?: number;
  };
}
