import { NPC } from '@/types/npc';

// ============================================
// NPCs EXCLUSIVOS DO REINO DA GEOMETRIA
// ============================================

export const geometryNPCs: NPC[] = [
  {
    id: 'euclides',
    name: 'Euclides',
    title: 'O Pai da Geometria',
    avatar: '📐',
    school: 'geometra',
    dialogues: [
      {
        text: 'Saudações, jovem Geômetra! Eu sou Euclides de Alexandria. A Biblioteca de Formas Perfeitas está em ruínas...',
        emotion: 'neutral'
      },
      {
        text: 'Mas você chegou. Isso significa que a geometria ainda vive nas mentes dos reconstruintes!',
        emotion: 'happy'
      },
      {
        text: 'Deixe-me ensinar os axiomas fundamentais. De postulados simples, provamos todo o universo geométrico!',
        emotion: 'excited'
      },
      {
        text: 'Lembre-se: a demonstração é tudo. Uma prova bem construída é mais forte que qualquer magia.',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Fundamentos da Geometria Euclidiana',
      explanation: 'A geometria euclidiana se baseia em cinco postulados simples. A partir deles, podemos provar TODOS os teoremas da geometria! Um ponto não tem dimensão, uma reta tem comprimento mas não largura, e um plano se estende infinitamente. Estes conceitos primitivos são a base de tudo.',
      examples: [
        'Postulado 1: Por dois pontos passa uma única reta',
        'Postulado 2: Um segmento de reta pode ser estendido indefinidamente',
        'Postulado 3: É possível traçar um círculo com qualquer centro e raio',
        'Postulado 4: Todos os ângulos retos são iguais entre si',
        'Postulado 5 (Paralelas): Por um ponto fora de uma reta passa uma única paralela'
      ],
      practiceProblems: [
        {
          question: 'Quantos pontos são necessários para definir uma única reta?',
          answer: 2,
          hint: 'Pense no primeiro postulado de Euclides'
        },
        {
          question: 'Quantos graus tem um ângulo reto?',
          answer: 90,
          hint: 'Um quarto de volta completa (360° / 4)'
        }
      ]
    }
  },
  {
    id: 'arquimedes',
    name: 'Arquimedes',
    title: 'O Mestre dos Círculos',
    avatar: '⚙️',
    school: 'geometra',
    dialogues: [
      {
        text: 'Eureka! Arquimedes de Siracusa aqui. Dei-me conta de tantas verdades enquanto contemplava círculos!',
        emotion: 'excited'
      },
      {
        text: 'O círculo... que forma perfeita! Calculei que sua circunferência dividida pelo diâmetro sempre dá o mesmo número: π (pi)!',
        emotion: 'happy'
      },
      {
        text: 'Pi é aproximadamente 3.14159... mas seus dígitos nunca terminam! Um número infinito e transcendente!',
        emotion: 'thinking'
      },
      {
        text: 'E há mais! Espirais, esferas, cilindros... A geometria dos círculos permeia o universo!',
        emotion: 'excited'
      }
    ],
    lesson: {
      concept: 'Círculos e o Número Pi',
      explanation: 'O número π (pi) é a razão entre a circunferência de qualquer círculo e seu diâmetro. Sempre dá aproximadamente 3.14! A fórmula da circunferência é C = 2πr (ou πd), onde r é o raio e d é o diâmetro. A área é A = πr². Essas fórmulas descrevem TODOS os círculos do universo!',
      examples: [
        'π ≈ 3.14159265358979...',
        'Circunferência = 2 × π × raio = π × diâmetro',
        'Área do círculo = π × raio²',
        'Se raio = 1, circunferência ≈ 6.28 (2π)',
        'Se raio = 1, área ≈ 3.14 (π)'
      ],
      practiceProblems: [
        {
          question: 'Se um círculo tem raio 2, qual é aproximadamente sua circunferência? (Use π ≈ 3)',
          answer: 12,
          hint: 'Circunferência = 2 × π × raio = 2 × 3 × 2'
        },
        {
          question: 'Qual é a área de um círculo com raio 3? (Use π ≈ 3, calcule π × r²)',
          answer: 27,
          hint: 'Área = π × raio² = 3 × 3² = 3 × 9'
        }
      ]
    }
  },
  {
    id: 'thales',
    name: 'Thales de Mileto',
    title: 'O Primeiro Geômetra',
    avatar: '📏',
    school: 'geometra',
    dialogues: [
      {
        text: 'Bem-vindo, jovem reconstrutor. Sou Thales de Mileto, o primeiro a usar a geometria para medir o mundo.',
        emotion: 'neutral'
      },
      {
        text: 'Medi as pirâmides do Egito usando apenas sombras e proporções! Esta é a beleza da semelhança.',
        emotion: 'excited'
      },
      {
        text: 'Triângulos semelhantes mantêm suas proporções. Se você conhece as razões, pode descobrir qualquer medida!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Semelhança de Triângulos e Proporções',
      explanation: 'Dois triângulos são semelhantes quando têm os mesmos ângulos. Nesse caso, seus lados são proporcionais! Se um triângulo tem lados 2, 3, 4 e outro tem lados 4, 6, 8, eles são semelhantes (o segundo é o dobro do primeiro). O Teorema de Thales diz que retas paralelas cortadas por transversais formam segmentos proporcionais.',
      examples: [
        'Se triângulo ABC ~ triângulo DEF, então AB/DE = BC/EF = AC/DF',
        'Uma vara de 2m com sombra de 3m. Edifício com sombra de 15m. Altura = ?',
        'Proporção: 2/3 = h/15, então h = (2 × 15)/3 = 10m',
        'Thales usou isso para medir pirâmides!'
      ],
      practiceProblems: [
        {
          question: 'Se uma vara de 2m projeta sombra de 3m, e uma árvore projeta sombra de 9m, qual a altura da árvore?',
          answer: 6,
          hint: 'Use proporção: 2/3 = h/9, então h = (2 × 9)/3'
        },
        {
          question: 'Dois triângulos semelhantes. O primeiro tem lado 4. O segundo tem lado correspondente 12. Qual é a razão?',
          answer: 3,
          hint: 'Razão = 12/4'
        }
      ]
    }
  },
  {
    id: 'pitagoras_geom',
    name: 'Pitágoras (Geômetra)',
    title: 'Mestre dos Triângulos Retângulos',
    avatar: '△',
    school: 'geometra',
    dialogues: [
      {
        text: 'Salve, iniciado geométrico! Sou Pitágoras de Samos. No Reino da Geometria, ensino sobre triângulos.',
        emotion: 'neutral'
      },
      {
        text: 'O triângulo retângulo possui uma propriedade sagrada: a² + b² = c²!',
        emotion: 'excited'
      },
      {
        text: 'Os catetos ao quadrado somam o quadrado da hipotenusa. Esta verdade é eterna!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Teorema de Pitágoras',
      explanation: 'Em todo triângulo retângulo (com um ângulo de 90°), o quadrado da hipotenusa (lado maior) é igual à soma dos quadrados dos catetos (os dois lados menores). Fórmula: a² + b² = c², onde c é a hipotenusa. Exemplo: se os catetos medem 3 e 4, então c² = 9 + 16 = 25, logo c = 5.',
      examples: [
        'Triângulo 3-4-5: 3² + 4² = 9 + 16 = 25 = 5²',
        'Triângulo 5-12-13: 5² + 12² = 25 + 144 = 169 = 13²',
        'Triângulo 8-15-17: 8² + 15² = 64 + 225 = 289 = 17²',
        'Se a=6 e b=8, então c² = 36+64=100, logo c=10'
      ],
      practiceProblems: [
        {
          question: 'Se os catetos de um triângulo retângulo medem 3 e 4, quanto mede a hipotenusa?',
          answer: 5,
          hint: 'Use a² + b² = c². Então 3² + 4² = 9 + 16 = 25 = c², logo c = 5'
        },
        {
          question: 'Se um cateto mede 5 e a hipotenusa mede 13, quanto mede o outro cateto?',
          answer: 12,
          hint: '5² + b² = 13², então 25 + b² = 169, logo b² = 144, b = 12'
        }
      ]
    }
  },
  {
    id: 'descartes',
    name: 'René Descartes',
    title: 'O Cartesiano',
    avatar: '📊',
    school: 'geometra',
    dialogues: [
      {
        text: 'Penso, logo existo! E penso em coordenadas. Sou René Descartes.',
        emotion: 'neutral'
      },
      {
        text: 'Criei o plano cartesiano para unir álgebra e geometria. Cada ponto é um par (x, y)!',
        emotion: 'excited'
      },
      {
        text: 'Com coordenadas, podemos descrever retas, curvas, círculos... tudo algebricamente!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Plano Cartesiano e Geometria Analítica',
      explanation: 'O plano cartesiano tem dois eixos perpendiculares: x (horizontal) e y (vertical). Eles se cruzam na origem (0, 0) e dividem o plano em 4 quadrantes. Cada ponto é representado por um par ordenado (x, y). A distância entre dois pontos (x₁, y₁) e (x₂, y₂) é dada por d = √[(x₂-x₁)² + (y₂-y₁)²] - é Pitágoras aplicado!',
      examples: [
        'Origem: (0, 0)',
        'Ponto A: (3, 4) está 3 unidades à direita e 4 acima da origem',
        'Distância da origem até (3, 4): d = √(3² + 4²) = √25 = 5',
        'Os 4 quadrantes: I(+,+), II(-,+), III(-,-), IV(+,-)'
      ],
      practiceProblems: [
        {
          question: 'Quantos quadrantes existem no plano cartesiano?',
          answer: 4,
          hint: 'Os eixos x e y dividem o plano em quantas regiões?'
        },
        {
          question: 'Qual é a distância entre a origem (0,0) e o ponto (3,4)?',
          answer: 5,
          hint: 'Use a fórmula da distância: d = √(x² + y²) = √(9 + 16)'
        }
      ]
    }
  },
  {
    id: 'hipatia_geom',
    name: 'Hipátia (Geômetra)',
    title: 'A Sábia das Dimensões',
    avatar: '⭐',
    school: 'geometra',
    dialogues: [
      {
        text: 'Saudações, buscador geométrico. Sou Hipátia de Alexandria, estudiosa das dimensões.',
        emotion: 'neutral'
      },
      {
        text: 'Saímos do plano bidimensional e entramos no espaço tridimensional! Cubos, esferas, pirâmides...',
        emotion: 'excited'
      },
      {
        text: 'Sólidos possuem volume, não apenas área. A terceira dimensão expande infinitamente nossas possibilidades!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Geometria Espacial - Sólidos Geométricos',
      explanation: 'Na geometria tridimensional, estudamos sólidos. Cubos têm volume V = aresta³. Paralelepípedos: V = comprimento × largura × altura. Esferas: V = (4/3)πr³. Cilindros: V = πr²h. Pirâmides: V = (1/3) × área da base × altura. Cada sólido tem propriedades únicas de faces, arestas e vértices.',
      examples: [
        'Cubo com aresta 3: V = 3³ = 27',
        'Paralelepípedo 2×3×4: V = 24',
        'Os 5 sólidos platônicos: tetraedro, cubo, octaedro, dodecaedro, icosaedro',
        'Fórmula de Euler: V - A + F = 2 (vértices - arestas + faces)'
      ],
      practiceProblems: [
        {
          question: 'Qual é o volume de um cubo com aresta 4?',
          answer: 64,
          hint: 'V = aresta³ = 4³'
        },
        {
          question: 'Quantas faces tem um cubo?',
          answer: 6,
          hint: 'Conte: frente, trás, esquerda, direita, cima, baixo'
        }
      ]
    }
  },
  {
    id: 'ultimo_matematico',
    name: 'Eco do Último Matemático',
    title: 'A Origem do Paradoxo',
    avatar: '👤',
    school: 'geometra',
    dialogues: [
      {
        text: 'Você... chegou até aqui. Então você merece saber a verdade sobre o Paradoxo Zero.',
        emotion: 'neutral'
      },
      {
        text: 'Eu tentei unir geometria euclidiana, hiperbólica e esférica em uma única forma universal.',
        emotion: 'thinking'
      },
      {
        text: 'Mas ao tentar forçar axiomas incompatíveis, dividi por zero a própria realidade geométrica.',
        emotion: 'thinking'
      },
      {
        text: 'Não era possível unificá-las assim... ou era? Cabe a você decidir o futuro da geometria.',
        emotion: 'excited'
      }
    ],
    lesson: {
      concept: 'Geometrias Não-Euclidianas',
      explanation: 'Existem geometrias além da euclidiana! Na geometria esférica (superfície de esfera), a soma dos ângulos de um triângulo é MAIOR que 180°. Na geometria hiperbólica (sela de cavalo), é MENOR que 180°. O 5º postulado de Euclides (paralelas) não vale nessas geometrias. Cada uma descreve um tipo diferente de espaço!',
      examples: [
        'Euclidiana: Soma dos ângulos = 180° (plano)',
        'Esférica: Soma dos ângulos > 180° (esfera)',
        'Hiperbólica: Soma dos ângulos < 180° (sela)',
        'A geometria do universo real pode não ser euclidiana!'
      ],
      practiceProblems: [
        {
          question: 'Em uma superfície esférica, a soma dos ângulos de um triângulo é maior ou menor que 180°? (1=maior, 0=menor)',
          answer: 1,
          hint: 'Pense em um triângulo desenhado na superfície de uma bola'
        },
        {
          question: 'Quantos postulados Euclides propôs?',
          answer: 5,
          hint: 'São os axiomas fundamentais da geometria euclidiana'
        }
      ]
    }
  }
];

// Helper para buscar NPC por ID
export const getGeometryNPCById = (id: string): NPC | undefined => {
  return geometryNPCs.find(npc => npc.id === id);
};

// Helper para buscar todos os NPCs da geometria
export const getAllGeometryNPCs = (): NPC[] => {
  return geometryNPCs;
};
