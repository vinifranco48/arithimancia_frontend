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

const numbersEnemyTemplates: EnemyTemplate[] = [
  // Ato I: Cripta dos Primos
  {
    id: 'composto_hostil',
    name: 'Número Composto Hostil',
    description: 'Finge ser primo mas tem divisores escondidos',
    baseHp: 60,
    basePower: 8,
    avatar: '9',
    weakness: 'Fatoração',
    attacks: [
      { name: 'Divisão Oculta', damage: 12, description: 'Revela divisor inesperado' },
      { name: 'Falsa Primalidade', damage: 10, description: 'Confunde testes de primos' }
    ]
  },
  {
    id: 'zero_absoluto',
    name: 'Zero Absoluto',
    description: 'Zero que anula tudo que toca',
    baseHp: 70,
    basePower: 10,
    avatar: '0',
    weakness: 'Adição',
    attacks: [
      { name: 'Multiplicação Aniquiladora', damage: 15, description: '0 × qualquer coisa = 0' },
      { name: 'Vazio Consumidor', damage: 12, description: 'Absorve números' }
    ]
  },
  {
    id: 'divisor_improprio',
    name: 'Divisor Impróprio',
    description: 'Divisor que não divide corretamente',
    baseHp: 80,
    basePower: 12,
    avatar: '÷',
    weakness: 'Divisão exata',
    attacks: [
      { name: 'Resto Irritante', damage: 18, description: 'Sempre deixa resto' },
      { name: 'Divisão Imperfeita', damage: 15, description: 'Não divide completamente' }
    ]
  },
  {
    id: 'mdc_corrompido',
    name: 'MDC Corrompido',
    description: 'Máximo divisor comum que não é máximo nem comum',
    baseHp: 90,
    basePower: 14,
    avatar: '⊥',
    weakness: 'Algoritmo de Euclides',
    attacks: [
      { name: 'Divisor Falso', damage: 20, description: 'Não divide ambos os números' },
      { name: 'Mínimo em vez de Máximo', damage: 18, description: 'Inverte a lógica' }
    ]
  },
  {
    id: 'guardiao_primo',
    name: 'O Guardião Primo',
    description: 'Boss que protege a Cripta com números primos',
    baseHp: 200,
    basePower: 20,
    avatar: '🛡️',
    weakness: 'Teorema de Euclides',
    isBoss: true,
    attacks: [
      { name: 'Crivo Hostil', damage: 35, description: 'Filtra e elimina compostos' },
      { name: 'Primalidade Absoluta', damage: 40, description: 'Só aceita primos' },
      { name: 'Teorema dos Infinitos Primos', damage: 45, description: 'Ataque infinito' }
    ]
  },

  // Ato II: Labirinto de Fibonacci
  {
    id: 'termo_desalinhado',
    name: 'Termo Desalinhado',
    description: 'Número que não pertence à sequência',
    baseHp: 100,
    basePower: 16,
    avatar: '🔀',
    weakness: 'Sequência correta',
    attacks: [
      { name: 'Quebra de Padrão', damage: 22, description: 'Interrompe a recursão' },
      { name: 'Soma Incorreta', damage: 20, description: 'Não é soma dos anteriores' }
    ]
  },
  {
    id: 'pa_quebrada',
    name: 'Progressão Aritmética Quebrada',
    description: 'PA com razão instável',
    baseHp: 110,
    basePower: 18,
    avatar: '⋯',
    weakness: 'Razão constante',
    attacks: [
      { name: 'Razão Variável', damage: 28, description: 'Muda a diferença constantemente' },
      { name: 'Termo Fora de Ordem', damage: 25, description: 'Não segue a₁ + n×r' }
    ]
  },
  {
    id: 'espiral_invertida',
    name: 'Espiral Invertida',
    description: 'Fibonacci ao contrário - subtração em vez de soma',
    baseHp: 120,
    basePower: 20,
    avatar: '🌀',
    weakness: 'Espiral dourada correta',
    attacks: [
      { name: 'Anti-Fibonacci', damage: 30, description: 'Subtrai em vez de somar' },
      { name: 'Espiral Destrutiva', damage: 28, description: 'Gira no sentido errado' }
    ]
  },
  {
    id: 'ouro_corrompido',
    name: 'O Número de Ouro Corrompido',
    description: 'φ perdeu sua perfeição áurea',
    baseHp: 250,
    basePower: 25,
    avatar: 'φ',
    weakness: 'Razão dourada perfeita',
    isBoss: true,
    attacks: [
      { name: 'Proporção Quebrada', damage: 45, description: 'Não é mais (1+√5)/2' },
      { name: 'Anti-Harmonia', damage: 50, description: 'Destrói proporções naturais' },
      { name: 'Espiral do Caos', damage: 55, description: 'Fibonacci corrompido' }
    ]
  },

  // Ato III: Cidade dos Infinitos
  {
    id: 'aleph_zero',
    name: 'Infinito Enumerável (ℵ₀)',
    description: 'O menor infinito, mas ainda infinito',
    baseHp: 130,
    basePower: 22,
    avatar: 'ℵ₀',
    weakness: 'Enumeração',
    attacks: [
      { name: 'Contagem Infinita', damage: 32, description: '1, 2, 3... eternamente' },
      { name: 'Hotel de Hilbert', damage: 30, description: 'Sempre cabe mais um' }
    ]
  },
  {
    id: 'erdos_infinito',
    name: 'Número de Erdős Infinito',
    description: 'Matemático sem conexão colaborativa',
    baseHp: 140,
    basePower: 24,
    avatar: '∞',
    weakness: 'Colaboração',
    attacks: [
      { name: 'Isolamento Total', damage: 35, description: 'Sem coautores' },
      { name: 'Distância Infinita', damage: 33, description: 'Nunca alcançável' }
    ]
  },
  {
    id: 'transcendental_hostil',
    name: 'Número Transcendental Hostil',
    description: 'π ou e corrompido',
    baseHp: 150,
    basePower: 26,
    avatar: 'π',
    weakness: 'Aproximação racional',
    attacks: [
      { name: 'Dígitos Infinitos', damage: 38, description: 'Decimais sem fim' },
      { name: 'Não-Algébrico', damage: 36, description: 'Não é raiz de polinômio' }
    ]
  },
  {
    id: 'aleph_um',
    name: 'Aleph-Um (ℵ₁)',
    description: 'Infinito não-enumerável dos números reais',
    baseHp: 300,
    basePower: 30,
    avatar: 'ℵ₁',
    weakness: 'Diagonal de Cantor',
    isBoss: true,
    attacks: [
      { name: 'Não-Enumerabilidade', damage: 55, description: 'Impossível de contar' },
      { name: 'Continuum', damage: 60, description: 'Poder dos reais' },
      { name: 'Hipótese do Continuum', damage: 65, description: 'Problema indecidível' }
    ]
  },

  // Ato IV: Laboratório de Conjecturas
  {
    id: 'goldbach_quebrada',
    name: 'Conjectura de Goldbach Quebrada',
    description: 'Todo par NÃO é soma de dois primos',
    baseHp: 160,
    basePower: 28,
    avatar: '⊕',
    weakness: 'Verificação até 4×10¹⁸',
    attacks: [
      { name: 'Contraexemplo Falso', damage: 40, description: 'Par que não se decompõe' },
      { name: 'Conjectura Invertida', damage: 38, description: 'Nega Goldbach' }
    ]
  },
  {
    id: 'primo_gemeo_solitario',
    name: 'Primo Gêmeo Solitário',
    description: 'Primo que perdeu seu gêmeo (p e p+2)',
    baseHp: 170,
    basePower: 30,
    avatar: '1️⃣',
    weakness: 'Conjectura dos primos gêmeos',
    attacks: [
      { name: 'Solidão Primordial', damage: 43, description: 'Sem par p+2' },
      { name: 'Gap Crescente', damage: 41, description: 'Distância entre primos aumenta' }
    ]
  },
  {
    id: 'mersenne_falso',
    name: 'Número de Mersenne Falso',
    description: '2^p - 1 que não é primo',
    baseHp: 180,
    basePower: 32,
    avatar: 'M',
    weakness: 'Teste de Lucas-Lehmer',
    attacks: [
      { name: 'Fatoração Oculta', damage: 46, description: 'Parece primo mas não é' },
      { name: 'Exponencial Enganoso', damage: 44, description: '2^p-1 composto' }
    ]
  },
  {
    id: 'guardioes_primalidade',
    name: 'Guardiões da Primalidade',
    description: 'Múltiplos testes de primalidade vivos',
    baseHp: 190,
    basePower: 34,
    avatar: '🛡️🛡️',
    weakness: 'Teste de Miller-Rabin',
    attacks: [
      { name: 'Teste de Fermat', damage: 48, description: 'a^(p-1) ≡ 1 (mod p)' },
      { name: 'Pseudoprimo', damage: 46, description: 'Passa no teste mas não é primo' }
    ]
  },
  {
    id: 'paradoxo_zero_numerico',
    name: 'O Paradoxo Zero Numérico',
    description: 'Boss final - zero que contém infinito',
    baseHp: 400,
    basePower: 40,
    avatar: '⊘',
    weakness: 'Compreensão do vazio e do todo',
    isBoss: true,
    attacks: [
      { name: '0/0 Indefinido', damage: 70, description: 'Divisão impossível' },
      { name: 'Infinito × 0', damage: 75, description: 'Forma indeterminada' },
      { name: 'Paradoxo dos Infinitesimais', damage: 80, description: 'Menor que tudo mas não zero' },
      { name: 'Aniquilação Total', damage: 85, description: 'Poder máximo do Paradoxo Zero' }
    ]
  }
];

export const generateNumbersEnemyById = (enemyId: string, level: number): Enemy => {
  const template = numbersEnemyTemplates.find(e => e.id === enemyId);

  if (!template) {
    // Fallback genérico
    return {
      name: 'Número Hostil',
      hp: 50 + level * 10,
      maxHp: 50 + level * 10,
      power: 10 + level * 2,
      avatar: '#',
      weakness: 'Operações básicas',
      attacks: [
        { name: 'Ataque Numérico', damage: 15, description: 'Ataque matemático básico' }
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

export const numbersEnemies = numbersEnemyTemplates.map(template => template.id);
