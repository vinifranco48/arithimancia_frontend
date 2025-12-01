/**
 * Local Game Engine
 * Cliente-side validation and reward calculation for battle encounters
 */

import { Character } from '@/types/api';

export interface ChallengeAnswer {
  question: string;
  answer: number | string;
  hint?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface LocalBattleResult {
  correct: boolean;
  damage?: number;
  damageTaken?: number;
  encounterStatus: 'IN_PROGRESS' | 'VICTORY' | 'DEFEAT';
  rewards?: {
    experience: number;
    gold: number;
    levelUp?: {
      newLevel: number;
      statsIncreased: string[];
    };
  };
  characterUpdates?: {
    currentHealth: number;
    maxHealth: number;
    level: number;
    experiencePoints: number;
    gold: number;
  };
}

/**
 * Validate player answer against correct answer
 * Handles both numeric and string answers with flexible comparison
 */
export const validateAnswer = (playerAnswer: string, correctAnswer: number | string): boolean => {
  // Normalize both answers
  const normalizedPlayerAnswer = playerAnswer.trim().toLowerCase();
  const normalizedCorrectAnswer = String(correctAnswer).trim().toLowerCase();

  // Direct string comparison
  if (normalizedPlayerAnswer === normalizedCorrectAnswer) {
    return true;
  }

  // Try numeric comparison if both can be parsed as numbers
  const playerNum = parseFloat(normalizedPlayerAnswer);
  const correctNum = parseFloat(normalizedCorrectAnswer);

  if (!isNaN(playerNum) && !isNaN(correctNum)) {
    // Allow small floating point tolerance
    return Math.abs(playerNum - correctNum) < 0.01;
  }

  return false;
};

/**
 * Calculate experience points based on difficulty
 */
export const calculateExperience = (difficulty: 'easy' | 'medium' | 'hard' = 'medium'): number => {
  const xpMap = {
    easy: 50,
    medium: 100,
    hard: 200,
  };
  return xpMap[difficulty];
};

/**
 * Calculate gold reward based on difficulty
 */
export const calculateGold = (difficulty: 'easy' | 'medium' | 'hard' = 'medium'): number => {
  const goldMap = {
    easy: 25,
    medium: 50,
    hard: 100,
  };
  return goldMap[difficulty];
};

/**
 * Calculate damage dealt to enemy based on character level and difficulty
 */
export const calculateDamage = (
  characterLevel: number,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium',
  timeTaken?: number
): number => {
  // Base damage: 10-30 based on level
  const baseDamage = 10 + (characterLevel * 2);

  // Difficulty multiplier
  const difficultyMultiplier = {
    easy: 1.2,
    medium: 1.0,
    hard: 0.8,
  }[difficulty];

  // Time bonus (faster answers deal more damage)
  let timeBonus = 1.0;
  if (timeTaken) {
    if (timeTaken < 5) timeBonus = 1.3;
    else if (timeTaken < 10) timeBonus = 1.2;
    else if (timeTaken < 20) timeBonus = 1.1;
    else if (timeTaken > 60) timeBonus = 0.9;
  }

  const damage = Math.floor(baseDamage * difficultyMultiplier * timeBonus);
  return Math.max(damage, 5); // Minimum 5 damage
};

/**
 * Calculate damage taken by player when answer is wrong
 */
export const calculateDamageTaken = (
  monsterLevel: number,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): number => {
  // Base damage from monster: 5-20 based on monster level
  const baseDamage = 5 + (monsterLevel * 1.5);

  // Difficulty multiplier (harder problems = more damage if wrong)
  const difficultyMultiplier = {
    easy: 0.8,
    medium: 1.0,
    hard: 1.2,
  }[difficulty];

  const damage = Math.floor(baseDamage * difficultyMultiplier);
  return Math.max(damage, 3); // Minimum 3 damage
};

/**
 * Calculate experience needed for next level
 */
export const calculateExperienceForLevel = (level: number): number => {
  return Math.floor(100 * Math.pow(level, 1.5));
};

/**
 * Check if character levels up after gaining experience
 */
export const checkLevelUp = (
  currentLevel: number,
  currentExp: number,
  expGained: number
): { levelsUp: boolean; newLevel: number; newExp: number } => {
  const newExp = currentExp + expGained;
  let newLevel = currentLevel;
  let remainingExp = newExp;

  // Check for level ups (can level up multiple times)
  while (remainingExp >= calculateExperienceForLevel(newLevel)) {
    remainingExp -= calculateExperienceForLevel(newLevel);
    newLevel++;
  }

  return {
    levelsUp: newLevel > currentLevel,
    newLevel,
    newExp: remainingExp,
  };
};

/**
 * Calculate stat increases on level up
 */
export const calculateStatIncreases = (newLevel: number): { maxHealthIncrease: number } => {
  // Increase max health by 10-20 per level
  const maxHealthIncrease = 10 + Math.floor(Math.random() * 11);
  return { maxHealthIncrease };
};

/**
 * Main function to process a battle answer locally
 */
export const processBattleAnswer = (
  playerAnswer: string,
  challenge: ChallengeAnswer,
  character: Character,
  currentMonsterHealth: number,
  monsterMaxHealth: number,
  monsterLevel: number,
  timeTaken?: number
): LocalBattleResult => {
  const difficulty = challenge.difficulty || 'medium';
  const isCorrect = validateAnswer(playerAnswer, challenge.answer);

  let result: LocalBattleResult = {
    correct: isCorrect,
    encounterStatus: 'IN_PROGRESS',
  };

  if (isCorrect) {
    // Calculate damage to enemy
    const damage = calculateDamage(character.level, difficulty, timeTaken);
    const newMonsterHealth = Math.max(0, currentMonsterHealth - damage);

    result.damage = damage;

    // Check if monster is defeated
    if (newMonsterHealth <= 0) {
      result.encounterStatus = 'VICTORY';

      // Calculate rewards
      const experience = calculateExperience(difficulty);
      const gold = calculateGold(difficulty);

      // Check for level up
      const levelUpCheck = checkLevelUp(character.level, character.experiencePoints, experience);

      let characterUpdates = {
        currentHealth: character.currentHealth,
        maxHealth: character.maxHealth,
        level: character.level,
        experiencePoints: character.experiencePoints + experience,
        gold: character.gold + gold,
      };

      if (levelUpCheck.levelsUp) {
        const statIncreases = calculateStatIncreases(levelUpCheck.newLevel);
        characterUpdates = {
          ...characterUpdates,
          level: levelUpCheck.newLevel,
          experiencePoints: levelUpCheck.newExp,
          maxHealth: character.maxHealth + statIncreases.maxHealthIncrease,
          currentHealth: character.currentHealth + statIncreases.maxHealthIncrease, // Heal on level up
        };

        result.rewards = {
          experience,
          gold,
          levelUp: {
            newLevel: levelUpCheck.newLevel,
            statsIncreased: [`+${statIncreases.maxHealthIncrease} Vida Máxima`],
          },
        };
      } else {
        result.rewards = {
          experience,
          gold,
        };
      }

      result.characterUpdates = characterUpdates;
    }
  } else {
    // Player took damage
    const damageTaken = calculateDamageTaken(monsterLevel, difficulty);
    const newPlayerHealth = Math.max(0, character.currentHealth - damageTaken);

    result.damageTaken = damageTaken;

    // Check if player is defeated
    if (newPlayerHealth <= 0) {
      result.encounterStatus = 'DEFEAT';
    }

    result.characterUpdates = {
      currentHealth: newPlayerHealth,
      maxHealth: character.maxHealth,
      level: character.level,
      experiencePoints: character.experiencePoints,
      gold: character.gold,
    };
  }

  return result;
};
