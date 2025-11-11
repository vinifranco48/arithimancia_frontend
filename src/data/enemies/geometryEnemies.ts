import { Enemy } from '@/types/game';

// ============================================
// INIMIGOS EXCLUSIVOS DO REINO DA GEOMETRIA
// ============================================

interface EnemyTemplate {
  id: string;
  name: string;
  type: 'zero_absoluto' | 'infinito_selvagem' | 'fractal_parasita' | 'paradoxo';
  description: string;
  baseHp: number;
  basePower: number;
  isBoss?: boolean;
}

// Templates de inimigos da geometria
const geometryEnemyTemplates: EnemyTemplate[] = [
  // INIMIGOS COMUNS - ATO I
  {
    id: 'linha_quebrada',
    name: 'Linha Quebrada',
    type: 'fractal_parasita',
    description: 'Um segmento de reta corrompido que perdeu sua retidão',
    baseHp: 25,
    basePower: 6
  },
  {
    id: 'angulo_distorcido',
    name: 'Ângulo Distorcido',
    type: 'paradoxo',
    description: 'Um ângulo que mede mais de 360° e menos de 0° ao mesmo tempo',
    baseHp: 30,
    basePower: 7
  },
  {
    id: 'triangulo_escaleno',
    name: 'Triângulo Escaleno Selvagem',
    type: 'fractal_parasita',
    description: 'Um triângulo com lados desproporcionais e ângulos que não somam 180°',
    baseHp: 35,
    basePower: 8
  },
  {
    id: 'hipotenusa_fugitiva',
    name: 'Hipotenusa Fugitiva',
    type: 'paradoxo',
    description: 'A hipotenusa de um triângulo retângulo que tenta escapar do teorema de Pitágoras',
    baseHp: 40,
    basePower: 9
  },

  // BOSS - ATO I
  {
    id: 'fractal_parasita_boss',
    name: 'Fractal Parasita da Biblioteca',
    type: 'fractal_parasita',
    description: 'Um padrão fractal infinito que infectou e replica as formas da biblioteca',
    baseHp: 80,
    basePower: 12,
    isBoss: true
  },

  // INIMIGOS COMUNS - ATO II
  {
    id: 'sombra_desproporcional',
    name: 'Sombra Desproporcional',
    type: 'paradoxo',
    description: 'Uma sombra que não respeita as leis da semelhança de triângulos',
    baseHp: 45,
    basePower: 10
  },
  {
    id: 'circulo_imperfeito',
    name: 'Círculo Imperfeito',
    type: 'fractal_parasita',
    description: 'Um círculo com raio variável e π corrompido',
    baseHp: 50,
    basePower: 11
  },
  {
    id: 'espiral_infinita',
    name: 'Espiral Infinita',
    type: 'infinito_selvagem',
    description: 'Uma espiral de Arquimedes que cresce sem controle',
    baseHp: 55,
    basePower: 12
  },

  // BOSS - ATO II
  {
    id: 'assintota_circular_boss',
    name: 'Assíntota Circular',
    type: 'infinito_selvagem',
    description: 'Uma entidade que se aproxima infinitamente de um círculo mas nunca o toca',
    baseHp: 100,
    basePower: 15,
    isBoss: true
  },

  // INIMIGOS COMUNS - ATO III
  {
    id: 'ponto_fora_plano',
    name: 'Ponto Fora do Plano',
    type: 'paradoxo',
    description: 'Um ponto que existe fora do plano cartesiano e se recusa a ter coordenadas',
    baseHp: 60,
    basePower: 13
  },
  {
    id: 'cubo_dimensional',
    name: 'Cubo Dimensional',
    type: 'paradoxo',
    description: 'Um cubo que alterna entre 2D e 4D aleatoriamente, nunca permanecendo em 3D',
    baseHp: 65,
    basePower: 14
  },
  {
    id: 'poliedro_corrompido',
    name: 'Poliedro Corrompido',
    type: 'fractal_parasita',
    description: 'Um poliedro com faces impossíveis e arestas que se intersectam',
    baseHp: 70,
    basePower: 15
  },

  // BOSS - ATO III
  {
    id: 'paradoxo_geometrico_boss',
    name: 'Paradoxo Geométrico',
    type: 'paradoxo',
    description: 'Uma forma que viola simultaneamente todos os cinco postulados de Euclides',
    baseHp: 120,
    basePower: 18,
    isBoss: true
  },

  // INIMIGOS COMUNS - ATO IV
  {
    id: 'equacao_euclidiana',
    name: 'Equação Euclidiana Corrompida',
    type: 'paradoxo',
    description: 'Os próprios axiomas de Euclides transformados em entidade hostil',
    baseHp: 75,
    basePower: 16
  },
  {
    id: 'fragmento_ultimo_matematico',
    name: 'Fragmento do Último Matemático',
    type: 'paradoxo',
    description: 'Um eco do Último Matemático, ainda tentando resolver a equação impossível',
    baseHp: 80,
    basePower: 17
  },
  {
    id: 'geometria_hiperbolica',
    name: 'Geometria Hiperbólica Selvagem',
    type: 'infinito_selvagem',
    description: 'Uma manifestação da geometria de Lobachevsky fora de controle',
    baseHp: 85,
    basePower: 18
  },
  {
    id: 'guardioes_laboratorio',
    name: 'Guardiões do Laboratório',
    type: 'fractal_parasita',
    description: 'Múltiplas formas geométricas corrompidas que atacam em conjunto',
    baseHp: 90,
    basePower: 19
  },

  // FINAL BOSS - ATO IV
  {
    id: 'paradoxo_zero_geometrico',
    name: 'O Paradoxo Zero Geométrico',
    type: 'paradoxo',
    description: 'A forma impossível que não deveria existir - origem do colapso geométrico',
    baseHp: 150,
    basePower: 22,
    isBoss: true
  }
];

// Função para gerar inimigo por ID e level
export const generateGeometryEnemyById = (enemyId: string, level: number): Enemy => {
  const template = geometryEnemyTemplates.find(e => e.id === enemyId);

  if (!template) {
    // Fallback para inimigo padrão
    return {
      id: 'unknown',
      name: 'Forma Desconhecida',
      type: 'paradoxo',
      description: 'Uma entidade geométrica não catalogada',
      hp: 50,
      maxHp: 50,
      power: 10
    };
  }

  // Scaling baseado no level
  const levelMultiplier = template.isBoss ? 1.5 : 1.0;
  const scaledHp = Math.floor(template.baseHp + (level * 10 * levelMultiplier));
  const scaledPower = Math.floor(template.basePower + (level * 1.5 * levelMultiplier));

  return {
    id: template.id,
    name: template.name,
    type: template.type,
    description: template.description,
    hp: scaledHp,
    maxHp: scaledHp,
    power: scaledPower
  };
};

// Função para obter todos os templates de inimigos da geometria
export const getAllGeometryEnemyTemplates = (): EnemyTemplate[] => {
  return geometryEnemyTemplates;
};

// Função para obter inimigos por tipo
export const getGeometryEnemiesByType = (type: EnemyTemplate['type']): EnemyTemplate[] => {
  return geometryEnemyTemplates.filter(e => e.type === type);
};

// Função para obter apenas bosses da geometria
export const getGeometryBosses = (): EnemyTemplate[] => {
  return geometryEnemyTemplates.filter(e => e.isBoss);
};

// Exportar templates para uso externo
export { geometryEnemyTemplates };
export type { EnemyTemplate };
