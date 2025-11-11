import { Enemy } from '@/types/game';

interface EnemyTemplate {
  id: string;
  name: string;
  description: string;
  baseHp: number;
  basePower: number;
  avatar: string;
  weakness?: string;
  isBoss?: boolean;
  attacks: Array<{
    name: string;
    damage: number;
    description: string;
  }>;
}

const cyclesEnemyTemplates: EnemyTemplate[] = [
  // Ato I: Observatório Parado
  {
    id: 'angulo_complementar',
    name: 'Ângulo Complementar Hostil',
    description: 'Um ângulo que se recusa a somar 90°',
    baseHp: 60,
    basePower: 8,
    avatar: '∠',
    weakness: 'Identidades angulares',
    attacks: [
      { name: 'Rotação Descontrolada', damage: 12, description: 'Gira sem parar' },
      { name: 'Complemento Incompleto', damage: 10, description: 'Não fecha o ângulo reto' }
    ]
  },
  {
    id: 'grau_radiante',
    name: 'Grau Radiante Confuso',
    description: 'Não sabe se é grau ou radiano',
    baseHp: 70,
    basePower: 10,
    avatar: '°',
    weakness: 'Conversão precisa',
    attacks: [
      { name: 'Conversão Errônea', damage: 15, description: 'Converte incorretamente' },
      { name: 'Unidade Indefinida', damage: 12, description: 'Oscila entre graus e radianos' }
    ]
  },
  {
    id: 'quadrante_invertido',
    name: 'Quadrante Invertido',
    description: 'Quadrantes do círculo trocados',
    baseHp: 80,
    basePower: 12,
    avatar: '⊕',
    weakness: 'Geometria do círculo unitário',
    attacks: [
      { name: 'Espelhamento', damage: 18, description: 'Inverte coordenadas' },
      { name: 'Confusão de Sinais', damage: 15, description: 'Mistura positivo e negativo' }
    ]
  },
  {
    id: 'corda_quebrada',
    name: 'Corda Quebrada',
    description: 'Corda de Ptolomeu corrompida',
    baseHp: 90,
    basePower: 14,
    avatar: '⌒',
    weakness: 'Relação corda-seno',
    attacks: [
      { name: 'Arco Distorcido', damage: 20, description: 'Distorce o comprimento' },
      { name: 'Fragmentação', damage: 18, description: 'Quebra em pedaços' }
    ]
  },
  {
    id: 'relogio_boss',
    name: 'Relógio Dessincronizado',
    description: 'Boss que perdeu seu ritmo temporal',
    baseHp: 200,
    basePower: 20,
    avatar: '🕐',
    weakness: 'Periodicidade restaurada',
    isBoss: true,
    attacks: [
      { name: 'Ponteiro Caótico', damage: 35, description: 'Ponteiros giram irregularmente' },
      { name: 'Tempo Congelado', damage: 40, description: 'Paralisa momentaneamente' },
      { name: 'Dessincronia Total', damage: 45, description: 'Ataque devastador de tempo' }
    ]
  },

  // Ato II: Ondas do Caos
  {
    id: 'onda_dessincronizada',
    name: 'Onda Dessincronizada',
    description: 'Frequência instável e caótica',
    baseHp: 100,
    basePower: 16,
    avatar: '〰️',
    weakness: 'Harmonia senoidal',
    attacks: [
      { name: 'Frequência Errática', damage: 22, description: 'Oscila sem padrão' },
      { name: 'Amplitude Variável', damage: 20, description: 'Altera altura aleatoriamente' }
    ]
  },
  {
    id: 'assintota_tangente',
    name: 'Assíntota Tangente',
    description: 'Tangente que tende ao infinito',
    baseHp: 110,
    basePower: 18,
    avatar: '┃',
    weakness: 'Limites bem definidos',
    attacks: [
      { name: 'Explosão Infinita', damage: 28, description: 'Cresce sem controle' },
      { name: 'Descontinuidade', damage: 25, description: 'Salta para ±∞' }
    ]
  },
  {
    id: 'frequencia_dissonante',
    name: 'Frequência Dissonante',
    description: 'Harmonia completamente quebrada',
    baseHp: 120,
    basePower: 20,
    avatar: '♪',
    weakness: 'Ressonância perfeita',
    attacks: [
      { name: 'Som Cacofônico', damage: 30, description: 'Ondas que não combinam' },
      { name: 'Batimento Desarmônico', damage: 28, description: 'Interferência destrutiva' }
    ]
  },
  {
    id: 'assintota_boss',
    name: 'Assíntota Infinita',
    description: 'Boss que se aproxima mas nunca toca',
    baseHp: 250,
    basePower: 25,
    avatar: '∞',
    weakness: 'Convergência controlada',
    isBoss: true,
    attacks: [
      { name: 'Aproximação Infinita', damage: 45, description: 'Sempre se aproximando' },
      { name: 'Limite Indefinido', damage: 50, description: 'Não converge nunca' },
      { name: 'Explosão Assintótica', damage: 55, description: 'Tende ao infinito violentamente' }
    ]
  },

  // Ato III: Cidade das Frequências
  {
    id: 'harmonica_corrompida',
    name: 'Harmônica Corrompida',
    description: 'Série harmônica que diverge',
    baseHp: 130,
    basePower: 22,
    avatar: '♫',
    weakness: 'Convergência de séries',
    attacks: [
      { name: 'Soma Divergente', damage: 32, description: 'Cresce indefinidamente' },
      { name: 'Harmônicos Dissonantes', damage: 30, description: 'Ondas desalinhadas' }
    ]
  },
  {
    id: 'batimento_caotico',
    name: 'Batimento Caótico',
    description: 'Interferência destrutiva pura',
    baseHp: 140,
    basePower: 24,
    avatar: '⚡',
    weakness: 'Fase alinhada',
    attacks: [
      { name: 'Cancelamento de Onda', damage: 35, description: 'Ondas que se anulam' },
      { name: 'Batimento Irregular', damage: 33, description: 'Ritmo imprevisível' }
    ]
  },
  {
    id: 'fase_invertida',
    name: 'Fase Invertida',
    description: 'Onda completamente fora de fase',
    baseHp: 150,
    basePower: 26,
    avatar: '⇄',
    weakness: 'Sincronização de fase',
    attacks: [
      { name: 'Inversão Total', damage: 38, description: 'Espelha perfeitamente' },
      { name: 'Cancelamento Destrutivo', damage: 36, description: 'Anula outras ondas' }
    ]
  },
  {
    id: 'interferencia_boss',
    name: 'Interferência Destrutiva',
    description: 'Boss que cancela todas as ondas',
    baseHp: 300,
    basePower: 30,
    avatar: '⚠️',
    weakness: 'Interferência construtiva',
    isBoss: true,
    attacks: [
      { name: 'Cancelamento Total', damage: 55, description: 'Anula tudo ao redor' },
      { name: 'Fase Oposta', damage: 60, description: 'Inverte todas as ondas' },
      { name: 'Caos Ressonante', damage: 65, description: 'Ressonância destrutiva máxima' }
    ]
  },

  // Ato IV: Laboratório Cíclico
  {
    id: 'identidade_quebrada',
    name: 'Identidade Quebrada',
    description: 'sen² + cos² ≠ 1',
    baseHp: 160,
    basePower: 28,
    avatar: '≠',
    weakness: 'Identidades fundamentais',
    attacks: [
      { name: 'Violação Pitagórica', damage: 40, description: 'Quebra sen² + cos² = 1' },
      { name: 'Contradição', damage: 38, description: 'Identidade falsa' }
    ]
  },
  {
    id: 'fourier_corrupta',
    name: 'Série de Fourier Corrupta',
    description: 'Harmônicos descontrolados',
    baseHp: 170,
    basePower: 30,
    avatar: '∑',
    weakness: 'Análise harmônica',
    attacks: [
      { name: 'Harmônicos Infinitos', damage: 43, description: 'Soma sem fim' },
      { name: 'Convergência Falsa', damage: 41, description: 'Série que não converge' }
    ]
  },
  {
    id: 'periodo_infinito',
    name: 'Período Infinito',
    description: 'Ciclo que nunca se repete',
    baseHp: 180,
    basePower: 32,
    avatar: '∞',
    weakness: 'Periodicidade restaurada',
    attacks: [
      { name: 'Não-Repetição', damage: 46, description: 'Quebra a periodicidade' },
      { name: 'Ciclo Quebrado', damage: 44, description: 'Nunca volta ao início' }
    ]
  },
  {
    id: 'guardioes_ciclicos',
    name: 'Guardiões Cíclicos',
    description: 'Múltiplas ondas sincronizadas contra você',
    baseHp: 190,
    basePower: 34,
    avatar: '〰️〰️',
    weakness: 'Quebra de ressonância',
    attacks: [
      { name: 'Ataque Sincronizado', damage: 48, description: 'Múltiplas ondas em fase' },
      { name: 'Ressonância Forçada', damage: 46, description: 'Amplificação destrutiva' }
    ]
  },
  {
    id: 'paradoxo_ciclico',
    name: 'O Paradoxo Cíclico',
    description: 'Boss final - ciclo impossível que existe',
    baseHp: 400,
    basePower: 40,
    avatar: '⟳',
    weakness: 'Compreensão dos ciclos eternos',
    isBoss: true,
    attacks: [
      { name: 'Ciclo Paradoxal', damage: 70, description: 'Começo é fim, fim é começo' },
      { name: 'Tempo Recursivo', damage: 75, description: 'Loop temporal infinito' },
      { name: 'Paradoxo Zero Cíclico', damage: 80, description: 'Poder máximo do Paradoxo Zero' },
      { name: 'Sincronização Impossível', damage: 85, description: 'Todas as fases simultâneas' }
    ]
  }
];

export const generateCyclesEnemyById = (enemyId: string, level: number): Enemy => {
  const template = cyclesEnemyTemplates.find(e => e.id === enemyId);

  if (!template) {
    // Fallback genérico
    return {
      name: 'Onda Instável',
      hp: 50 + level * 10,
      maxHp: 50 + level * 10,
      power: 10 + level * 2,
      avatar: '〰️',
      weakness: 'Harmonia',
      attacks: [
        { name: 'Oscilação', damage: 15, description: 'Ataque ondulatório básico' }
      ]
    };
  }

  const levelMultiplier = template.isBoss ? 1.5 : 1.0;
  const scaledHp = Math.floor(template.baseHp + (level * 10 * levelMultiplier));
  const scaledPower = Math.floor(template.basePower + (level * 1.5 * levelMultiplier));

  const scaledAttacks = template.attacks.map(attack => ({
    ...attack,
    damage: Math.floor(attack.damage + (level * 0.5 * levelMultiplier))
  }));

  return {
    name: template.name,
    hp: scaledHp,
    maxHp: scaledHp,
    power: scaledPower,
    avatar: template.avatar,
    weakness: template.weakness,
    attacks: scaledAttacks
  };
};

export const cyclesEnemies = cyclesEnemyTemplates.map(template => template.id);
