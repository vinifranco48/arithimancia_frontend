import { KingdomData, KingdomNode } from '@/types/kingdom';

// ============================================
// REINO DA GEOMETRIA - 40 Nós de Conteúdo
// ============================================

const geometryNodes: KingdomNode[] = [
  // ====================================
  // ATO I: A Biblioteca de Formas (Nós 1-10)
  // ====================================
  {
    id: 1,
    type: 'npc',
    title: 'Encontro com Euclides',
    description: 'O Pai da Geometria aguarda na biblioteca, petrificado em meditação',
    kingdom: 'geometra',
    act: 1,
    position: { x: 50, y: 10 },
    requiredLevel: 1,
    locked: false,
    completed: false,
    npcId: 'euclides',
    rewards: { xp: 50, axiom: 'Axioma da Reta' },
    dialogue: {
      intro: 'Saudações, jovem Geômetra. A Biblioteca de Formas Perfeitas desmoronou... mas você está aqui.',
      lesson: 'Deixe-me ensinar os axiomas fundamentais: pontos, retas e planos.',
      completion: 'Você compreendeu! A base da geometria ainda existe. Continue, reconstrutor.'
    }
  },
  {
    id: 2,
    type: 'battle',
    title: 'Linha Quebrada',
    description: 'Um segmento de reta corrompido bloqueia o corredor da biblioteca',
    kingdom: 'geometra',
    act: 1,
    position: { x: 50, y: 18 },
    requiredLevel: 1,
    locked: false,
    completed: false,
    enemyId: 'linha_quebrada',
    rewards: { xp: 100, gold: 50 },
    challenge: {
      question: 'Quantos pontos são necessários para definir uma reta única?',
      answer: 2,
      hint: 'Pense no axioma: por dois pontos passa uma única reta',
      difficulty: 'easy'
    }
  },
  {
    id: 3,
    type: 'npc',
    title: 'Euclides - Lição dos Ângulos',
    description: 'Euclides ensina sobre ângulos e suas medidas',
    kingdom: 'geometra',
    act: 1,
    position: { x: 40, y: 26 },
    requiredLevel: 1,
    locked: false,
    completed: false,
    npcId: 'euclides',
    rewards: { xp: 75, axiom: 'Axioma dos Ângulos' },
    dialogue: {
      intro: 'Agora, vamos falar sobre ângulos. Quando duas retas se encontram...',
      lesson: 'Ângulos agudos, retos e obtusos. Cada um tem sua propriedade.',
      completion: 'Perfeito! Você restaurou a compreensão dos ângulos.'
    }
  },
  {
    id: 4,
    type: 'battle',
    title: 'Ângulo Distorcido',
    description: 'Um ângulo que mede mais de 360° ameaça a estabilidade local',
    kingdom: 'geometra',
    act: 1,
    position: { x: 60, y: 26 },
    requiredLevel: 2,
    locked: true,
    completed: false,
    enemyId: 'angulo_distorcido',
    rewards: { xp: 150, gold: 75 },
    challenge: {
      question: 'Quantos graus mede um ângulo reto?',
      answer: 90,
      hint: 'Um quarto de volta completa (360°)',
      difficulty: 'easy'
    }
  },
  {
    id: 5,
    type: 'puzzle',
    title: 'Triângulos Impossíveis',
    description: 'Triângulos com soma de ângulos incorreta precisam ser corrigidos',
    kingdom: 'geometra',
    act: 1,
    position: { x: 50, y: 34 },
    requiredLevel: 2,
    locked: true,
    completed: false,
    puzzleType: 'angle_sum',
    rewards: { xp: 200, theorem: 'Teorema da Soma dos Ângulos Internos' },
    challenge: {
      question: 'Qual é a soma dos ângulos internos de um triângulo?',
      answer: 180,
      hint: 'Todos os triângulos, independente do formato, têm a mesma soma',
      difficulty: 'medium'
    }
  },
  {
    id: 6,
    type: 'battle',
    title: 'Triângulo Escaleno Selvagem',
    description: 'Um triângulo com lados desproporcionais ataca',
    kingdom: 'geometra',
    act: 1,
    position: { x: 35, y: 42 },
    requiredLevel: 2,
    locked: true,
    completed: false,
    enemyId: 'triangulo_escaleno',
    rewards: { xp: 150, gold: 100 }
  },
  {
    id: 7,
    type: 'npc',
    title: 'Pitágoras - O Teorema Sagrado',
    description: 'Pitágoras, mestre dos triângulos retângulos, compartilha seu conhecimento',
    kingdom: 'geometra',
    act: 1,
    position: { x: 50, y: 50 },
    requiredLevel: 3,
    locked: true,
    completed: false,
    npcId: 'pitagoras_geom',
    rewards: { xp: 100, theorem: 'Teorema de Pitágoras' },
    dialogue: {
      intro: 'Ah, um Geômetra! Deixe-me mostrar o teorema que une lados e hipotenusa.',
      lesson: 'Em todo triângulo retângulo: a² + b² = c²',
      completion: 'Agora você possui a chave dos triângulos retângulos!'
    }
  },
  {
    id: 8,
    type: 'battle',
    title: 'Hipotenusa Fugitiva',
    description: 'A hipotenusa de um triângulo retângulo tenta escapar da equação',
    kingdom: 'geometra',
    act: 1,
    position: { x: 65, y: 50 },
    requiredLevel: 3,
    locked: true,
    completed: false,
    enemyId: 'hipotenusa_fugitiva',
    rewards: { xp: 200, gold: 150 },
    challenge: {
      question: 'Se os catetos de um triângulo retângulo medem 3 e 4, quanto mede a hipotenusa?',
      answer: 5,
      hint: 'Use o teorema de Pitágoras: a² + b² = c²',
      difficulty: 'medium'
    }
  },
  {
    id: 9,
    type: 'treasure',
    title: 'Compasso de Realidade',
    description: 'Um artefato lendário que desenha círculos perfeitos',
    kingdom: 'geometra',
    act: 1,
    position: { x: 50, y: 58 },
    requiredLevel: 3,
    locked: true,
    completed: false,
    rewards: { xp: 250, gold: 200, item: 'Compasso de Realidade' }
  },
  {
    id: 10,
    type: 'boss',
    title: 'Fractal Parasita da Biblioteca',
    description: 'Um padrão fractal infinito que infectou a biblioteca',
    kingdom: 'geometra',
    act: 1,
    position: { x: 50, y: 66 },
    requiredLevel: 4,
    locked: true,
    completed: false,
    isBoss: true,
    enemyId: 'fractal_parasita_boss',
    rewards: { xp: 500, gold: 300 },
    activatesBeacon: true,
    beaconName: 'Farol Axiomático I - Biblioteca',
    challenge: {
      question: 'Se um quadrado tem área 16, qual é o comprimento de seu lado?',
      answer: 4,
      hint: 'Área = lado². Então lado = √área',
      difficulty: 'medium'
    }
  },

  // ====================================
  // ATO II: O Deserto das Funções (Nós 11-20)
  // ====================================
  {
    id: 11,
    type: 'story',
    title: 'Entrada no Deserto',
    description: 'Você atravessa o portal e adentra o Deserto das Funções Perdidas',
    kingdom: 'geometra',
    act: 2,
    position: { x: 50, y: 74 },
    requiredLevel: 4,
    locked: true,
    completed: false,
    rewards: { xp: 0 },
    storyContent: [
      'O Farol Axiomático se acende atrás de você, iluminando a biblioteca restaurada.',
      'À frente, um portal se abre para o Deserto das Funções Perdidas.',
      'Dunas de areia formam curvas parabólicas. O horizonte oscila como uma onda senoidal.',
      'Você sente que a geometria aqui é... diferente. Mais fluida, mais dinâmica.',
      'Um eco distante chama seu nome. É Thales de Mileto, aguardando no Oásis das Proporções.'
    ]
  },
  {
    id: 12,
    type: 'npc',
    title: 'Thales de Mileto',
    description: 'O primeiro geômetra grego ensina sobre proporções e semelhança',
    kingdom: 'geometra',
    act: 2,
    position: { x: 35, y: 82 },
    requiredLevel: 4,
    locked: true,
    completed: false,
    npcId: 'thales',
    rewards: { xp: 150, theorem: 'Teorema de Thales' },
    dialogue: {
      intro: 'Bem-vindo, viajante geométrico. No deserto, aprenderemos sobre proporções.',
      lesson: 'Triângulos semelhantes mantêm suas proporções. Esta é a chave da geometria analítica.',
      completion: 'Excelente! Agora você pode ver padrões mesmo em meio ao caos.'
    }
  },
  {
    id: 13,
    type: 'battle',
    title: 'Sombras Desproporcionais',
    description: 'Sombras que não respeitam as leis da geometria',
    kingdom: 'geometra',
    act: 2,
    position: { x: 45, y: 90 },
    requiredLevel: 5,
    locked: true,
    completed: false,
    enemyId: 'sombra_desproporcional',
    rewards: { xp: 200, gold: 150 },
    challenge: {
      question: 'Se uma vara de 2m projeta uma sombra de 3m, quanto medem 6m de sombra? (altura da vara)',
      answer: 4,
      hint: 'Use proporção: 2/3 = x/6',
      difficulty: 'medium'
    }
  },
  {
    id: 14,
    type: 'puzzle',
    title: 'Oásis das Proporções',
    description: 'Restaurar a razão áurea nas palmeiras do oásis',
    kingdom: 'geometra',
    act: 2,
    position: { x: 55, y: 90 },
    requiredLevel: 5,
    locked: true,
    completed: false,
    puzzleType: 'golden_ratio',
    rewards: { xp: 250, theorem: 'Teorema da Razão Áurea' },
    challenge: {
      question: 'A razão áurea φ (phi) é aproximadamente igual a qual número? (arredonde para 2)',
      answer: 2,
      hint: 'φ ≈ 1.618... arredondado para o inteiro mais próximo',
      difficulty: 'medium'
    }
  },
  {
    id: 15,
    type: 'npc',
    title: 'Arquimedes - Os Círculos',
    description: 'Arquimedes revela os segredos do número π (pi)',
    kingdom: 'geometra',
    act: 2,
    position: { x: 65, y: 82 },
    requiredLevel: 5,
    locked: true,
    completed: false,
    npcId: 'arquimedes',
    rewards: { xp: 175 },
    dialogue: {
      intro: 'Eureka! Você chegou ao Templo do Círculo Dourado!',
      lesson: 'O círculo... A forma mais perfeita. E π é sua essência: C = 2πr',
      completion: 'Agora você compreende a transcendência dos círculos!'
    }
  },
  {
    id: 16,
    type: 'battle',
    title: 'Círculo Imperfeito',
    description: 'Um círculo com raio variável ataca',
    kingdom: 'geometra',
    act: 2,
    position: { x: 50, y: 98 },
    requiredLevel: 6,
    locked: true,
    completed: false,
    enemyId: 'circulo_imperfeito',
    rewards: { xp: 250, gold: 200 },
    challenge: {
      question: 'Se um círculo tem raio 5, qual é aproximadamente sua circunferência? (use π≈3)',
      answer: 30,
      hint: 'C = 2 × π × r = 2 × 3 × 5',
      difficulty: 'medium'
    }
  },
  {
    id: 17,
    type: 'puzzle',
    title: 'Templo do Círculo Dourado',
    description: 'Calcular áreas de círculos para ativar portais sagrados',
    kingdom: 'geometra',
    act: 2,
    position: { x: 65, y: 98 },
    requiredLevel: 6,
    locked: true,
    completed: false,
    puzzleType: 'circle_area',
    rewards: { xp: 300 },
    challenge: {
      question: 'Qual é a área de um círculo com raio 3? (use π≈3, calcule πr²)',
      answer: 27,
      hint: 'A = π × r² = 3 × 3² = 3 × 9',
      difficulty: 'medium'
    }
  },
  {
    id: 18,
    type: 'npc',
    title: 'Arquimedes - A Espiral',
    description: 'Arquimedes ensina sobre espirais e crescimento geométrico',
    kingdom: 'geometra',
    act: 2,
    position: { x: 35, y: 106 },
    requiredLevel: 6,
    locked: true,
    completed: false,
    npcId: 'arquimedes',
    rewards: { xp: 200, theorem: 'Espiral de Arquimedes' },
    dialogue: {
      intro: 'Veja esta espiral... ela cresce de forma precisa, matemática.',
      lesson: 'A espiral de Arquimedes é definida por r = aθ em coordenadas polares.',
      completion: 'Fascinante, não é? A geometria pode descrever até mesmo o crescimento!'
    }
  },
  {
    id: 19,
    type: 'battle',
    title: 'Espiral Infinita',
    description: 'Uma espiral que se replica infinitamente',
    kingdom: 'geometra',
    act: 2,
    position: { x: 65, y: 106 },
    requiredLevel: 7,
    locked: true,
    completed: false,
    enemyId: 'espiral_infinita',
    rewards: { xp: 300, gold: 250 },
    challenge: {
      question: 'Quantos lados tem um círculo?',
      answer: 0,
      hint: 'Um círculo não tem lados retos!',
      difficulty: 'easy'
    }
  },
  {
    id: 20,
    type: 'boss',
    title: 'Assíntota Circular',
    description: 'Uma entidade que se aproxima infinitamente mas nunca toca',
    kingdom: 'geometra',
    act: 2,
    position: { x: 50, y: 114 },
    requiredLevel: 7,
    locked: true,
    completed: false,
    isBoss: true,
    bossPhases: 2,
    enemyId: 'assintota_circular_boss',
    rewards: { xp: 600, gold: 400 },
    activatesBeacon: true,
    beaconName: 'Farol Axiomático II - Deserto',
    challenge: {
      question: 'Se a área de um círculo é 12 (use π≈3), qual é o raio? (calcule √(A/π))',
      answer: 2,
      hint: 'A = πr², então r² = A/π = 12/3 = 4, logo r = 2',
      difficulty: 'hard'
    }
  },

  // ====================================
  // ATO III: A Cidade dos Polígonos Perfeitos (Nós 21-30)
  // ====================================
  {
    id: 21,
    type: 'story',
    title: 'Chegada à Cidade',
    description: 'A Cidade dos Círculos Perfeitos se revela',
    kingdom: 'geometra',
    act: 3,
    position: { x: 50, y: 122 },
    requiredLevel: 8,
    locked: true,
    completed: false,
    rewards: { xp: 0 },
    storyContent: [
      'O segundo Farol se acende, estabilizando o deserto atrás de você.',
      'À frente, as torres de uma cidade surgem: cúpulas perfeitas, arcos impecáveis.',
      'A Cidade dos Círculos Perfeitos foi construída com geometria áurea.',
      'Mas fractais parasitas infestam suas estruturas. Polígonos distorcidos vagam pelas ruas.',
      'René Descartes aguarda no Jardim das Coordenadas, pronto para ensinar a geometria analítica.'
    ]
  },
  {
    id: 22,
    type: 'npc',
    title: 'René Descartes',
    description: 'O criador do plano cartesiano oferece sua sabedoria',
    kingdom: 'geometra',
    act: 3,
    position: { x: 40, y: 130 },
    requiredLevel: 8,
    locked: true,
    completed: false,
    npcId: 'descartes',
    rewards: { xp: 200, theorem: 'Plano Cartesiano' },
    dialogue: {
      intro: 'Penso, logo existo. E penso em coordenadas!',
      lesson: 'Com o plano cartesiano (x, y), podemos descrever qualquer ponto no espaço.',
      completion: 'Agora você une álgebra e geometria. Isso é poder!'
    }
  },
  {
    id: 23,
    type: 'battle',
    title: 'Ponto Fora do Plano',
    description: 'Um ponto que se recusa a ter coordenadas',
    kingdom: 'geometra',
    act: 3,
    position: { x: 45, y: 138 },
    requiredLevel: 8,
    locked: true,
    completed: false,
    enemyId: 'ponto_fora_plano',
    rewards: { xp: 300, gold: 250 },
    challenge: {
      question: 'No plano cartesiano, qual é a distância entre a origem (0,0) e o ponto (3,4)?',
      answer: 5,
      hint: 'Use Pitágoras: d = √(3² + 4²)',
      difficulty: 'hard'
    }
  },
  {
    id: 24,
    type: 'puzzle',
    title: 'Jardim das Coordenadas',
    description: 'Plotar pontos para formar polígonos sagrados',
    kingdom: 'geometra',
    act: 3,
    position: { x: 55, y: 138 },
    requiredLevel: 9,
    locked: true,
    completed: false,
    puzzleType: 'coordinate_plot',
    rewards: { xp: 350, theorem: 'Teorema da Distância' },
    challenge: {
      question: 'Quantos quadrantes existem no plano cartesiano?',
      answer: 4,
      hint: 'Os eixos x e y dividem o plano em quantas partes?',
      difficulty: 'easy'
    }
  },
  {
    id: 25,
    type: 'npc',
    title: 'Hipátia - Geometria Espacial',
    description: 'A sábia de Alexandria ensina sobre dimensões',
    kingdom: 'geometra',
    act: 3,
    position: { x: 60, y: 130 },
    requiredLevel: 9,
    locked: true,
    completed: false,
    npcId: 'hipatia_geom',
    rewards: { xp: 250, theorem: 'Geometria Tridimensional' },
    dialogue: {
      intro: 'Saímos do plano e entramos no espaço. Prepare-se para a terceira dimensão!',
      lesson: 'Cubos, esferas, pirâmides... Sólidos geométricos possuem volume, não apenas área.',
      completion: 'Agora você vê em três dimensões. O mundo se expandiu!'
    }
  },
  {
    id: 26,
    type: 'battle',
    title: 'Cubo Dimensional',
    description: 'Um cubo que muda de dimensão aleatoriamente',
    kingdom: 'geometra',
    act: 3,
    position: { x: 50, y: 146 },
    requiredLevel: 9,
    locked: true,
    completed: false,
    enemyId: 'cubo_dimensional',
    rewards: { xp: 350, gold: 300 },
    challenge: {
      question: 'Qual é o volume de um cubo com aresta 3?',
      answer: 27,
      hint: 'V = aresta³ = 3³',
      difficulty: 'medium'
    }
  },
  {
    id: 27,
    type: 'puzzle',
    title: 'Cúpula das Dimensões',
    description: 'Restaurar os cinco sólidos platônicos',
    kingdom: 'geometra',
    act: 3,
    position: { x: 65, y: 146 },
    requiredLevel: 10,
    locked: true,
    completed: false,
    puzzleType: 'platonic_solids',
    rewards: { xp: 400, theorem: 'Sólidos Platônicos' }
  },
  {
    id: 28,
    type: 'battle',
    title: 'Poliedro Corrompido',
    description: 'Um poliedro com faces impossíveis',
    kingdom: 'geometra',
    act: 3,
    position: { x: 35, y: 154 },
    requiredLevel: 10,
    locked: true,
    completed: false,
    enemyId: 'poliedro_corrompido',
    rewards: { xp: 400, gold: 350 },
    challenge: {
      question: 'Quantas faces tem um cubo?',
      answer: 6,
      hint: 'Conte: frente, trás, esquerda, direita, cima, baixo',
      difficulty: 'easy'
    }
  },
  {
    id: 29,
    type: 'treasure',
    title: 'Crivo de Eratóstenes Geométrico',
    description: 'Um artefato lendário que filtra formas imperfeitas',
    kingdom: 'geometra',
    act: 3,
    position: { x: 50, y: 162 },
    requiredLevel: 10,
    locked: true,
    completed: false,
    rewards: { xp: 500, gold: 400, item: 'Crivo Geométrico' }
  },
  {
    id: 30,
    type: 'boss',
    title: 'Paradoxo Geométrico',
    description: 'Uma forma que viola todos os axiomas euclidianos',
    kingdom: 'geometra',
    act: 3,
    position: { x: 50, y: 170 },
    requiredLevel: 11,
    locked: true,
    completed: false,
    isBoss: true,
    bossPhases: 3,
    enemyId: 'paradoxo_geometrico_boss',
    rewards: { xp: 800, gold: 500 },
    activatesBeacon: true,
    beaconName: 'Farol Axiomático III - Cidade',
    challenge: {
      question: 'Quantas arestas tem um tetraedro (pirâmide triangular)?',
      answer: 6,
      hint: 'Um tetraedro tem 4 faces triangulares. Conte as arestas compartilhadas.',
      difficulty: 'hard'
    }
  },

  // ====================================
  // ATO IV: O Laboratório do Último Matemático (Nós 31-40)
  // ====================================
  {
    id: 31,
    type: 'story',
    title: 'Portal para o Laboratório',
    description: 'O portal final se abre, revelando a origem do Paradoxo Zero',
    kingdom: 'geometra',
    act: 4,
    position: { x: 50, y: 178 },
    requiredLevel: 12,
    locked: true,
    completed: false,
    rewards: { xp: 0 },
    storyContent: [
      'Os três Faróis Axiomáticos brilham atrás de você, estabilizando três regiões.',
      'À frente, um portal instável pulsa com energia geometricamente impossível.',
      'Você ouve ecos de equações sendo resolvidas... e falhando.',
      'Este é o Laboratório do Último Matemático.',
      'Aqui, ele tentou unificar todas as geometrias em uma única forma.',
      'E aqui, o Paradoxo Zero nasceu.'
    ]
  },
  {
    id: 32,
    type: 'npc',
    title: 'Euclides - Libertação Final',
    description: 'O ritual para libertar Euclides da petrificação',
    kingdom: 'geometra',
    act: 4,
    position: { x: 40, y: 186 },
    requiredLevel: 12,
    locked: true,
    completed: false,
    npcId: 'euclides',
    rewards: { xp: 300, axiom: 'Axiomas Completos de Euclides' },
    dialogue: {
      intro: 'Você... você reuniu os axiomas. Posso sentir a pedra se quebrando!',
      lesson: 'Os cinco postulados estão completos. A geometria euclidiana está restaurada!',
      completion: 'Sou livre! E agora, lutarei ao seu lado contra o Paradoxo Zero!'
    }
  },
  {
    id: 33,
    type: 'battle',
    title: 'Equação Euclidiana Corrompida',
    description: 'Os próprios axiomas de Euclides foram corrompidos',
    kingdom: 'geometra',
    act: 4,
    position: { x: 45, y: 194 },
    requiredLevel: 12,
    locked: true,
    completed: false,
    enemyId: 'equacao_euclidiana',
    rewards: { xp: 450, gold: 400 },
    challenge: {
      question: 'Qual é o 5º postulado de Euclides sobre? (retas: 0=nunca se cruzam, 1=paralelas, 2=sempre se cruzam)',
      answer: 1,
      hint: 'O postulado das paralelas: por um ponto fora de uma reta passa uma única paralela',
      difficulty: 'hard'
    }
  },
  {
    id: 34,
    type: 'puzzle',
    title: 'Sala dos Axiomas Perdidos',
    description: 'Reconstruir os 5 postulados de Euclides na ordem correta',
    kingdom: 'geometra',
    act: 4,
    position: { x: 55, y: 194 },
    requiredLevel: 13,
    locked: true,
    completed: false,
    puzzleType: 'axiom_reconstruction',
    rewards: { xp: 500, theorem: 'Teorema dos Axiomas Completos' }
  },
  {
    id: 35,
    type: 'battle',
    title: 'Fragmento do Último Matemático',
    description: 'Um eco do Último Matemático, ainda tentando resolver o impossível',
    kingdom: 'geometra',
    act: 4,
    position: { x: 50, y: 202 },
    requiredLevel: 13,
    locked: true,
    completed: false,
    enemyId: 'fragmento_ultimo_matematico',
    rewards: { xp: 500, gold: 450 },
    challenge: {
      question: 'A soma dos ângulos internos de um quadrilátero é?',
      answer: 360,
      hint: 'Um quadrilátero pode ser dividido em 2 triângulos',
      difficulty: 'medium'
    }
  },
  {
    id: 36,
    type: 'puzzle',
    title: 'Câmara da Geometria Não-Euclidiana',
    description: 'Uma zona onde as regras de Euclides não se aplicam',
    kingdom: 'geometra',
    act: 4,
    position: { x: 65, y: 202 },
    requiredLevel: 13,
    locked: true,
    completed: false,
    puzzleType: 'non_euclidean',
    rewards: { xp: 600, theorem: 'Geometrias de Riemann' },
    challenge: {
      question: 'Em uma superfície esférica, a soma dos ângulos de um triângulo é maior, menor ou igual a 180°? (1=maior, 0=igual, -1=menor)',
      answer: 1,
      hint: 'Pense em triângulos desenhados na superfície de uma esfera',
      difficulty: 'hard'
    }
  },
  {
    id: 37,
    type: 'battle',
    title: 'Geometria Hiperbólica Selvagem',
    description: 'Uma forma que só existe em geometria hiperbólica',
    kingdom: 'geometra',
    act: 4,
    position: { x: 35, y: 210 },
    requiredLevel: 14,
    locked: true,
    completed: false,
    enemyId: 'geometria_hiperbolica',
    rewards: { xp: 550, gold: 500 },
    challenge: {
      question: 'Quantos graus tem a soma dos ângulos de um pentágono regular?',
      answer: 540,
      hint: 'Um pentágono pode ser dividido em 3 triângulos: 3 × 180°',
      difficulty: 'hard'
    }
  },
  {
    id: 38,
    type: 'npc',
    title: 'Eco do Último Matemático',
    description: 'A verdade final sobre o Paradoxo Zero é revelada',
    kingdom: 'geometra',
    act: 4,
    position: { x: 50, y: 218 },
    requiredLevel: 14,
    locked: true,
    completed: false,
    npcId: 'ultimo_matematico',
    rewards: { xp: 400 },
    dialogue: {
      intro: 'Você... chegou até aqui. Então você merece saber a verdade.',
      lesson: 'Eu tentei unir geometria euclidiana, hiperbólica e esférica em uma única forma.',
      completion: 'Mas não era possível... ou era? Cabe a você decidir o futuro da geometria.'
    }
  },
  {
    id: 39,
    type: 'battle',
    title: 'Guardiões do Laboratório',
    description: 'Múltiplas formas geométricas corrompidas atacam simultaneamente',
    kingdom: 'geometra',
    act: 4,
    position: { x: 50, y: 226 },
    requiredLevel: 15,
    locked: true,
    completed: false,
    enemyId: 'guardioes_laboratorio',
    rewards: { xp: 700, gold: 600 },
    challenge: {
      question: 'Qual é a área de um triângulo com base 6 e altura 4?',
      answer: 12,
      hint: 'A = (base × altura) / 2',
      difficulty: 'medium'
    }
  },
  {
    id: 40,
    type: 'boss',
    title: 'O Paradoxo Zero Geométrico',
    description: 'A forma impossível que não deveria existir',
    kingdom: 'geometra',
    act: 4,
    position: { x: 50, y: 234 },
    requiredLevel: 15,
    locked: true,
    completed: false,
    isBoss: true,
    bossPhases: 4,
    enemyId: 'paradoxo_zero_geometrico',
    rewards: { xp: 1500, gold: 1000, theorem: 'Grande Teorema de Restauração Geométrica' },
    activatesBeacon: true,
    beaconName: 'Rede Matemática Restaurada',
    challenge: {
      question: 'Se a área de um quadrado é 25, qual é seu perímetro?',
      answer: 20,
      hint: 'Área = lado², então lado = 5. Perímetro = 4 × lado',
      difficulty: 'hard'
    }
  }
];

// Dados completos do Reino da Geometria
export const geometryKingdom: KingdomData = {
  id: 'geometra',
  name: 'geometra',
  displayName: 'Reino da Geometria',
  description: 'Explore as formas perfeitas e restaure os axiomas euclidianos',
  loreIntro: [
    'A Biblioteca de Formas Perfeitas desmoronou durante o Paradoxo Zero.',
    'Círculos perderam sua redondeza, triângulos ganharam quatro lados,',
    'e o próprio conceito de "reto" tornou-se distorcido.',
    'Euclides, petrificado em sua própria biblioteca, aguarda um Geômetra',
    'capaz de provar os axiomas fundamentais e restaurar a simetria do mundo.'
  ],
  icon: '📐',
  color: 'blue',
  gradient: 'from-blue-500 via-cyan-500 to-blue-600',
  nodes: geometryNodes,
  npcs: ['euclides', 'arquimedes', 'thales', 'pitagoras_geom', 'descartes', 'hipatia_geom', 'ultimo_matematico'],
  enemies: [
    'linha_quebrada',
    'angulo_distorcido',
    'triangulo_escaleno',
    'hipotenusa_fugitiva',
    'fractal_parasita_boss',
    'sombra_desproporcional',
    'circulo_imperfeito',
    'espiral_infinita',
    'assintota_circular_boss',
    'ponto_fora_plano',
    'cubo_dimensional',
    'poliedro_corrompido',
    'paradoxo_geometrico_boss',
    'equacao_euclidiana',
    'fragmento_ultimo_matematico',
    'geometria_hiperbolica',
    'guardioes_laboratorio',
    'paradoxo_zero_geometrico'
  ],
  totalActs: 4,
  estimatedPlaytime: '20-25 horas',
  endings: [
    {
      id: 'rigid_order',
      name: 'Ordem Euclidiana Plena',
      description: 'Restaurar apenas geometria euclidiana clássica. O mundo volta a ter formas perfeitas e rígidas.',
      requirement: 'Escolher axiomas clássicos na decisão final'
    },
    {
      id: 'plural_geometries',
      name: 'Geometrias Plurais',
      description: 'Aceitar geometrias não-euclidianas controladas. O mundo tem zonas de curvatura permitida.',
      requirement: 'Escolher equilíbrio entre geometrias na decisão final'
    },
    {
      id: 'new_axiomatics',
      name: 'Nova Axiomática Geométrica',
      description: 'Propor um 6º postulado que une todas as geometrias. Mundo com geometria unificada inédita.',
      requirement: 'Escolher criar nova axiomática na decisão final'
    }
  ]
};
