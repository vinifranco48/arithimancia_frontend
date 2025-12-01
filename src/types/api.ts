export interface Player {
    id: number;
    username: string;
    email: string;
    createdAt: string; // ISO 8601
    lastLogin: string | null; // ISO 8601
}

export interface Character {
    id: number;
    name: string;
    level: number;
    experiencePoints: number;
    gold: number;
    maxHealth: number;
    currentHealth: number;
    playerId: number;
    schoolId: number | null;
    currentLocationId: number;
    createdAt: string; // ISO 8601
    updatedAt: string; // ISO 8601
    school?: School;
    location?: Location;
    inventory?: InventoryItem[];
    activeQuests?: any[]; // Define Quest type if needed
    statistics?: CharacterStatistics;
}

export interface CharacterStatistics {
    totalProblemsAttempted: number;
    totalProblemsCorrect: number;
    totalEncounters: number;
    totalQuestsCompleted: number;
    accuracy?: number;
    encountersWon?: number;
    encountersLost?: number;
    totalQuestsActive?: number;
}

export interface School {
    id: number;
    name: string;
    description: string;
    axiom: string;
    bonusType: 'EXPERIENCE' | 'GOLD' | 'HEALTH';
    bonusValue: number;
}

export interface Location {
    id: number;
    name: string;
    description: string;
}

export interface Item {
    id: number;
    name: string;
    description: string;
    type: 'WEAPON' | 'ARMOR' | 'CONSUMABLE' | 'SPELL_BOOK' | 'ACCESSORY';
    price: number;
    healthBonus: number | null;
    damageBonus: number | null;
    defenseBonus: number | null;
    isTradeable: boolean;
    isConsumable: boolean;
}

export interface InventoryItem {
    id: number;
    item: Item;
    quantity: number;
    isEquipped: boolean;
}

export interface Quest {
    id: number;
    title: string;
    description: string;
    experienceReward: number;
    goldReward: number;
    requiredLevel: number;
    isRepeatable: boolean;
    objectives: QuestObjective[];
}

export interface QuestObjective {
    id: number;
    type: 'SOLVE_PROBLEMS' | 'DEFEAT_MONSTERS' | 'COLLECT_ITEMS' | 'TALK_TO_NPC';
    targetQuantity: number;
    description: string;
}

export interface Monster {
    id: number;
    name: string;
    description: string;
    level: number;
    maxHealth: number;
    currentHealth: number;
    experienceReward: number;
    goldReward: number;
    difficultyLevel: number;
}

export interface Problem {
    id: number;
    description: string;
    problemType: 'ALGEBRA' | 'GEOMETRY' | 'ARITHMETIC' | 'CALCULUS' | 'LOGIC';
    answer?: string; // Not returned in API response usually, but maybe for local checks
    difficultyLevel: number; // 1-10
    hintText: string | null;
    timeLimitSeconds: number;
}

export interface Encounter {
    id: number;
    encounterId?: number; // Deprecated, use id
    monster: Monster;
    problem: Problem;
    status: 'IN_PROGRESS' | 'VICTORY' | 'DEFEAT' | 'FLED';
}

export interface AuthResponse {
    success: boolean;
    message?: string;
    data: {
        player: Player;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    };
}

export interface ApiError {
    success: false;
    error: {
        code: string;
        message: string;
        details?: any;
        timestamp: string;
        path: string;
    };
}
