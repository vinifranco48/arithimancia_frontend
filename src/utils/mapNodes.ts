import { MapNode } from '@/types/npc';
import { School } from '@/types/game';
import { getAvailableNodes, getNPCById } from '@/data/kingdoms';
import { KingdomNode } from '@/types/kingdom';

/**
 * Gera os nós do mapa baseado no reino/escola do personagem
 * @param kingdom - Reino do personagem (geometra, algebrista, etc)
 * @param currentLevel - Level atual do personagem
 * @returns Array de nós do mapa filtrados por reino
 */
export const generateMapNodes = (kingdom: School, currentLevel: number): MapNode[] => {
  // Busca os nós do reino específico
  const kingdomNodes = getAvailableNodes(kingdom, currentLevel);

  // Converte KingdomNode para MapNode (compatibilidade com código legado)
  return kingdomNodes.map((node: KingdomNode): MapNode => ({
    id: node.id,
    type: node.type,
    title: node.title,
    description: node.description,
    position: node.position,
    requiredLevel: node.requiredLevel,
    completed: node.completed,
    locked: node.locked,
    rewards: node.rewards,
    // Busca o NPC se o nó for do tipo NPC
    npc: node.npcId ? getNPCById(kingdom, node.npcId) : undefined
  }));
};

/**
 * DEPRECATED: Mantido para compatibilidade com código antigo
 * Use generateMapNodes(kingdom, level) em vez disso
 */
export const generateMapNodesByLevel = (currentLevel: number): MapNode[] => {
  // Fallback para geometria por padrão
  return generateMapNodes('geometra', currentLevel);
};
