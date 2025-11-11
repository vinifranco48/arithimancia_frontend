import { MathChallenge, School } from '@/types/game';

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomPrime = (max: number) => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  return primes[getRandomInt(0, Math.min(primes.length - 1, Math.floor(max / 10)))];
};

export const generateChallenge = (school: School, level: number): MathChallenge => {
  const difficulty = level <= 2 ? 'easy' : level <= 4 ? 'medium' : 'hard';
  const range = difficulty === 'easy' ? 20 : difficulty === 'medium' ? 50 : 100;

  const challenges = {
    algebrista: [
      // Easy
      () => {
        const a = getRandomInt(1, 10);
        const b = getRandomInt(1, 10);
        return {
          question: `Resolva: x + ${a} = ${a + b}`,
          answer: b,
          difficulty: 'easy' as const,
        };
      },
      // Medium
      () => {
        const a = getRandomInt(2, 10);
        const b = getRandomInt(1, 20);
        const result = a * getRandomInt(1, 10) + b;
        return {
          question: `Resolva: ${a}x + ${b} = ${result}`,
          answer: (result - b) / a,
          difficulty: 'medium' as const,
        };
      },
      // Hard
      () => {
        const a = getRandomInt(2, 8);
        const b = getRandomInt(1, 5);
        return {
          question: `Resolva: x² = ${a * a}`,
          answer: a,
          difficulty: 'hard' as const,
        };
      },
    ],
    geometra: [
      // Easy
      () => {
        const lado = getRandomInt(3, 12);
        return {
          question: `Qual a área de um quadrado com lado ${lado}?`,
          answer: lado * lado,
          difficulty: 'easy' as const,
        };
      },
      // Medium
      () => {
        const base = getRandomInt(5, 15);
        const altura = getRandomInt(5, 15);
        return {
          question: `Área de um triângulo: base ${base}, altura ${altura}`,
          answer: (base * altura) / 2,
          difficulty: 'medium' as const,
        };
      },
      // Hard
      () => {
        const raio = getRandomInt(3, 10);
        return {
          question: `Área de um círculo com raio ${raio} (use π=3.14)`,
          answer: parseFloat((Math.PI * raio * raio).toFixed(2)),
          difficulty: 'hard' as const,
        };
      },
    ],
    trigonometra: [
      // Easy
      () => {
        const num = getRandomInt(2, 10);
        return {
          question: `Calcule: ${num} × 5`,
          answer: num * 5,
          difficulty: 'easy' as const,
        };
      },
      // Medium
      () => {
        const angles = [30, 45, 60, 90];
        const angle = angles[getRandomInt(0, 3)];
        const sines: any = { 30: 0.5, 45: 0.71, 60: 0.87, 90: 1 };
        return {
          question: `Quanto é sen(${angle}°)? (aproximado)`,
          answer: sines[angle],
          difficulty: 'medium' as const,
        };
      },
      // Hard
      () => {
        const a = getRandomInt(3, 10);
        const b = getRandomInt(3, 10);
        return {
          question: `Hipotenusa: catetos ${a} e ${b} (arredonde)`,
          answer: Math.round(Math.sqrt(a * a + b * b)),
          difficulty: 'hard' as const,
        };
      },
    ],
    numerologo: [
      // Easy
      () => {
        const num1 = getRandomInt(10, 30);
        const num2 = getRandomInt(10, 30);
        return {
          question: `${num1} + ${num2} = ?`,
          answer: num1 + num2,
          difficulty: 'easy' as const,
        };
      },
      // Medium
      () => {
        const prime = getRandomPrime(20);
        return {
          question: `Qual o próximo número primo após ${prime}?`,
          answer: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53][
            [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47].indexOf(prime) + 1
          ],
          difficulty: 'medium' as const,
        };
      },
      // Hard
      () => {
        return {
          question: `Qual é o 7º número de Fibonacci?`,
          answer: 13,
          difficulty: 'hard' as const,
        };
      },
    ],
  };

  const schoolChallenges = challenges[school];
  const difficultyIndex = difficulty === 'easy' ? 0 : difficulty === 'medium' ? 1 : 2;
  const challenge = schoolChallenges[difficultyIndex]();

  return {
    ...challenge,
    school,
  };
};
