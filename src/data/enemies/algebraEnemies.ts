import { Enemy } from '@/types/game';

// ============================================
// INIMIGOS EXCLUSIVOS DO REINO DA ÁLGEBRA
// ============================================

interface EnemyTemplate {
  id: string;
  name: string;
  type: 'zero_absoluto' | 'infinito_selvagem' | 'fractal_parasita' | 'paradoxo';
  description: string;
  baseHp: number;
  basePower: number;
  isBoss?: boolean;
}

const algebraEnemyTemplates: EnemyTemplate[] = [
  // ATO I - Torre Algébrica
  {
    id: 'variavel_fugitiva',
    name: 'Variável X Fugitiva',
    type: 'paradoxo',
    description: 'Uma incógnita que se recusa a ser isolada',
    baseHp: 25,
    basePower: 6
  },
  {
    id: 'equacao_incompleta',
    name: 'Equação Incompleta',
    type: 'paradoxo',
    description: 'Uma equação sem solução, desafiando a lógica',
    baseHp: 30,
    basePower: 7
  },
  {
    id: 'termo_semelhante_hostil',
    name: 'Termo Semelhante Hostil',
    type: 'fractal_parasita',
    description: 'Termos que se recusam a ser combinados',
    baseHp: 35,
    basePower: 8
  },
  {
    id: 'balanca_desequilibrada',
    name: 'Balança Desequilibrada',
    type: 'paradoxo',
    description: 'Uma equação onde os dois lados nunca se igualam',
    baseHp: 40,
    basePower: 9
  },
  {
    id: 'variavel_multiplicada_boss',
    name: 'Enxame de Variáveis',
    type: 'fractal_parasita',
    description: 'Múltiplas variáveis entrelaçadas em caos algébrico',
    baseHp: 80,
    basePower: 12,
    isBoss: true
  },

  // ATO II - Deserto das Incógnitas
  {
    id: 'expoente_descontrolado',
    name: 'Expoente Descontrolado',
    type: 'infinito_selvagem',
    description: 'Um expoente que cresce exponencialmente sem controle',
    baseHp: 45,
    basePower: 10
  },
  {
    id: 'raiz_quadrada_negativa',
    name: 'Raiz Quadrada Negativa',
    type: 'paradoxo',
    description: 'Uma √-1 que habita entre o real e o imaginário',
    baseHp: 50,
    basePower: 11
  },
  {
    id: 'fator_comum_oculto',
    name: 'Fator Comum Oculto',
    type: 'paradoxo',
    description: 'Um fator que se esconde na fatoração',
    baseHp: 55,
    basePower: 12
  },
  {
    id: 'infinito_selvagem_boss',
    name: 'Infinito Selvagem Algébrico',
    type: 'infinito_selvagem',
    description: 'Um limite que tende ao infinito sem controle',
    baseHp: 100,
    basePower: 15,
    isBoss: true
  },

  // ATO III - Cidade dos Símbolos
  {
    id: 'funcao_irracional',
    name: 'Função Irracional Corrompida',
    type: 'paradoxo',
    description: 'Uma função que não pode ser expressa como razão',
    baseHp: 60,
    basePower: 13
  },
  {
    id: 'logaritmo_invertido',
    name: 'Logaritmo Invertido',
    type: 'paradoxo',
    description: 'Um logaritmo com base negativa',
    baseHp: 65,
    basePower: 14
  },
  {
    id: 'matriz_singular',
    name: 'Matriz Singular',
    type: 'paradoxo',
    description: 'Uma matriz sem inversa, bloqueando soluções',
    baseHp: 70,
    basePower: 15
  },
  {
    id: 'sistema_inconsistente_boss',
    name: 'Sistema Inconsistente',
    type: 'paradoxo',
    description: 'Um sistema de equações sem solução possível',
    baseHp: 120,
    basePower: 18,
    isBoss: true
  },

  // ATO IV - Laboratório Algébrico
  {
    id: 'polinomio_insoluvel',
    name: 'Polinômio Insolúvel',
    type: 'paradoxo',
    description: 'Um polinômio de grau 5 que desafia solução por radicais',
    baseHp: 75,
    basePower: 16
  },
  {
    id: 'grupo_abeliano_corrupto',
    name: 'Grupo Abeliano Corrupto',
    type: 'fractal_parasita',
    description: 'Uma estrutura algébrica que perdeu suas propriedades',
    baseHp: 80,
    basePower: 17
  },
  {
    id: 'anel_sem_identidade',
    name: 'Anel sem Identidade',
    type: 'paradoxo',
    description: 'Uma estrutura algébrica sem elemento neutro',
    baseHp: 85,
    basePower: 18
  },
  {
    id: 'guardioes_simbolicos',
    name: 'Guardiões Simbólicos',
    type: 'fractal_parasita',
    description: 'Múltiplos símbolos algébricos corrompidos',
    baseHp: 90,
    basePower: 19
  },
  {
    id: 'equacao_impossibilidade',
    name: 'A Equação da Impossibilidade',
    type: 'paradoxo',
    description: 'A equação final que causou o Paradoxo Zero algébrico',
    baseHp: 150,
    basePower: 22,
    isBoss: true
  }
];

export const generateAlgebraEnemyById = (enemyId: string, level: number): Enemy => {
  const template = algebraEnemyTemplates.find(e => e.id === enemyId);

  if (!template) {
    return {
      id: 'unknown',
      name: 'Símbolo Desconhecido',
      type: 'paradoxo',
      description: 'Uma entidade algébrica não catalogada',
      hp: 50,
      maxHp: 50,
      power: 10
    };
  }

  const levelMultiplier = template.isBoss ? 1.5 : 1.0;
  const scaledHp = Math.floor(template.baseHp + (level * 10 * levelMultiplier));
  const scaledPower = Math.floor(template.basePower + (level * 1.5 * levelMultiplier));

  return {
    id: template.id,
    name: template.name,
    type: template.type,
    description: template.description,
    hp: scaledHp,
    maxHp: scaledHp,
    power: scaledPower
  };
};

export const getAllAlgebraEnemyTemplates = (): EnemyTemplate[] => {
  return algebraEnemyTemplates;
};

export const getAlgebraEnemiesByType = (type: EnemyTemplate['type']): EnemyTemplate[] => {
  return algebraEnemyTemplates.filter(e => e.type === type);
};

export const getAlgebraBosses = (): EnemyTemplate[] => {
  return algebraEnemyTemplates.filter(e => e.isBoss);
};

export { algebraEnemyTemplates };
export type { EnemyTemplate };
