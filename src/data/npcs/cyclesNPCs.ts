import { NPC } from '@/types/npc';

export const cyclesNPCs: NPC[] = [
  {
    id: 'hipatia_cycles',
    name: 'Hipátia',
    title: 'A Sábia do Observatório',
    description: 'Matemática e astrônoma, aguarda no Observatório Celeste desde o Paradoxo Zero',
    avatar: '🔭',
    school: 'trigonometra',
    dialogues: [
      {
        text: 'O Relógio Cósmico parou no exato momento do Paradoxo Zero. Desde então, as ondas matemáticas oscilam sem controle.',
        emotion: 'thoughtful'
      },
      {
        text: 'Ângulos e ciclos são a linguagem do cosmos. Domine-os e você sincronizará o tempo novamente.',
        emotion: 'wise'
      },
      {
        text: 'Você possui o dom de ver os padrões ocultos. Restaure os ciclos e liberte-nos desta estase temporal.',
        emotion: 'hopeful'
      },
      {
        text: 'Lembre-se: um círculo completo é 360 graus, mas também 2π radianos. A dualidade é fundamental.',
        emotion: 'teaching'
      }
    ],
    lesson: {
      concept: 'Fundamentos dos Ângulos e Círculo Unitário',
      explanation: 'Ângulos medem rotações. Um círculo completo tem 360° (graus) ou 2π radianos. O círculo unitário é um círculo de raio 1 centrado na origem, fundamental para trigonometria.',
      examples: [
        'Círculo completo: 360° = 2π rad',
        'Ângulo reto: 90° = π/2 rad',
        'Ângulo raso: 180° = π rad',
        'Conversão: radianos = graus × (π/180)'
      ],
      practiceProblems: [
        {
          question: 'Quantos graus tem um círculo completo?',
          answer: 360,
          hint: 'Uma volta completa ao redor do centro'
        },
        {
          question: 'Quantos graus tem um ângulo reto?',
          answer: 90,
          hint: 'Um quarto de volta'
        }
      ]
    }
  },
  {
    id: 'ptolomeu',
    name: 'Ptolomeu',
    title: 'Astrônomo de Alexandria',
    description: 'Criador da trigonometria das cordas, predecessor dos senos',
    avatar: '🌟',
    school: 'trigonometra',
    dialogues: [
      {
        text: 'Nos tempos antigos, não usávamos senos. Usávamos cordas - segmentos que conectam pontos no círculo.',
        emotion: 'nostalgic'
      },
      {
        text: 'Uma corda é o dobro do seno do arco correspondente. Esta foi minha contribuição para a matemática celeste.',
        emotion: 'proud'
      },
      {
        text: 'O cosmos é governado por círculos perfeitos. Ou pelo menos era, antes do Paradoxo Zero.',
        emotion: 'sad'
      },
      {
        text: 'Mapeei as estrelas usando cordas e círculos. Você pode fazer o mesmo para restaurar o tempo.',
        emotion: 'encouraging'
      }
    ],
    lesson: {
      concept: 'Cordas e a Origem da Trigonometria',
      explanation: 'Antes dos senos, astrônomos usavam "cordas" - segmentos que conectam dois pontos em um círculo. A corda de um arco de ângulo θ tem comprimento 2×sen(θ/2). Ptolomeu criou tabelas extensas destas cordas.',
      examples: [
        'Corda de 60° = comprimento √3 ≈ 1.732',
        'Corda de 90° = comprimento √2 ≈ 1.414',
        'Relação: corda(θ) = 2×sen(θ/2)'
      ],
      practiceProblems: [
        {
          question: 'Em um círculo de raio 1, qual o comprimento aproximado da corda de 90°?',
          answer: 1,
          hint: 'Use a fórmula corda = 2×sen(θ/2), onde θ = 90°'
        }
      ]
    }
  },
  {
    id: 'brahmagupta_cycles',
    name: 'Brahmagupta',
    title: 'Mestre dos Senos Indianos',
    description: 'Matemático indiano que desenvolveu as funções trigonométricas modernas',
    avatar: '🕉️',
    school: 'trigonometra',
    dialogues: [
      {
        text: 'Na Índia, transformamos as cordas de Ptolomeu em algo mais elegante: o jya, o "arco-seno".',
        emotion: 'proud'
      },
      {
        text: 'O seno mede a altura, o cosseno a largura. Juntos, eles mapeiam qualquer ponto no círculo unitário.',
        emotion: 'teaching'
      },
      {
        text: 'A identidade fundamental: sen² + cos² = 1. Memorize-a, pois ela é a base de tudo.',
        emotion: 'serious'
      },
      {
        text: 'As ondas do mar, o movimento dos planetas, o som de um sitar... tudo é seno e cosseno.',
        emotion: 'mystical'
      }
    ],
    lesson: {
      concept: 'Funções Seno e Cosseno',
      explanation: 'No círculo unitário, dado um ângulo θ: sen(θ) é a coordenada y do ponto, cos(θ) é a coordenada x. A identidade fundamental sen²(θ) + cos²(θ) = 1 sempre é verdadeira.',
      examples: [
        'sen(0°) = 0, cos(0°) = 1',
        'sen(90°) = 1, cos(90°) = 0',
        'sen(180°) = 0, cos(180°) = -1',
        'sen²(θ) + cos²(θ) = 1 (sempre!)'
      ],
      practiceProblems: [
        {
          question: 'Qual é o valor de sen(90°)?',
          answer: 1,
          hint: 'No topo do círculo unitário, a altura é máxima'
        },
        {
          question: 'Se sen(θ) = 0.6, quanto é cos²(θ)? (Use sen² + cos² = 1)',
          answer: 64,
          hint: 'cos² = 1 - sen² = 1 - 0.36 = 0.64'
        }
      ]
    }
  },
  {
    id: 'euler',
    name: 'Leonhard Euler',
    title: 'O Mestre das Identidades',
    description: 'Criador da identidade mais bela da matemática',
    avatar: '∞',
    school: 'trigonometra',
    dialogues: [
      {
        text: 'e^(iπ) + 1 = 0. Cinco constantes fundamentais, uma equação. É a mais bela verdade matemática.',
        emotion: 'awestruck'
      },
      {
        text: 'Os senos e cossenos são apenas exponenciais complexas disfarçadas. Euler revelou isto.',
        emotion: 'proud'
      },
      {
        text: 'Trigonometria não é sobre triângulos. É sobre rotações, círculos e a própria natureza do cosmos.',
        emotion: 'wise'
      },
      {
        text: 'Antes do Paradoxo Zero, eu via padrões em tudo. Agora, apenas fragmentos permanecem.',
        emotion: 'melancholic'
      }
    ],
    lesson: {
      concept: 'Identidade de Euler e Exponenciais Complexas',
      explanation: 'A fórmula de Euler: e^(iθ) = cos(θ) + i×sen(θ). Quando θ = π, obtemos e^(iπ) + 1 = 0, conectando e, i, π, 1 e 0 - as cinco constantes mais importantes.',
      examples: [
        'e^(iπ) = cos(π) + i×sen(π) = -1 + 0i = -1',
        'e^(iπ) + 1 = 0 (Identidade de Euler)',
        'cos(θ) = (e^(iθ) + e^(-iθ))/2',
        'sen(θ) = (e^(iθ) - e^(-iθ))/(2i)'
      ],
      practiceProblems: [
        {
          question: 'Na identidade e^(iπ) + 1 = 0, quantas constantes fundamentais aparecem?',
          answer: 5,
          hint: 'Conte: e, i, π, 1, e 0'
        }
      ]
    }
  },
  {
    id: 'oresme',
    name: 'Nicole Oresme',
    title: 'Visionário dos Gráficos',
    description: 'Pioneiro na visualização de funções trigonométricas',
    avatar: '📊',
    school: 'trigonometra',
    dialogues: [
      {
        text: 'Antes de mim, as funções eram abstrações. Eu as trouxe para o papel, visíveis aos olhos.',
        emotion: 'proud'
      },
      {
        text: 'Veja uma onda senoidal: sobe, desce, repete infinitamente. Perfeição cíclica.',
        emotion: 'contemplative'
      },
      {
        text: 'Amplitude, frequência, período... estas são as características que definem cada onda.',
        emotion: 'teaching'
      },
      {
        text: 'O Paradoxo Zero embaralhou as frequências. Ajude-me a reorganizá-las em harmonia.',
        emotion: 'hopeful'
      }
    ],
    lesson: {
      concept: 'Gráficos e Propriedades das Ondas',
      explanation: 'Uma função senoidal y = A×sen(B×x + C) + D possui: Amplitude A (altura máxima), Período 2π/B (tempo para repetir), Fase C (deslocamento horizontal), e Deslocamento vertical D.',
      examples: [
        'y = sen(x): amplitude 1, período 2π',
        'y = 2×sen(x): amplitude 2, período 2π',
        'y = sen(2x): amplitude 1, período π',
        'y = sen(x) + 1: amplitude 1, deslocado para cima'
      ],
      practiceProblems: [
        {
          question: 'Qual é o período da função sen(x)?',
          answer: 6,
          hint: 'É 2π ≈ 6.28, arredonde para 6'
        },
        {
          question: 'Qual é a amplitude da função 3×sen(x)?',
          answer: 3,
          hint: 'A amplitude é o valor máximo que a função atinge'
        }
      ]
    }
  }
];
