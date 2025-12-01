import { Spell, School } from '@/types/game';

export const SPELLS: Record<School, Spell[]> = {
    algebrista: [
        {
            id: 'alg_blast',
            name: 'Equação Explosiva',
            description: 'Causa 2x de dano.',
            cost: 30,
            type: 'damage',
            value: 2.0,
            school: 'algebrista',
            icon: '💥',
            animation: 'animate-spell-blast'
        },
        {
            id: 'alg_heal',
            name: 'Equilíbrio Vital',
            description: 'Cura 40 HP.',
            cost: 40,
            type: 'heal',
            value: 40,
            school: 'algebrista',
            icon: '🧪',
            animation: 'animate-spell-heal'
        }
    ],
    geometra: [
        {
            id: 'geo_prism',
            name: 'Prisma de Luz',
            description: 'Causa 2.5x de dano.',
            cost: 40,
            type: 'damage',
            value: 2.5,
            school: 'geometra',
            icon: '✨',
            animation: 'animate-spell-prism'
        },
        {
            id: 'geo_shield',
            name: 'Reconstrução Sólida',
            description: 'Cura 50 HP.',
            cost: 45,
            type: 'heal',
            value: 50,
            school: 'geometra',
            icon: '🛡️',
            animation: 'animate-spell-heal'
        }
    ],
    trigonometra: [
        {
            id: 'tri_wave',
            name: 'Onda Senoidal',
            description: 'Causa 2x de dano.',
            cost: 30,
            type: 'damage',
            value: 2.0,
            school: 'trigonometra',
            icon: '🌊',
            animation: 'animate-spell-wave'
        },
        {
            id: 'tri_focus',
            name: 'Foco Angular',
            description: 'Cura 35 HP.',
            cost: 35,
            type: 'heal',
            value: 35,
            school: 'trigonometra',
            icon: '👁️',
            animation: 'animate-spell-heal'
        }
    ],
    numerologo: [
        {
            id: 'num_prime',
            name: 'Julgamento Primo',
            description: 'Causa 3x de dano.',
            cost: 50,
            type: 'damage',
            value: 3.0,
            school: 'numerologo',
            icon: '⚡',
            animation: 'animate-spell-lightning'
        },
        {
            id: 'num_regen',
            name: 'Sequência Vital',
            description: 'Cura 30 HP.',
            cost: 25,
            type: 'heal',
            value: 30,
            school: 'numerologo',
            icon: '🌿',
            animation: 'animate-spell-heal'
        }
    ]
};
