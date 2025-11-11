import { NPC } from '@/types/npc';

// ============================================
// NPCs EXCLUSIVOS DO REINO DA ÁLGEBRA
// ============================================

export const algebraNPCs: NPC[] = [
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
      concept: 'Fundamentos da Álgebra',
      explanation: 'A álgebra usa símbolos (como x, y, z) para representar números desconhecidos. Uma equação é como uma balança - o que fazemos de um lado, fazemos do outro para manter o equilíbrio! A palavra "álgebra" vem do árabe "al-jabr" que significa "reunião de partes quebradas".',
      examples: [
        'x + 3 = 7 → x = 4 (subtraímos 3 de ambos os lados)',
        '2x = 10 → x = 5 (dividimos ambos os lados por 2)',
        'x - 5 = 15 → x = 20 (somamos 5 a ambos os lados)',
        '3x + 2 = 14 → 3x = 12 → x = 4'
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
    id: 'emmy_noether',
    name: 'Emmy Noether',
    title: 'Mestra da Álgebra Abstrata',
    avatar: '💍',
    school: 'algebrista',
    dialogues: [
      {
        text: 'Bem-vindo! Sou Emmy Noether. Muitos me chamam de a matemática mais importante do século XX.',
        emotion: 'neutral'
      },
      {
        text: 'A álgebra abstrata revela estruturas ocultas. Grupos, anéis, corpos - são as fundações da matemática moderna!',
        emotion: 'excited'
      },
      {
        text: 'Lembre-se: simetria é a chave. Onde há simetria, há conservação.',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Propriedades Algébricas',
      explanation: 'As propriedades algébricas governam como podemos manipular números e variáveis. Propriedade Comutativa: a+b = b+a. Associativa: (a+b)+c = a+(b+c). Distributiva: a(b+c) = ab+ac. Estas regras são fundamentais!',
      examples: [
        'Comutativa: 3 + 5 = 5 + 3',
        'Associativa: (2 + 3) + 4 = 2 + (3 + 4)',
        'Distributiva: 2(x + 3) = 2x + 6',
        'Elemento neutro: x + 0 = x, x × 1 = x'
      ],
      practiceProblems: [
        {
          question: 'Simplifique: 2(x + 4). Resultado: 2x + ?',
          answer: 8,
          hint: 'Use a propriedade distributiva: 2 × x + 2 × 4'
        },
        {
          question: 'Se 3x + 6 = 3(x + ?), qual o valor de ??',
          answer: 2,
          hint: 'Fatore: 3x + 6 = 3(x + 2)'
        }
      ]
    }
  },
  {
    id: 'galois',
    name: 'Évariste Galois',
    title: 'O Jovem Revolucionário',
    avatar: '⚔️',
    school: 'algebrista',
    dialogues: [
      {
        text: 'Évariste Galois. Morri jovem, mas minha teoria sobrevive eternamente.',
        emotion: 'neutral'
      },
      {
        text: 'Equações polinomiais escondem simetrias profundas. A teoria de grupos revela quando são resolúveis!',
        emotion: 'excited'
      },
      {
        text: 'Nem todas as equações podem ser resolvidas por radicais. Esta é uma verdade matemática fundamental.',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Equações Quadráticas',
      explanation: 'Equações quadráticas têm a forma ax² + bx + c = 0. Podemos resolvê-las por fatoração, completando o quadrado, ou usando a fórmula de Bhaskara: x = (-b ± √(b²-4ac))/(2a). O discriminante Δ = b²-4ac determina quantas soluções existem.',
      examples: [
        'x² + 5x + 6 = 0 → (x+2)(x+3) = 0 → x = -2 ou x = -3',
        'x² - 4 = 0 → x² = 4 → x = ±2',
        'x² + 4x + 4 = 0 → (x+2)² = 0 → x = -2',
        'Se Δ > 0: duas raízes. Δ = 0: uma raiz. Δ < 0: sem raízes reais'
      ],
      practiceProblems: [
        {
          question: 'Resolva: x² = 9. Qual a solução positiva?',
          answer: 3,
          hint: 'Tire a raiz quadrada de ambos os lados'
        },
        {
          question: 'Fatore: x² + 7x + 12 = (x+3)(x+?)',
          answer: 4,
          hint: 'Que número multiplicado por 3 dá 12 e somado com 3 dá 7?'
        }
      ]
    }
  },
  {
    id: 'viete',
    name: 'François Viète',
    title: 'O Pai da Notação Algébrica',
    avatar: '📝',
    school: 'algebrista',
    dialogues: [
      {
        text: 'Saudações! François Viète, de França. Introduzi o uso sistemático de letras na álgebra.',
        emotion: 'neutral'
      },
      {
        text: 'Antes de mim, equações eram escritas em palavras! Eu trouxe a notação simbólica: x, y, a, b...',
        emotion: 'excited'
      },
      {
        text: 'Com símbolos, podemos ver padrões que antes eram invisíveis. A álgebra se tornou universal!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Sistemas de Equações',
      explanation: 'Um sistema de equações possui múltiplas equações com múltiplas variáveis. Para resolver, podemos usar substituição ou eliminação. O objetivo é encontrar valores que satisfaçam TODAS as equações simultaneamente.',
      examples: [
        'x + y = 10 e x - y = 2 → Somando: 2x = 12 → x = 6, y = 4',
        '2x + y = 7 e x + y = 5 → Subtraindo: x = 2, substituindo: y = 3',
        'Método da substituição: isole uma variável e substitua na outra',
        'Método da eliminação: some/subtraia equações para eliminar uma variável'
      ],
      practiceProblems: [
        {
          question: 'x + y = 10 e x = 6. Quanto vale y?',
          answer: 4,
          hint: 'Substitua x = 6 na primeira equação'
        },
        {
          question: 'Se x + y = 8 e x - y = 2, some as equações. Quanto é 2x?',
          answer: 10,
          hint: '(x+y) + (x-y) = 8 + 2'
        }
      ]
    }
  },
  {
    id: 'brahmagupta_algebra',
    name: 'Brahmagupta',
    title: 'Mestre dos Números Negativos',
    avatar: '➖',
    school: 'algebrista',
    dialogues: [
      {
        text: 'Namaste! Sou Brahmagupta, da Índia antiga. Formalizei as regras para números negativos.',
        emotion: 'neutral'
      },
      {
        text: 'Dívidas (negativos) e fortunas (positivos) seguem leis precisas. Negativo com negativo dá positivo!',
        emotion: 'excited'
      },
      {
        text: 'Também descobri o zero como número. Antes, era apenas ausência. Agora é fundamental!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Números Negativos e Zero',
      explanation: 'Números negativos representam valores abaixo de zero (dívidas, temperaturas negativas). Regras: (+)×(+)=(+), (+)×(-)=(-), (-)×(-)=(+). Ao somar, pense em "mover na reta numérica". Zero é o elemento neutro: x+0=x, mas x×0=0!',
      examples: [
        '3 + (-5) = -2 (mover 5 para esquerda)',
        '(-4) × (-2) = 8 (negativo com negativo = positivo)',
        '(-3) × 4 = -12 (negativo com positivo = negativo)',
        '5 - (-3) = 5 + 3 = 8 (subtrair negativo = somar positivo)'
      ],
      practiceProblems: [
        {
          question: 'Calcule: (-3) × (-4) = ?',
          answer: 12,
          hint: 'Negativo vezes negativo dá positivo'
        },
        {
          question: 'Calcule: 5 - (-2) = ?',
          answer: 7,
          hint: 'Subtrair um negativo é somar um positivo'
        }
      ]
    }
  },
  {
    id: 'descartes_algebra',
    name: 'René Descartes (Algebrista)',
    title: 'O Unificador',
    avatar: '📈',
    school: 'algebrista',
    dialogues: [
      {
        text: 'Cogito, ergo sum. Penso, logo existo. E penso algebricamente!',
        emotion: 'neutral'
      },
      {
        text: 'Uni álgebra e geometria com o plano cartesiano. Equações descrevem curvas!',
        emotion: 'excited'
      },
      {
        text: 'Uma parábola é y = x². Uma reta é y = mx + b. A álgebra desenha o mundo!',
        emotion: 'thinking'
      }
    ],
    lesson: {
      concept: 'Funções e Gráficos',
      explanation: 'Uma função f(x) associa cada valor de x a um único valor de y. Funções lineares (y=mx+b) são retas. Funções quadráticas (y=ax²+bx+c) são parábolas. O gráfico visualiza a relação entre variáveis.',
      examples: [
        'y = 2x + 1 é uma reta com inclinação 2',
        'y = x² é uma parábola com vértice em (0,0)',
        'y = -x² + 4 é uma parábola invertida',
        'f(3) = 2(3) + 1 = 7 (avaliar função em x=3)'
      ],
      practiceProblems: [
        {
          question: 'Se f(x) = 2x + 3, quanto é f(5)?',
          answer: 13,
          hint: 'Substitua x por 5: 2(5) + 3'
        },
        {
          question: 'Se y = x² e x = 4, quanto vale y?',
          answer: 16,
          hint: 'y = 4² = 16'
        }
      ]
    }
  }
];

export const getAlgebraNPCById = (id: string): NPC | undefined => {
  return algebraNPCs.find(npc => npc.id === id);
};

export const getAllAlgebraNPCs = (): NPC[] => {
  return algebraNPCs;
};
