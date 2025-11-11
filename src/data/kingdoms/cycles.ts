import { KingdomData, KingdomNode } from '@/types/kingdom';

// Reino dos Ciclos (Trigonometria) - Versão Compacta mas Completa
const cyclesNodes: KingdomNode[] = [
  // ATO I: Observatório Parado (1-10)
  { id: 1, type: 'npc', title: 'Hipátia no Observatório', description: 'A sábia aguarda parada no tempo', kingdom: 'trigonometra', act: 1, position: { x: 50, y: 10 }, requiredLevel: 1, locked: false, completed: false, npcId: 'hipatia_cycles', rewards: { xp: 50 } },
  { id: 2, type: 'battle', title: 'Ângulo Complementar Hostil', description: 'Um ângulo que não soma 90°', kingdom: 'trigonometra', act: 1, position: { x: 50, y: 18 }, requiredLevel: 1, locked: false, completed: false, enemyId: 'angulo_complementar', rewards: { xp: 100, gold: 50 }, challenge: { question: 'Quantos graus tem um círculo completo?', answer: 360, hint: 'Uma volta completa', difficulty: 'easy' } },
  { id: 3, type: 'npc', title: 'Hipátia - Ângulos', description: 'Lição sobre medidas angulares', kingdom: 'trigonometra', act: 1, position: { x: 40, y: 26 }, requiredLevel: 1, locked: false, completed: false, npcId: 'hipatia_cycles', rewards: { xp: 75 } },
  { id: 4, type: 'battle', title: 'Grau Radiante Confuso', description: 'Conversão entre graus e radianos', kingdom: 'trigonometra', act: 1, position: { x: 60, y: 26 }, requiredLevel: 2, locked: true, completed: false, enemyId: 'grau_radiante', rewards: { xp: 150, gold: 75 }, challenge: { question: 'Quantos graus tem um ângulo reto?', answer: 90, hint: 'Um quarto de volta', difficulty: 'easy' } },
  { id: 5, type: 'puzzle', title: 'Círculo Unitário', description: 'Mapeie ângulos no círculo', kingdom: 'trigonometra', act: 1, position: { x: 50, y: 34 }, requiredLevel: 2, locked: true, completed: false, rewards: { xp: 200 } },
  { id: 6, type: 'battle', title: 'Quadrante Invertido', description: 'Quadrantes trocados', kingdom: 'trigonometra', act: 1, position: { x: 35, y: 42 }, requiredLevel: 2, locked: true, completed: false, enemyId: 'quadrante_invertido', rewards: { xp: 150, gold: 100 } },
  { id: 7, type: 'npc', title: 'Ptolomeu - Cordas', description: 'Antiga trigonometria', kingdom: 'trigonometra', act: 1, position: { x: 50, y: 50 }, requiredLevel: 3, locked: true, completed: false, npcId: 'ptolomeu', rewards: { xp: 100 } },
  { id: 8, type: 'battle', title: 'Corda Quebrada', description: 'Relação corda-ângulo corrompida', kingdom: 'trigonometra', act: 1, position: { x: 65, y: 50 }, requiredLevel: 3, locked: true, completed: false, enemyId: 'corda_quebrada', rewards: { xp: 200, gold: 150 } },
  { id: 9, type: 'treasure', title: 'Relógio Cósmico Parado', description: 'Artefato do tempo cíclico', kingdom: 'trigonometra', act: 1, position: { x: 50, y: 58 }, requiredLevel: 3, locked: true, completed: false, rewards: { xp: 250, gold: 200 } },
  { id: 10, type: 'boss', title: 'Relógio Dessincronizado', description: 'Boss que perdeu seu ritmo', kingdom: 'trigonometra', act: 1, position: { x: 50, y: 66 }, requiredLevel: 4, locked: true, completed: false, isBoss: true, enemyId: 'relogio_boss', rewards: { xp: 500, gold: 300 }, activatesBeacon: true },

  // ATO II: Ondas do Caos (11-20)
  { id: 11, type: 'story', title: 'Mar de Ondas', description: 'Ondas caóticas surgem', kingdom: 'trigonometra', act: 2, position: { x: 50, y: 74 }, requiredLevel: 4, locked: true, completed: false, rewards: { xp: 0 } },
  { id: 12, type: 'npc', title: 'Brahmagupta - Senos', description: 'Funções trigonométricas', kingdom: 'trigonometra', act: 2, position: { x: 35, y: 82 }, requiredLevel: 4, locked: true, completed: false, npcId: 'brahmagupta_cycles', rewards: { xp: 150 } },
  { id: 13, type: 'battle', title: 'Onda Dessincronizada', description: 'Frequência instável', kingdom: 'trigonometra', act: 2, position: { x: 45, y: 90 }, requiredLevel: 5, locked: true, completed: false, enemyId: 'onda_dessincronizada', rewards: { xp: 200, gold: 150 }, challenge: { question: 'Sen(90°) = ?', answer: 1, hint: 'No topo do círculo unitário', difficulty: 'medium' } },
  { id: 14, type: 'puzzle', title: 'Templo das Funções', description: 'Sen, Cos, Tan', kingdom: 'trigonometra', act: 2, position: { x: 55, y: 90 }, requiredLevel: 5, locked: true, completed: false, rewards: { xp: 250 } },
  { id: 15, type: 'npc', title: 'Euler - Identidade', description: 'e^(iπ) + 1 = 0', kingdom: 'trigonometra', act: 2, position: { x: 65, y: 82 }, requiredLevel: 5, locked: true, completed: false, npcId: 'euler', rewards: { xp: 175 } },
  { id: 16, type: 'battle', title: 'Assíntota Tangente', description: 'Tan(90°) indefinido', kingdom: 'trigonometra', act: 2, position: { x: 50, y: 98 }, requiredLevel: 6, locked: true, completed: false, enemyId: 'assintota_tangente', rewards: { xp: 250, gold: 200 } },
  { id: 17, type: 'puzzle', title: 'Valores Notáveis', description: '30°, 45°, 60°', kingdom: 'trigonometra', act: 2, position: { x: 65, y: 98 }, requiredLevel: 6, locked: true, completed: false, rewards: { xp: 300 } },
  { id: 18, type: 'npc', title: 'Brahmagupta - Identidades', description: 'Sen² + Cos² = 1', kingdom: 'trigonometra', act: 2, position: { x: 35, y: 106 }, requiredLevel: 6, locked: true, completed: false, npcId: 'brahmagupta_cycles', rewards: { xp: 200 } },
  { id: 19, type: 'battle', title: 'Frequência Dissonante', description: 'Harmonia quebrada', kingdom: 'trigonometra', act: 2, position: { x: 65, y: 106 }, requiredLevel: 7, locked: true, completed: false, enemyId: 'frequencia_dissonante', rewards: { xp: 300, gold: 250 } },
  { id: 20, type: 'boss', title: 'Assíntota Infinita', description: 'Aproximação sem fim', kingdom: 'trigonometra', act: 2, position: { x: 50, y: 114 }, requiredLevel: 7, locked: true, completed: false, isBoss: true, enemyId: 'assintota_boss', rewards: { xp: 600, gold: 400 }, activatesBeacon: true },

  // ATO III: Cidade das Frequências (21-30)
  { id: 21, type: 'story', title: 'Cidade Harmônica', description: 'Frequências formam torres', kingdom: 'trigonometra', act: 3, position: { x: 50, y: 122 }, requiredLevel: 8, locked: true, completed: false, rewards: { xp: 0 } },
  { id: 22, type: 'npc', title: 'Oresme - Gráficos', description: 'Visualização de funções', kingdom: 'trigonometra', act: 3, position: { x: 40, y: 130 }, requiredLevel: 8, locked: true, completed: false, npcId: 'oresme', rewards: { xp: 200 } },
  { id: 23, type: 'battle', title: 'Harmônica Corrompida', description: 'Série harmônica infinita', kingdom: 'trigonometra', act: 3, position: { x: 45, y: 138 }, requiredLevel: 8, locked: true, completed: false, enemyId: 'harmonica_corrompida', rewards: { xp: 300, gold: 250 } },
  { id: 24, type: 'puzzle', title: 'Galeria de Ondas', description: 'Amplitude e período', kingdom: 'trigonometra', act: 3, position: { x: 55, y: 138 }, requiredLevel: 9, locked: true, completed: false, rewards: { xp: 350 } },
  { id: 25, type: 'npc', title: 'Euler - Séries', description: 'Fourier conceitual', kingdom: 'trigonometra', act: 3, position: { x: 60, y: 130 }, requiredLevel: 9, locked: true, completed: false, npcId: 'euler', rewards: { xp: 250 } },
  { id: 26, type: 'battle', title: 'Batimento Caótico', description: 'Interferência destrutiva', kingdom: 'trigonometra', act: 3, position: { x: 50, y: 146 }, requiredLevel: 9, locked: true, completed: false, enemyId: 'batimento_caotico', rewards: { xp: 350, gold: 300 } },
  { id: 27, type: 'puzzle', title: 'Ressonância', description: 'Sincronize frequências', kingdom: 'trigonometra', act: 3, position: { x: 65, y: 146 }, requiredLevel: 10, locked: true, completed: false, rewards: { xp: 400 } },
  { id: 28, type: 'battle', title: 'Fase Invertida', description: 'Onda fora de fase', kingdom: 'trigonometra', act: 3, position: { x: 35, y: 154 }, requiredLevel: 10, locked: true, completed: false, enemyId: 'fase_invertida', rewards: { xp: 400, gold: 350 } },
  { id: 29, type: 'treasure', title: 'Diapasão Perfeito', description: 'Frequência fundamental', kingdom: 'trigonometra', act: 3, position: { x: 50, y: 162 }, requiredLevel: 10, locked: true, completed: false, rewards: { xp: 500, gold: 400 } },
  { id: 30, type: 'boss', title: 'Interferência Destrutiva', description: 'Ondas que se cancelam', kingdom: 'trigonometra', act: 3, position: { x: 50, y: 170 }, requiredLevel: 11, locked: true, completed: false, isBoss: true, enemyId: 'interferencia_boss', rewards: { xp: 800, gold: 500 }, activatesBeacon: true },

  // ATO IV: Laboratório Cíclico (31-40)
  { id: 31, type: 'story', title: 'Laboratório Temporal', description: 'Onde o tempo é cíclico', kingdom: 'trigonometra', act: 4, position: { x: 50, y: 178 }, requiredLevel: 12, locked: true, completed: false, rewards: { xp: 0 } },
  { id: 32, type: 'npc', title: 'Hipátia - Libertação', description: 'Ritual de libertação', kingdom: 'trigonometra', act: 4, position: { x: 40, y: 186 }, requiredLevel: 12, locked: true, completed: false, npcId: 'hipatia_cycles', rewards: { xp: 300 } },
  { id: 33, type: 'battle', title: 'Identidade Quebrada', description: 'Sen² + Cos² ≠ 1', kingdom: 'trigonometra', act: 4, position: { x: 45, y: 194 }, requiredLevel: 12, locked: true, completed: false, enemyId: 'identidade_quebrada', rewards: { xp: 450, gold: 400 } },
  { id: 34, type: 'puzzle', title: 'Sala das Identidades', description: 'Prove identidades', kingdom: 'trigonometra', act: 4, position: { x: 55, y: 194 }, requiredLevel: 13, locked: true, completed: false, rewards: { xp: 500 } },
  { id: 35, type: 'battle', title: 'Série de Fourier Corrupta', description: 'Harmônicos descontrolados', kingdom: 'trigonometra', act: 4, position: { x: 50, y: 202 }, requiredLevel: 13, locked: true, completed: false, enemyId: 'fourier_corrupta', rewards: { xp: 500, gold: 450 } },
  { id: 36, type: 'puzzle', title: 'Câmara dos Ciclos', description: 'Periodicidade universal', kingdom: 'trigonometra', act: 4, position: { x: 65, y: 202 }, requiredLevel: 13, locked: true, completed: false, rewards: { xp: 600 } },
  { id: 37, type: 'battle', title: 'Período Infinito', description: 'Ciclo que nunca se repete', kingdom: 'trigonometra', act: 4, position: { x: 35, y: 210 }, requiredLevel: 14, locked: true, completed: false, enemyId: 'periodo_infinito', rewards: { xp: 550, gold: 500 } },
  { id: 38, type: 'npc', title: 'Eco do Último Matemático', description: 'A verdade sobre os ciclos', kingdom: 'trigonometra', act: 4, position: { x: 50, y: 218 }, requiredLevel: 14, locked: true, completed: false, npcId: 'ultimo_matematico_cycles', rewards: { xp: 400 } },
  { id: 39, type: 'battle', title: 'Guardiões Cíclicos', description: 'Ondas múltiplas', kingdom: 'trigonometra', act: 4, position: { x: 50, y: 226 }, requiredLevel: 15, locked: true, completed: false, enemyId: 'guardioes_ciclicos', rewards: { xp: 700, gold: 600 } },
  { id: 40, type: 'boss', title: 'O Paradoxo Cíclico', description: 'Ciclo impossível', kingdom: 'trigonometra', act: 4, position: { x: 50, y: 234 }, requiredLevel: 15, locked: true, completed: false, isBoss: true, enemyId: 'paradoxo_ciclico', rewards: { xp: 1500, gold: 1000 }, activatesBeacon: true }
];

export const cyclesKingdom: KingdomData = {
  id: 'trigonometra',
  name: 'trigonometra',
  displayName: 'Reino dos Ciclos',
  description: 'Sincronize o Relógio Cósmico e restaure as ondas matemáticas',
  loreIntro: ['O Relógio Cósmico parou no momento do Paradoxo Zero.', 'Senos e cossenos oscilam caoticamente.', 'Hipátia aguarda no Observatório Celeste.'],
  icon: '∿',
  color: 'pink',
  gradient: 'from-pink-500 to-rose-600',
  nodes: cyclesNodes,
  npcs: ['hipatia_cycles', 'ptolomeu', 'brahmagupta_cycles', 'euler', 'oresme'],
  enemies: [
    'angulo_complementar', 'grau_radiante', 'quadrante_invertido', 'corda_quebrada', 'relogio_boss',
    'onda_dessincronizada', 'assintota_tangente', 'frequencia_dissonante', 'assintota_boss',
    'harmonica_corrompida', 'batimento_caotico', 'fase_invertida', 'interferencia_boss',
    'identidade_quebrada', 'fourier_corrupta', 'periodo_infinito', 'guardioes_ciclicos', 'paradoxo_ciclico'
  ],
  totalActs: 4,
  estimatedPlaytime: '20-25 horas',
  endings: [
    { id: 'perfect_sync', name: 'Sincronização Perfeita', description: 'Todos os ciclos em harmonia', requirement: 'Restaurar todos os ritmos' },
    { id: 'controlled_chaos', name: 'Caos Controlado', description: 'Permitir variações cíclicas', requirement: 'Aceitar zonas de batimento' },
    { id: 'new_frequency', name: 'Nova Frequência', description: 'Criar um novo sistema cíclico', requirement: 'Propor nova periodicidade' }
  ]
};
