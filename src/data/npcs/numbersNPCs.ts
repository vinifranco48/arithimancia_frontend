import { NPC } from '@/types/npc';

export const numbersNPCs: NPC[] = [
  {
    id: 'pitagoras_numbers',
    name: 'Pitágoras',
    title: 'O Místico dos Números',
    description: 'Filósofo e matemático que vê divindade nos números',
    avatar: '🔺',
    school: 'numerologo',
    dialogues: [
      {
        text: 'Tudo é número. O cosmos inteiro pode ser expresso através de relações numéricas harmônicas.',
        emotion: 'mystical'
      },
      {
        text: 'Números perfeitos refletem a perfeição divina. 6 = 1 + 2 + 3. Todos os seus divisores somados.',
        emotion: 'reverent'
      },
      {
        text: 'Os números primos são os átomos da matemática. Indivisíveis, fundamentais, eternos.',
        emotion: 'wise'
      },
      {
        text: 'O Paradoxo Zero corrompeu a harmonia numérica. Você deve restaurá-la, Reconstrutor.',
        emotion: 'urgent'
      }
    ],
    lesson: {
      concept: 'Números Primos e Números Perfeitos',
      explanation: 'Números primos só são divisíveis por 1 e por eles mesmos (2, 3, 5, 7, 11...). Números perfeitos são iguais à soma de seus divisores próprios. Exemplo: 6 = 1 + 2 + 3.',
      examples: [
        'Primos: 2, 3, 5, 7, 11, 13, 17, 19...',
        'Perfeitos: 6 (1+2+3), 28 (1+2+4+7+14)',
        '2 é o único primo par',
        'Existem infinitos primos (Teorema de Euclides)'
      ],
      practiceProblems: [
        {
          question: 'Qual é o primeiro número primo?',
          answer: 2,
          hint: 'O único primo que é par'
        },
        {
          question: 'Qual é o segundo número perfeito? (Dica: é maior que 6)',
          answer: 28,
          hint: '1 + 2 + 4 + 7 + 14 = ?'
        }
      ]
    }
  },
  {
    id: 'euclides_numbers',
    name: 'Euclides',
    title: 'O Sistematizador',
    description: 'Criador do algoritmo mais antigo ainda em uso',
    avatar: '📐',
    school: 'numerologo',
    dialogues: [
      {
        text: 'Meu algoritmo para encontrar o máximo divisor comum é elegante e eterno.',
        emotion: 'proud'
      },
      {
        text: 'Provei que existem infinitos números primos. A demonstração é por contradição.',
        emotion: 'teaching'
      },
      {
        text: 'Suponha que existam apenas finitos primos. Multiplique-os e some 1. Contradição.',
        emotion: 'logical'
      },
      {
        text: 'A teoria dos números é a rainha da matemática. E os primos são suas joias.',
        emotion: 'reverent'
      }
    ],
    lesson: {
      concept: 'Algoritmo de Euclides e MDC',
      explanation: 'O algoritmo de Euclides encontra o Máximo Divisor Comum (MDC) de dois números através de divisões sucessivas. MDC(a, b) = MDC(b, resto). Repita até resto = 0.',
      examples: [
        'MDC(48, 18): 48 = 18×2 + 12, 18 = 12×1 + 6, 12 = 6×2 + 0. MDC = 6',
        'MDC(100, 35): 100 = 35×2 + 30, 35 = 30×1 + 5, 30 = 5×6 + 0. MDC = 5',
        'Se MDC(a,b) = 1, dizemos que a e b são coprimos',
        'Prova de infinitude dos primos: P₁×P₂×...×Pₙ + 1 é primo ou tem fator primo novo'
      ],
      practiceProblems: [
        {
          question: 'Qual é o MDC de 12 e 8?',
          answer: 4,
          hint: '12 = 8×1 + 4, 8 = 4×2 + 0'
        },
        {
          question: 'Quantos números primos existem?',
          answer: 0,
          hint: 'Infinitos! Mas digite 0 para indicar infinito'
        }
      ]
    }
  },
  {
    id: 'fibonacci',
    name: 'Leonardo Fibonacci',
    title: 'Mestre das Sequências',
    description: 'Descobridor da sequência dourada',
    avatar: '🌻',
    school: 'numerologo',
    dialogues: [
      {
        text: 'Estudei a reprodução de coelhos e encontrei uma sequência mágica: 1, 1, 2, 3, 5, 8, 13...',
        emotion: 'excited'
      },
      {
        text: 'Cada termo é a soma dos dois anteriores. Uma recursão infinita de beleza.',
        emotion: 'contemplative'
      },
      {
        text: 'A razão entre termos consecutivos converge para φ = 1.618..., o número de ouro.',
        emotion: 'awestruck'
      },
      {
        text: 'Esta sequência aparece em caracóis, flores, galáxias... o universo é Fibonacci.',
        emotion: 'mystical'
      }
    ],
    lesson: {
      concept: 'Sequência de Fibonacci e Razão Áurea',
      explanation: 'Sequência: F(n) = F(n-1) + F(n-2), com F(1)=1, F(2)=1. Resultado: 1, 1, 2, 3, 5, 8, 13, 21... A razão F(n+1)/F(n) converge para φ ≈ 1.618, a razão áurea.',
      examples: [
        'F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8, F(7)=13',
        '13/8 = 1.625, 21/13 ≈ 1.615... → φ = 1.618...',
        'φ = (1 + √5)/2 (número irracional)',
        'Aparece na natureza: pétalas, espirais, galáxias'
      ],
      practiceProblems: [
        {
          question: 'Qual é o 7º número de Fibonacci? (1,1,2,3,5,8,?)',
          answer: 13,
          hint: 'Soma dos dois anteriores: 5 + 8'
        },
        {
          question: 'Arredonde φ (phi) para o inteiro mais próximo',
          answer: 2,
          hint: 'φ ≈ 1.618, qual inteiro está mais próximo?'
        }
      ]
    }
  },
  {
    id: 'gauss',
    name: 'Carl Friedrich Gauss',
    title: 'O Príncipe da Matemática',
    description: 'Gênio que dominou todos os campos da matemática',
    avatar: '👑',
    school: 'numerologo',
    dialogues: [
      {
        text: 'Aos 10 anos, somei os números de 1 a 100 em segundos. Meu professor ficou atônito.',
        emotion: 'proud'
      },
      {
        text: 'A soma é (primeiro + último) × quantidade / 2. Elegante, não?',
        emotion: 'pleased'
      },
      {
        text: 'A teoria dos números é minha paixão. Congruências, resíduos quadráticos, formas...',
        emotion: 'passionate'
      },
      {
        text: 'O Paradoxo Zero perturbou até minhas equações mais fundamentais.',
        emotion: 'troubled'
      }
    ],
    lesson: {
      concept: 'Soma de Gauss e Progressões Aritméticas',
      explanation: 'Para somar 1+2+3+...+n, use: S = n(n+1)/2. Para PA (Progressão Aritmética) com primeiro termo a₁, último aₙ, e n termos: S = n(a₁+aₙ)/2.',
      examples: [
        '1+2+3+...+100 = 100×101/2 = 5050',
        '2+4+6+...+20 (10 termos): S = 10×(2+20)/2 = 110',
        'PA: termo geral aₙ = a₁ + (n-1)×r (r = razão)',
        'Exemplo: 3, 7, 11, 15... → r=4, a₁=3'
      ],
      practiceProblems: [
        {
          question: 'Qual é a soma de 1 até 10?',
          answer: 55,
          hint: 'Use S = n(n+1)/2 com n=10'
        },
        {
          question: 'Em uma PA, se a₁=5 e r=3, qual é a₃?',
          answer: 11,
          hint: 'a₃ = 5 + (3-1)×3 = 5 + 6'
        }
      ]
    }
  },
  {
    id: 'ramanujan',
    name: 'Srinivasa Ramanujan',
    title: 'O Visionário Místico',
    description: 'Gênio autodidata que via fórmulas em sonhos',
    avatar: '🕉️',
    school: 'numerologo',
    dialogues: [
      {
        text: 'A deusa Namagiri me revela equações em sonhos. Não consigo provar todas, apenas sei que são verdadeiras.',
        emotion: 'mystical'
      },
      {
        text: '1729 não é um número entediante. É a menor soma de dois cubos de duas maneiras diferentes.',
        emotion: 'excited'
      },
      {
        text: 'e^(π√163) é quase um inteiro. Quase. Esta aproximação é magnífica.',
        emotion: 'awestruck'
      },
      {
        text: 'Números transcendentais como π e e escondem padrões que ainda não compreendemos totalmente.',
        emotion: 'contemplative'
      }
    ],
    lesson: {
      concept: 'Números Transcendentais e Mistérios Numéricos',
      explanation: 'Números transcendentais não são raízes de polinômios com coeficientes inteiros. π e e são transcendentais. Ramanujan descobriu aproximações e identidades surpreendentes envolvendo-os.',
      examples: [
        'π = 3.14159... (transcendental, não-algébrico)',
        'e = 2.71828... (base do logaritmo natural)',
        '1729 = 1³+12³ = 9³+10³ (número táxi de Ramanujan)',
        'e^(π√163) ≈ 262537412640768743.99999999999925... (quase inteiro!)'
      ],
      practiceProblems: [
        {
          question: 'Arredonde π para o inteiro mais próximo',
          answer: 3,
          hint: 'π ≈ 3.14159...'
        },
        {
          question: 'Arredonde e (base do ln) para o inteiro mais próximo',
          answer: 3,
          hint: 'e ≈ 2.71828..., qual inteiro está mais próximo?'
        }
      ]
    }
  },
  {
    id: 'erdos',
    name: 'Paul Erdős',
    title: 'O Viajante Matemático',
    description: 'Matemático que publicou com centenas de colaboradores',
    avatar: '🚂',
    school: 'numerologo',
    dialogues: [
      {
        text: 'Minha propriedade é um conjunto vazio. Minha riqueza são meus colaboradores.',
        emotion: 'cheerful'
      },
      {
        text: 'Publiquei mais de 1500 artigos com 511 coautores. O "número de Erdős" mede distância colaborativa.',
        emotion: 'proud'
      },
      {
        text: 'Um teorema não é provado até que uma criança possa entendê-lo. PROVE do LIVRO.',
        emotion: 'wise'
      },
      {
        text: 'Conjecturas são mais valiosas que teoremas. Elas inspiram gerações.',
        emotion: 'thoughtful'
      }
    ],
    lesson: {
      concept: 'Teoria dos Grafos e Número de Erdős',
      explanation: 'O número de Erdős mede distância colaborativa: Erdős = 0, coautores diretos = 1, coautores de coautores = 2, etc. É um conceito de teoria dos grafos aplicado à matemática social.',
      examples: [
        'Erdős tem número de Erdős = 0 (por definição)',
        'Colaborador direto tem número 1',
        'Colaborador de colaborador tem número 2',
        'Einstein tem número de Erdős 2',
        'Maioria dos matemáticos ativos tem número ≤ 5'
      ],
      practiceProblems: [
        {
          question: 'Se você colaborou diretamente com Erdős, qual é seu número de Erdős?',
          answer: 1,
          hint: 'Colaboração direta = distância 1'
        },
        {
          question: 'Qual é o número de Erdős do próprio Erdős?',
          answer: 0,
          hint: 'Por definição, Erdős tem distância zero de si mesmo'
        }
      ]
    }
  }
];
