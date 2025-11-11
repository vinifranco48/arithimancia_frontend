import { NPC } from '@/types/npc';

export const historicalMathematicians: NPC[] = [
  {
    id: 'euclides',
    name: 'Euclides',
    title: 'O Pai da Geometria',
    avatar: '📐',
    school: 'geometra',
    dialogues: [
      {
        text: 'Saudações, jovem estudioso! Eu sou Euclides de Alexandria. Por séculos, meus Elementos guiaram mentes brilhantes.',
        emotion: 'neutral'
      },
      {
        text: 'A geometria não é apenas formas - é a linguagem da própria realidade! Deixe-me mostrar como pontos, linhas e planos constroem mundos.',
        emotion: 'excited'
      },
      {
        text: 'Lembre-se: de axiomas simples nascem verdades complexas. Este é o poder da dedução!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Fundamentos da Geometria',
      explanation: 'A geometria euclidiana se baseia em cinco axiomas simples. A partir deles, podemos provar teoremas complexos! Um ponto não tem dimensão, uma linha tem comprimento mas não largura, e um plano se estende infinitamente.',
      examples: [
        'Dois pontos definem uma única reta',
        'A soma dos ângulos internos de um triângulo é sempre 180°',
        'O teorema de Pitágoras: a² + b² = c²'
      ],
      practiceProblems: [
        {
          question: 'Em um triângulo retângulo, se um cateto mede 3 e outro mede 4, quanto mede a hipotenusa?',
          answer: 5,
          hint: 'Use o teorema de Pitágoras: a² + b² = c²'
        },
        {
          question: 'Quantos graus tem cada ângulo interno de um triângulo equilátero?',
          answer: 60,
          hint: 'A soma dos ângulos de um triângulo é 180°, e eles são iguais!'
        }
      ]
    }
  },
  {
    id: 'al-khwarizmi',
    name: 'Al-Khwarizmi',
    title: 'O Pai da Álgebra',
    avatar: '🧮',
    school: 'algebrista',
    dialogues: [
      {
        text: 'Salaam! Sou Muhammad ibn Musa al-Khwarizmi. Da palavra "al-jabr" em meu tratado nasceu a álgebra!',
        emotion: 'happy'
      },
      {
        text: 'A álgebra é a arte de resolver o desconhecido. Com equações, transformamos mistérios em verdades claras.',
        emotion: 'excited'
      },
      {
        text: 'Veja: se x + 5 = 12, podemos subtrair 5 de ambos os lados. O equilíbrio é tudo!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Equações e Variáveis',
      explanation: 'A álgebra usa símbolos (como x, y, z) para representar números desconhecidos. Uma equação é como uma balança - o que fazemos de um lado, fazemos do outro para manter o equilíbrio!',
      examples: [
        'x + 3 = 7 → x = 4',
        '2x = 10 → x = 5',
        'x - 5 = 15 → x = 20'
      ],
      practiceProblems: [
        {
          question: 'Resolva: x + 8 = 15. Quanto vale x?',
          answer: 7,
          hint: 'Subtraia 8 de ambos os lados da equação'
        },
        {
          question: 'Resolva: 3x = 21. Quanto vale x?',
          answer: 7,
          hint: 'Divida ambos os lados por 3'
        }
      ]
    }
  },
  {
    id: 'pitagoras',
    name: 'Pitágoras',
    title: 'Mestre dos Números Sagrados',
    avatar: '🔢',
    school: 'numerologo',
    dialogues: [
      {
        text: 'Bem-vindo, iniciado. Eu sou Pitágoras de Samos. Tudo é número - esta é a verdade fundamental do universo!',
        emotion: 'neutral'
      },
      {
        text: 'Os números não são apenas ferramentas de contagem - eles possuem propriedades místicas e padrões divinos!',
        emotion: 'excited'
      },
      {
        text: 'Veja os números primos: 2, 3, 5, 7, 11... Indivisíveis, puros, fundamentais. São os átomos da aritmética!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Propriedades dos Números',
      explanation: 'Números têm personalidades únicas! Números primos só são divisíveis por 1 e por si mesmos. Números perfeitos têm divisores que somam o próprio número. Números triangulares formam triângulos!',
      examples: [
        'Primos: 2, 3, 5, 7, 11, 13...',
        'Perfeitos: 6 (1+2+3=6), 28 (1+2+4+7+14=28)',
        'Triangulares: 1, 3, 6, 10, 15...'
      ],
      practiceProblems: [
        {
          question: 'Qual é o próximo número primo após 7?',
          answer: 11,
          hint: 'Teste números maiores que 7: eles são divisíveis apenas por 1 e por si mesmos?'
        },
        {
          question: 'Some os divisores próprios de 6 (números menores que 6 que dividem 6). Resultado?',
          answer: 6,
          hint: 'Os divisores de 6 menores que 6 são: 1, 2, 3'
        }
      ]
    }
  },
  {
    id: 'hipatia',
    name: 'Hipátia',
    title: 'A Sábia de Alexandria',
    avatar: '⭐',
    school: 'trigonometra',
    dialogues: [
      {
        text: 'Saudações, buscador de conhecimento. Sou Hipátia de Alexandria, estudiosa das esferas celestes e dos ciclos do cosmos.',
        emotion: 'neutral'
      },
      {
        text: 'A trigonometria revela os segredos dos círculos e movimentos celestiais. Seno, cosseno - estas funções descrevem ondas, órbitas, harmonia!',
        emotion: 'excited'
      },
      {
        text: 'Observe: um círculo tem 360 graus. Meio círculo? 180 graus. Um quarto? 90 graus. Estes ângulos são fundamentais!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Ângulos e Círculos',
      explanation: 'A trigonometria estuda relações entre ângulos e distâncias. Um círculo completo tem 360°. Ângulos retos têm 90°. Estas medidas nos ajudam a entender rotações, ondas e padrões cíclicos!',
      examples: [
        'Círculo completo = 360°',
        'Meia volta = 180°',
        'Ângulo reto = 90°',
        'Ângulos complementares somam 90°'
      ],
      practiceProblems: [
        {
          question: 'Se um ângulo mede 45°, quanto mede seu complemento (ângulos que somam 90°)?',
          answer: 45,
          hint: '90° - 45° = ?'
        },
        {
          question: 'Quantos graus tem metade de um ângulo reto?',
          answer: 45,
          hint: 'Um ângulo reto tem 90°, então metade é...'
        }
      ]
    }
  },
  {
    id: 'fibonacci',
    name: 'Leonardo Fibonacci',
    title: 'O Descobridor da Sequência Dourada',
    avatar: '🌻',
    school: 'numerologo',
    dialogues: [
      {
        text: 'Buongiorno! Leonardo Fibonacci, de Pisa. Descobri uma sequência mágica que aparece em toda a natureza!',
        emotion: 'happy'
      },
      {
        text: '1, 1, 2, 3, 5, 8, 13, 21... Cada número é a soma dos dois anteriores! Esta sequência está em conchas, flores, galáxias!',
        emotion: 'excited'
      },
      {
        text: 'E há mais! A razão entre números consecutivos se aproxima de 1.618... a proporção áurea, φ (phi)!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'A Sequência de Fibonacci',
      explanation: 'A sequência de Fibonacci começa com 1, 1. Cada número seguinte é a soma dos dois anteriores: 1+1=2, 1+2=3, 2+3=5, 3+5=8... Esta sequência aparece em pétalas de flores, espirais de conchas e até em padrões de mercado!',
      examples: [
        'Sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...',
        'Girassóis têm 55 e 89 espirais (números de Fibonacci!)',
        'A proporção áurea: 8/5 = 1.6, 13/8 = 1.625, 21/13 ≈ 1.615...'
      ],
      practiceProblems: [
        {
          question: 'Na sequência 1, 1, 2, 3, 5, 8, 13, qual é o próximo número?',
          answer: 21,
          hint: 'Some os dois últimos números: 8 + 13 = ?'
        },
        {
          question: 'Se a sequência é 1, 1, 2, 3, 5, 8... qual número vem depois de 5?',
          answer: 8,
          hint: 'Some os dois números anteriores: 3 + 5 = ?'
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
        text: 'Eureka! Arquimedes de Siracusa aqui. Dei-me conta de tantas verdades enquanto pensava em banheiras e círculos!',
        emotion: 'excited'
      },
      {
        text: 'O círculo... que forma perfeita! Calculei que sua circunferência dividida pelo diâmetro sempre dá o mesmo número: π (pi)!',
        emotion: 'happy'
      },
      {
        text: 'Pi é aproximadamente 3.14159... mas seus dígitos nunca terminam! Um número infinito e transcendente!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Círculos e Pi',
      explanation: 'O número π (pi) é a razão entre a circunferência de qualquer círculo e seu diâmetro. Sempre dá aproximadamente 3.14! A fórmula da circunferência é C = 2πr, onde r é o raio. A área é A = πr².',
      examples: [
        'π ≈ 3.14159...',
        'Circunferência = 2 × π × raio',
        'Área do círculo = π × raio²',
        'Se raio = 2, circunferência ≈ 12.56'
      ],
      practiceProblems: [
        {
          question: 'Se um círculo tem raio 1, qual é sua circunferência? (Use π ≈ 3, arredonde para inteiro)',
          answer: 6,
          hint: 'Circunferência = 2 × π × raio = 2 × 3 × 1 = ?'
        },
        {
          question: 'Qual é a área de um círculo com raio 2? (Use π ≈ 3, calcule π × 2²)',
          answer: 12,
          hint: 'Área = π × raio² = 3 × 2² = 3 × 4 = ?'
        }
      ]
    }
  }
];

export const getNPCBySchool = (school: string): NPC[] => {
  return historicalMathematicians.filter(npc => npc.school === school);
};

export const getNPCById = (id: string): NPC | undefined => {
  return historicalMathematicians.find(npc => npc.id === id);
};
