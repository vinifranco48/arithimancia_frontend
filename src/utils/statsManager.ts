import { UserStats } from '@/types/stats';

const STATS_KEY = 'arithimancia_user_stats';

const getInitialStats = (): UserStats => ({
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    streak: 0,
    bestStreak: 0,
    topicStats: {},
    lastPlayed: new Date().toISOString(),
});

export const getStats = (): UserStats => {
    const stored = localStorage.getItem(STATS_KEY);
    return stored ? JSON.parse(stored) : getInitialStats();
};

export const saveAttempt = (
    school: string,
    topic: string,
    difficulty: string,
    isCorrect: boolean,
    timeTaken: number
) => {
    const stats = getStats();
    const key = `${school}:${topic}`;

    stats.totalQuestions++;
    stats.lastPlayed = new Date().toISOString();

    if (isCorrect) {
        stats.correctAnswers++;
        stats.streak++;
        if (stats.streak > stats.bestStreak) stats.bestStreak = stats.streak;
    } else {
        stats.wrongAnswers++;
        stats.streak = 0;
    }

    if (!stats.topicStats[key]) {
        stats.topicStats[key] = { correct: 0, wrong: 0, totalTime: 0 };
    }

    const topicStat = stats.topicStats[key];
    if (isCorrect) topicStat.correct++;
    else topicStat.wrong++;

    topicStat.totalTime += timeTaken;

    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    return stats;
};

export const getWeaknesses = (stats: UserStats) => {
    return Object.entries(stats.topicStats)
        .map(([key, stat]) => {
            const total = stat.correct + stat.wrong;
            const accuracy = total > 0 ? stat.correct / total : 0;
            const [school, topic] = key.split(':');
            return { key, school, topic, accuracy, total, stat };
        })
        .filter(item => item.total >= 1 && item.accuracy < 0.6) // Mostrar fraquezas mesmo com poucas tentativas para feedback rápido
        .sort((a, b) => a.accuracy - b.accuracy);
};
