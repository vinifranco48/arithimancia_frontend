import { KingdomData, KingdomNode } from '@/types/kingdom';

// Reino dos Números (Teoria dos Números) - Versão Completa
const numbersNodes: KingdomNode[] = [
  // ATO I: Cripta dos Primos (1-10)
  { id: 1, type: 'npc', title: 'Pitágoras Petrificado', description: 'O místico aguarda na Cripta', kingdom: 'numerologo', act: 1, position: { x: 50, y: 10 }, requiredLevel: 1, locked: false, completed: false, npcId: 'pitagoras_numbers', rewards: { xp: 50 } },
  { id: 2, type: 'battle', title: 'Número Composto Hostil', description: 'Um composto que age como primo', kingdom: 'numerologo', act: 1, position: { x: 50, y: 18 }, requiredLevel: 1, locked: false, completed: false, enemyId: 'composto_hostil', rewards: { xp: 100, gold: 50 }, challenge: { question: 'Qual é o primeiro número primo?', answer: 2, hint: 'O único primo par', difficulty: 'easy' } },
  { id: 3, type: 'npc', title: 'Pitágoras - Números Perfeitos', description: 'Lição sobre perfeição numérica', kingdom: 'numerologo', act: 1, position: { x: 40, y: 26 }, requiredLevel: 1, locked: false, completed: false, npcId: 'pitagoras_numbers', rewards: { xp: 75 } },
  { id: 4, type: 'battle', title: 'Zero Absoluto', description: 'Um zero que devora tudo', kingdom: 'numerologo', act: 1, position: { x: 60, y: 26 }, requiredLevel: 2, locked: true, completed: false, enemyId: 'zero_absoluto', rewards: { xp: 150, gold: 75 }, challenge: { question: 'Quanto é 0 × 1000?', answer: 0, hint: 'Zero anula tudo', difficulty: 'easy' } },
  { id: 5, type: 'puzzle', title: 'Crivo de Eratóstenes', description: 'Filtre os números primos', kingdom: 'numerologo', act: 1, position: { x: 50, y: 34 }, requiredLevel: 2, locked: true, completed: false, rewards: { xp: 200 } },
  { id: 6, type: 'battle', title: 'Divisor Impróprio', description: 'Divisor que não divide corretamente', kingdom: 'numerologo', act: 1, position: { x: 35, y: 42 }, requiredLevel: 2, locked: true, completed: false, enemyId: 'divisor_improprio', rewards: { xp: 150, gold: 100 } },
  { id: 7, type: 'npc', title: 'Euclides - Algoritmo', description: 'MDC e o algoritmo eterno', kingdom: 'numerologo', act: 1, position: { x: 50, y: 50 }, requiredLevel: 3, locked: true, completed: false, npcId: 'euclides_numbers', rewards: { xp: 100 } },
  { id: 8, type: 'battle', title: 'MDC Corrompido', description: 'Máximo divisor que não divide', kingdom: 'numerologo', act: 1, position: { x: 65, y: 50 }, requiredLevel: 3, locked: true, completed: false, enemyId: 'mdc_corrompido', rewards: { xp: 200, gold: 150 } },
  { id: 9, type: 'treasure', title: 'Tábua de Primos Perdida', description: 'Primeira lista de números primos', kingdom: 'numerologo', act: 1, position: { x: 50, y: 58 }, requiredLevel: 3, locked: true, completed: false, rewards: { xp: 250, gold: 200 } },
  { id: 10, type: 'boss', title: 'O Guardião Primo', description: 'Boss que só aceita primos', kingdom: 'numerologo', act: 1, position: { x: 50, y: 66 }, requiredLevel: 4, locked: true, completed: false, isBoss: true, enemyId: 'guardiao_primo', rewards: { xp: 500, gold: 300 }, activatesBeacon: true },

  // ATO II: Labirinto de Fibonacci (11-20)
  { id: 11, type: 'story', title: 'Espiral Dourada', description: 'A sequência se revela', kingdom: 'numerologo', act: 2, position: { x: 50, y: 74 }, requiredLevel: 4, locked: true, completed: false, rewards: { xp: 0 } },
  { id: 12, type: 'npc', title: 'Fibonacci - Sequências', description: 'Padrões recursivos', kingdom: 'numerologo', act: 2, position: { x: 35, y: 82 }, requiredLevel: 4, locked: true, completed: false, npcId: 'fibonacci', rewards: { xp: 150 } },
  { id: 13, type: 'battle', title: 'Termo Desalinhado', description: 'Número fora da sequência', kingdom: 'numerologo', act: 2, position: { x: 45, y: 90 }, requiredLevel: 5, locked: true, completed: false, enemyId: 'termo_desalinhado', rewards: { xp: 200, gold: 150 }, challenge: { question: 'Qual é o 7º número de Fibonacci? (1,1,2,3,5,8,?)', answer: 13, hint: 'Soma dos dois anteriores', difficulty: 'medium' } },
  { id: 14, type: 'puzzle', title: 'Razão Áurea', description: 'φ = 1.618...', kingdom: 'numerologo', act: 2, position: { x: 55, y: 90 }, requiredLevel: 5, locked: true, completed: false, rewards: { xp: 250 } },
  { id: 15, type: 'npc', title: 'Gauss - Somas', description: 'Soma de Gauss e progressões', kingdom: 'numerologo', act: 2, position: { x: 65, y: 82 }, requiredLevel: 5, locked: true, completed: false, npcId: 'gauss', rewards: { xp: 175 } },
  { id: 16, type: 'battle', title: 'Progressão Aritmética Quebrada', description: 'PA com razão instável', kingdom: 'numerologo', act: 2, position: { x: 50, y: 98 }, requiredLevel: 6, locked: true, completed: false, enemyId: 'pa_quebrada', rewards: { xp: 250, gold: 200 } },
  { id: 17, type: 'puzzle', title: 'Torres de Hanoi', description: 'Problema recursivo clássico', kingdom: 'numerologo', act: 2, position: { x: 65, y: 98 }, requiredLevel: 6, locked: true, completed: false, rewards: { xp: 300 } },
  { id: 18, type: 'npc', title: 'Fibonacci - Recursão', description: 'Poder da auto-referência', kingdom: 'numerologo', act: 2, position: { x: 35, y: 106 }, requiredLevel: 6, locked: true, completed: false, npcId: 'fibonacci', rewards: { xp: 200 } },
  { id: 19, type: 'battle', title: 'Espiral Invertida', description: 'Fibonacci ao contrário', kingdom: 'numerologo', act: 2, position: { x: 65, y: 106 }, requiredLevel: 7, locked: true, completed: false, enemyId: 'espiral_invertida', rewards: { xp: 300, gold: 250 } },
  { id: 20, type: 'boss', title: 'O Número de Ouro Corrompido', description: 'φ perdeu sua perfeição', kingdom: 'numerologo', act: 2, position: { x: 50, y: 114 }, requiredLevel: 7, locked: true, completed: false, isBoss: true, enemyId: 'ouro_corrompido', rewards: { xp: 600, gold: 400 }, activatesBeacon: true },

  // ATO III: Cidade dos Infinitos (21-30)
  { id: 21, type: 'story', title: 'Hotel de Hilbert', description: 'Infinitos de diferentes tamanhos', kingdom: 'numerologo', act: 3, position: { x: 50, y: 122 }, requiredLevel: 8, locked: true, completed: false, rewards: { xp: 0 } },
  { id: 22, type: 'npc', title: 'Ramanujan - Mistérios', description: 'Números transcendentais', kingdom: 'numerologo', act: 3, position: { x: 40, y: 130 }, requiredLevel: 8, locked: true, completed: false, npcId: 'ramanujan', rewards: { xp: 200 } },
  { id: 23, type: 'battle', title: 'Infinito Enumerável', description: 'ℵ₀ - Menor infinito', kingdom: 'numerologo', act: 3, position: { x: 45, y: 138 }, requiredLevel: 8, locked: true, completed: false, enemyId: 'aleph_zero', rewards: { xp: 300, gold: 250 } },
  { id: 24, type: 'puzzle', title: 'Diagonal de Cantor', description: 'Prova de incontabilidade', kingdom: 'numerologo', act: 3, position: { x: 55, y: 138 }, requiredLevel: 9, locked: true, completed: false, rewards: { xp: 350 } },
  { id: 25, type: 'npc', title: 'Erdős - Colaboração', description: 'Redes matemáticas', kingdom: 'numerologo', act: 3, position: { x: 60, y: 130 }, requiredLevel: 9, locked: true, completed: false, npcId: 'erdos', rewards: { xp: 250 } },
  { id: 26, type: 'battle', title: 'Número de Erdős Infinito', description: 'Sem conexão matemática', kingdom: 'numerologo', act: 3, position: { x: 50, y: 146 }, requiredLevel: 9, locked: true, completed: false, enemyId: 'erdos_infinito', rewards: { xp: 350, gold: 300 } },
  { id: 27, type: 'puzzle', title: 'Paradoxo do Hotel', description: 'Infinito + 1 = Infinito', kingdom: 'numerologo', act: 3, position: { x: 65, y: 146 }, requiredLevel: 10, locked: true, completed: false, rewards: { xp: 400 } },
  { id: 28, type: 'battle', title: 'Número Transcendental Hostil', description: 'π ou e corrompido', kingdom: 'numerologo', act: 3, position: { x: 35, y: 154 }, requiredLevel: 10, locked: true, completed: false, enemyId: 'transcendental_hostil', rewards: { xp: 400, gold: 350 } },
  { id: 29, type: 'treasure', title: 'Constante de Ramanujan', description: 'e^(π√163) ≈ inteiro', kingdom: 'numerologo', act: 3, position: { x: 50, y: 162 }, requiredLevel: 10, locked: true, completed: false, rewards: { xp: 500, gold: 400 } },
  { id: 30, type: 'boss', title: 'Aleph-Um', description: 'ℵ₁ - Infinito não-enumerável', kingdom: 'numerologo', act: 3, position: { x: 50, y: 170 }, requiredLevel: 11, locked: true, completed: false, isBoss: true, enemyId: 'aleph_um', rewards: { xp: 800, gold: 500 }, activatesBeacon: true },

  // ATO IV: Laboratório de Conjecturas (31-40)
  { id: 31, type: 'story', title: 'Sala dos Problemas Não-Resolvidos', description: 'Conjecturas aguardam', kingdom: 'numerologo', act: 4, position: { x: 50, y: 178 }, requiredLevel: 12, locked: true, completed: false, rewards: { xp: 0 } },
  { id: 32, type: 'npc', title: 'Pitágoras - Libertação', description: 'Ritual de despertar', kingdom: 'numerologo', act: 4, position: { x: 40, y: 186 }, requiredLevel: 12, locked: true, completed: false, npcId: 'pitagoras_numbers', rewards: { xp: 300 } },
  { id: 33, type: 'battle', title: 'Conjectura de Goldbach Quebrada', description: 'Todo par NÃO é soma de primos', kingdom: 'numerologo', act: 4, position: { x: 45, y: 194 }, requiredLevel: 12, locked: true, completed: false, enemyId: 'goldbach_quebrada', rewards: { xp: 450, gold: 400 } },
  { id: 34, type: 'puzzle', title: 'Hipótese de Riemann', description: 'Zeros da função zeta', kingdom: 'numerologo', act: 4, position: { x: 55, y: 194 }, requiredLevel: 13, locked: true, completed: false, rewards: { xp: 500 } },
  { id: 35, type: 'battle', title: 'Primo Gêmeo Solitário', description: 'Primo sem seu par', kingdom: 'numerologo', act: 4, position: { x: 50, y: 202 }, requiredLevel: 13, locked: true, completed: false, enemyId: 'primo_gemeo_solitario', rewards: { xp: 500, gold: 450 } },
  { id: 36, type: 'puzzle', title: 'Conjectura de Collatz', description: '3n+1 para sempre?', kingdom: 'numerologo', act: 4, position: { x: 65, y: 202 }, requiredLevel: 13, locked: true, completed: false, rewards: { xp: 600 } },
  { id: 37, type: 'battle', title: 'Número de Mersenne Falso', description: '2^p - 1 que não é primo', kingdom: 'numerologo', act: 4, position: { x: 35, y: 210 }, requiredLevel: 14, locked: true, completed: false, enemyId: 'mersenne_falso', rewards: { xp: 550, gold: 500 } },
  { id: 38, type: 'npc', title: 'Eco do Último Matemático', description: 'A verdade sobre os números', kingdom: 'numerologo', act: 4, position: { x: 50, y: 218 }, requiredLevel: 14, locked: true, completed: false, npcId: 'ultimo_matematico_numbers', rewards: { xp: 400 } },
  { id: 39, type: 'battle', title: 'Guardiões da Primalidade', description: 'Testes de primalidade vivos', kingdom: 'numerologo', act: 4, position: { x: 50, y: 226 }, requiredLevel: 15, locked: true, completed: false, enemyId: 'guardioes_primalidade', rewards: { xp: 700, gold: 600 } },
  { id: 40, type: 'boss', title: 'O Paradoxo Zero Numérico', description: 'Zero que contém infinito', kingdom: 'numerologo', act: 4, position: { x: 50, y: 234 }, requiredLevel: 15, locked: true, completed: false, isBoss: true, enemyId: 'paradoxo_zero_numerico', rewards: { xp: 1500, gold: 1000 }, activatesBeacon: true }
];

export const numbersKingdom: KingdomData = {
  id: 'numerologo',
  name: 'numerologo',
  displayName: 'Reino dos Números',
  description: 'Salve a Cripta dos Números Primos e restaure a ordem numérica',
  loreIntro: ['A Cripta dos Números Primos foi invadida por Zeros Absolutos.', 'Números perfeitos perderam sua perfeição.', 'Pitágoras medita petrificado no centro da Cripta.'],
  icon: '🔢',
  color: 'amber',
  gradient: 'from-amber-500 to-orange-600',
  nodes: numbersNodes,
  npcs: ['pitagoras_numbers', 'euclides_numbers', 'fibonacci', 'gauss', 'ramanujan', 'erdos'],
  enemies: [
    'composto_hostil', 'zero_absoluto', 'divisor_improprio', 'mdc_corrompido', 'guardiao_primo',
    'termo_desalinhado', 'pa_quebrada', 'espiral_invertida', 'ouro_corrompido',
    'aleph_zero', 'erdos_infinito', 'transcendental_hostil', 'aleph_um',
    'goldbach_quebrada', 'primo_gemeo_solitario', 'mersenne_falso', 'guardioes_primalidade', 'paradoxo_zero_numerico'
  ],
  totalActs: 4,
  estimatedPlaytime: '22-28 horas',
  endings: [
    { id: 'prime_harmony', name: 'Harmonia Primordial', description: 'Todos os primos em ordem', requirement: 'Restaurar todos os números primos' },
    { id: 'infinite_acceptance', name: 'Aceitação do Infinito', description: 'Conviver com paradoxos', requirement: 'Aceitar os infinitos de Cantor' },
    { id: 'new_axiom', name: 'Novo Axioma Numérico', description: 'Criar nova teoria dos números', requirement: 'Propor axioma inédito' }
  ]
};
