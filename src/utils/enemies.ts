import { Enemy } from '@/types/game';

export const generateEnemy = (level: number, encounterNumber: number): Enemy => {
  const enemies = [
    {
      id: 'zero_absoluto',
      name: 'Zero Absoluto',
      type: 'zero_absoluto' as const,
      description: 'Uma criatura que suga todo valor numérico ao redor.',
      baseHp: 30,
      basePower: 8,
    },
    {
      id: 'infinito_selvagem',
      name: 'Infinito Selvagem',
      type: 'infinito_selvagem' as const,
      description: 'Uma entidade que cresce sem controle, distorcendo a realidade.',
      baseHp: 40,
      basePower: 10,
    },
    {
      id: 'fractal_parasita',
      name: 'Fractal Parasita',
      type: 'fractal_parasita' as const,
      description: 'Um padrão que se replica infinitamente, infectando estruturas.',
      baseHp: 35,
      basePower: 9,
    },
    {
      id: 'paradoxo',
      name: 'Paradoxo',
      type: 'paradoxo' as const,
      description: 'Uma contradição matemática ambulante que desafia a lógica.',
      baseHp: 50,
      basePower: 12,
    },
  ];

  const selectedEnemy = enemies[encounterNumber % enemies.length];
  const scaledHp = selectedEnemy.baseHp + (level * 10);
  const scaledPower = selectedEnemy.basePower + Math.floor(level * 1.5);

  return {
    ...selectedEnemy,
    hp: scaledHp,
    maxHp: scaledHp,
    power: scaledPower,
  };
};
