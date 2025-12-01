import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import {
    AuthResponse,
    Player,
    Character,
    School,
    Item,
    Encounter,
    Quest,
    InventoryItem,
    CharacterStatistics
} from '../types/api';

const API_BASE_URL = 'https://d75p4b63x4.execute-api.us-east-2.amazonaws.com/api/v1';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Helper function for exponential backoff retry
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const shouldRetry = (error: AxiosError): boolean => {
    return error.response?.status === 429;
};

const getRetryDelay = (retryCount: number): number => {
    // Exponential backoff: 1s, 2s, 4s
    return Math.min(1000 * Math.pow(2, retryCount), 4000);
};

// Request interceptor to add token
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor for automatic token refresh and retry logic
api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean; _retryCount?: number };

        // Handle 429 Rate Limiting with exponential backoff
        if (shouldRetry(error) && (!originalRequest._retryCount || originalRequest._retryCount < 3)) {
            originalRequest._retryCount = (originalRequest._retryCount || 0) + 1;
            const retryDelay = getRetryDelay(originalRequest._retryCount - 1);

            await delay(retryDelay);
            return api(originalRequest);
        }

        // Don't try to refresh token for auth endpoints (login, register, refresh)
        const isAuthEndpoint = originalRequest.url?.includes('/auth/login') ||
                              originalRequest.url?.includes('/auth/register') ||
                              originalRequest.url?.includes('/auth/refresh');

        // Handle 401 Unauthorized with token refresh
        if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (!refreshToken) {
                    throw new Error('No refresh token available');
                }

                const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
                    refreshToken,
                });

                const { accessToken, refreshToken: newRefreshToken } = response.data.data.tokens;

                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', newRefreshToken);

                if (originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                }

                return api(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/auth';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export const authService = {
    async register(username: string, email: string, password: string, passwordConfirmation: string): Promise<Player> {
        const response = await api.post<AuthResponse>('/auth/register', {
            username,
            email,
            password,
            passwordConfirmation,
        });

        const { accessToken, refreshToken } = response.data.data.tokens;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        return response.data.data.player;
    },

    async login(login: string, password: string): Promise<Player> {
        const response = await api.post<AuthResponse>('/auth/login', {
            login,
            password,
        });

        const { accessToken, refreshToken } = response.data.data.tokens;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        return response.data.data.player;
    },

    async logout(): Promise<void> {
        await api.post('/auth/logout');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    },

    async getMe(): Promise<Player> {
        const response = await api.get<{ success: boolean; data: Player }>('/auth/me');
        return response.data.data;
    },

    async checkUsername(username: string): Promise<boolean> {
        const response = await api.post<{ success: boolean; data: { available: boolean } }>('/auth/check-username', { username });
        return response.data.data.available;
    },

    async checkEmail(email: string): Promise<boolean> {
        const response = await api.post<{ success: boolean; data: { available: boolean } }>('/auth/check-email', { email });
        return response.data.data.available;
    }
};

export const characterService = {
    async getCharacters(): Promise<Character[]> {
        const response = await api.get<{ success: boolean; data: { characters: Character[]; total: number; canCreateMore: boolean } }>('/characters');
        return response.data.data.characters;
    },

    async getCharacter(id: number): Promise<Character> {
        const response = await api.get<{ success: boolean; data: Character }>('/characters/' + id);
        return response.data.data;
    },

    async createCharacter(name: string, schoolId: number): Promise<Character> {
        const response = await api.post<{ success: boolean; data: Character }>('/characters', {
            name,
            schoolId,
        });
        return response.data.data;
    },

    async deleteCharacter(id: number): Promise<void> {
        await api.delete('/characters/' + id);
    },

    async checkNameAvailability(name: string): Promise<boolean> {
        const response = await api.post<{ success: boolean; data: { available: boolean } }>('/characters/check-name', { name });
        return response.data.data.available;
    },

    async getCharacterStats(id: number): Promise<{ characterId: number; statistics: CharacterStatistics }> {
        const response = await api.get<{ success: boolean; data: { characterId: number; statistics: CharacterStatistics } }>('/characters/' + id + '/stats');
        return response.data.data;
    }
};

export const gameService = {
    async startEncounter(characterId: number, monsterId?: number): Promise<Encounter> {
        const response = await api.post<{ success: boolean; data: Encounter }>('/game/characters/' + characterId + '/encounters', {
            ...(monsterId && { monsterId })
        });
        return response.data.data;
    },

    async solveProblem(encounterId: number, answer: string, timeTaken: number): Promise<{
        correct: boolean;
        damage?: number;
        damageTaken?: number;
        encounterStatus: string;
        rewards?: any;
        characterUpdates?: any;
        nextProblem?: any;
    }> {
        const response = await api.post<{ success: boolean; data: any }>('/game/encounters/' + encounterId + '/solve', {
            answer,
            timeTaken,
        });
        return response.data.data;
    },

    async fleeFromEncounter(encounterId: number): Promise<{ encounterStatus: string; experienceLost: number }> {
        const response = await api.post<{ success: boolean; data: any }>('/game/encounters/' + encounterId + '/flee');
        return response.data.data;
    },

    async getActiveEncounters(characterId: number): Promise<Encounter[]> {
        const response = await api.get<{ success: boolean; data: Encounter[] }>('/game/characters/' + characterId + '/encounters/active');
        return response.data.data;
    },

    async getQuests(characterId: number): Promise<Quest[]> {
        const response = await api.get<{ success: boolean; data: Quest[] }>('/game/characters/' + characterId + '/quests');
        return response.data.data;
    },

    async acceptQuest(characterId: number, questId: number): Promise<any> {
        const response = await api.post<{ success: boolean; data: any }>('/game/characters/' + characterId + '/quests/' + questId + '/accept');
        return response.data.data;
    },

    async getActiveQuests(characterId: number): Promise<any[]> {
        const response = await api.get<{ success: boolean; data: any[] }>('/game/characters/' + characterId + '/quests/active');
        return response.data.data;
    },

    async useItem(characterId: number, inventoryId: number): Promise<any> {
        const response = await api.post<{ success: boolean; data: any }>('/game/characters/' + characterId + '/inventory/use', { inventoryId });
        return response.data.data;
    },

    async equipItem(characterId: number, inventoryId: number): Promise<any> {
        const response = await api.post<{ success: boolean; data: any }>('/game/characters/' + characterId + '/inventory/equip', { inventoryId });
        return response.data.data;
    },

    async getSchools(): Promise<School[]> {
        const response = await api.get<{ success: boolean; data: School[] }>('/game/schools');
        return response.data.data;
    },

    async getItems(): Promise<Item[]> {
        const response = await api.get<{ success: boolean; data: Item[] }>('/game/items');
        return response.data.data;
    },

    async getLeaderboard(limit = 10, offset = 0): Promise<any> {
        const response = await api.get<{ success: boolean; data: any }>('/game/leaderboard', { params: { limit, offset } });
        return response.data.data;
    }
};

export default api;
