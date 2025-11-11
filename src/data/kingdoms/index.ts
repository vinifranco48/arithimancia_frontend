import { Kingdom, KingdomData, KingdomNode } from '@/types/kingdom';
import { School } from '@/types/game';
import { geometryKingdom } from './geometry';
import { algebraKingdom } from './algebra';
import { cyclesKingdom } from './cycles';
import { numbersKingdom } from './numbers';
import { geometryNPCs } from '../npcs/geometryNPCs';
import { algebraNPCs } from '../npcs/algebraNPCs';
import { cyclesNPCs } from '../npcs/cyclesNPCs';
import { numbersNPCs } from '../npcs/numbersNPCs';
import { geometryEnemyTemplates, generateGeometryEnemyById } from '../enemies/geometryEnemies';
import { generateAlgebraEnemyById } from '../enemies/algebraEnemies';
import { generateCyclesEnemyById } from '../enemies/cyclesEnemies';
import { generateNumbersEnemyById } from '../enemies/numbersEnemies';
import { NPC } from '@/types/npc';
import { Enemy } from '@/types/game';

// ============================================
// REGISTRO CENTRAL DE TODOS OS REINOS
// ============================================

// Mapeamento de todos os reinos disponíveis
const kingdomsRegistry: Record<Kingdom, KingdomData> = {
  geometra: geometryKingdom,
  algebrista: algebraKingdom,
  trigonometra: cyclesKingdom,
  numerologo: numbersKingdom,
};

// Mapeamento de NPCs por reino
const npcsRegistry: Record<Kingdom, NPC[]> = {
  geometra: geometryNPCs,
  algebrista: algebraNPCs,
  trigonometra: cyclesNPCs,
  numerologo: numbersNPCs,
};

// ============================================
// FUNÇÕES HELPER PARA BUSCAR DADOS
// ============================================

/**
 * Busca os dados completos de um reino
 */
export const getKingdomData = (kingdom: Kingdom): KingdomData => {
  return kingdomsRegistry[kingdom] || kingdomsRegistry.geometra;
};

/**
 * Busca todos os nós de um reino
 */
export const getKingdomNodes = (kingdom: Kingdom): KingdomNode[] => {
  const kingdomData = getKingdomData(kingdom);
  return kingdomData.nodes;
};

/**
 * Busca nós filtrados por level do personagem
 */
export const getAvailableNodes = (kingdom: Kingdom, currentLevel: number): KingdomNode[] => {
  const allNodes = getKingdomNodes(kingdom);

  return allNodes.map((node, index) => ({
    ...node,
    // Primeiro nó sempre desbloqueado
    locked: index === 0 ? false : node.requiredLevel > currentLevel,
    completed: false // TODO: Carregar do estado do jogo
  }));
};

/**
 * Busca nós de um ato específico
 */
export const getNodesByAct = (kingdom: Kingdom, act: 1 | 2 | 3 | 4): KingdomNode[] => {
  const allNodes = getKingdomNodes(kingdom);
  return allNodes.filter(node => node.act === act);
};

/**
 * Busca um nó específico por ID
 */
export const getNodeById = (kingdom: Kingdom, nodeId: number): KingdomNode | undefined => {
  const allNodes = getKingdomNodes(kingdom);
  return allNodes.find(node => node.id === nodeId);
};

/**
 * Busca todos os NPCs de um reino
 */
export const getKingdomNPCs = (kingdom: Kingdom): NPC[] => {
  return npcsRegistry[kingdom] || [];
};

/**
 * Busca um NPC específico por ID (dentro de um reino)
 */
export const getNPCById = (kingdom: Kingdom, npcId: string): NPC | undefined => {
  const npcs = getKingdomNPCs(kingdom);
  return npcs.find(npc => npc.id === npcId);
};

/**
 * Gera um inimigo baseado no reino e level
 */
export const generateEnemyForKingdom = (kingdom: Kingdom, enemyId: string, level: number): Enemy => {
  switch (kingdom) {
    case 'geometra':
      return generateGeometryEnemyById(enemyId, level);
    case 'algebrista':
      return generateAlgebraEnemyById(enemyId, level);
    case 'trigonometra':
      return generateCyclesEnemyById(enemyId, level);
    case 'numerologo':
      return generateNumbersEnemyById(enemyId, level);
    default:
      // Fallback
      return generateGeometryEnemyById(enemyId, level);
  }
};

/**
 * Busca templates de inimigos de um reino
 */
export const getKingdomEnemyTemplates = (kingdom: Kingdom) => {
  if (kingdom === 'geometra') {
    return geometryEnemyTemplates;
  }
  // TODO: Outros reinos
  return geometryEnemyTemplates;
};

/**
 * Busca os boss nodes de um reino
 */
export const getBossNodes = (kingdom: Kingdom): KingdomNode[] => {
  const allNodes = getKingdomNodes(kingdom);
  return allNodes.filter(node => node.isBoss);
};

/**
 * Busca os NPC nodes de um reino
 */
export const getNPCNodes = (kingdom: Kingdom): KingdomNode[] => {
  const allNodes = getKingdomNodes(kingdom);
  return allNodes.filter(node => node.type === 'npc');
};

/**
 * Busca os battle nodes de um reino
 */
export const getBattleNodes = (kingdom: Kingdom): KingdomNode[] => {
  const allNodes = getKingdomNodes(kingdom);
  return allNodes.filter(node => node.type === 'battle' || node.type === 'boss');
};

/**
 * Calcula o progresso total de um reino
 */
export const calculateKingdomProgress = (kingdom: Kingdom, completedNodeIds: number[]): {
  total: number;
  completed: number;
  percentage: number;
} => {
  const allNodes = getKingdomNodes(kingdom);
  const total = allNodes.length;
  const completed = completedNodeIds.length;
  const percentage = Math.round((completed / total) * 100);

  return { total, completed, percentage };
};

/**
 * Verifica se um nó foi desbloqueado
 */
export const isNodeUnlocked = (node: KingdomNode, currentLevel: number, completedNodeIds: number[]): boolean => {
  // Primeiro nó sempre desbloqueado
  if (node.id === 1) return true;

  // Verifica level mínimo
  if (currentLevel < node.requiredLevel) return false;

  // Verifica se o nó anterior foi completado (progressão linear)
  const previousNodeCompleted = completedNodeIds.includes(node.id - 1);
  return previousNodeCompleted;
};

/**
 * Busca o próximo nó disponível para jogar
 */
export const getNextAvailableNode = (kingdom: Kingdom, currentLevel: number, completedNodeIds: number[]): KingdomNode | null => {
  const allNodes = getKingdomNodes(kingdom);

  for (const node of allNodes) {
    const isCompleted = completedNodeIds.includes(node.id);
    const isUnlocked = isNodeUnlocked(node, currentLevel, completedNodeIds);

    if (!isCompleted && isUnlocked) {
      return node;
    }
  }

  return null; // Todos os nós completados
};

// ============================================
// EXPORTAR TUDO
// ============================================

export {
  kingdomsRegistry,
  npcsRegistry,
  geometryKingdom,
  algebraKingdom,
  cyclesKingdom,
  numbersKingdom,
  geometryNPCs,
  algebraNPCs,
  cyclesNPCs,
  numbersNPCs,
  geometryEnemyTemplates
};
