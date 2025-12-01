export interface TopicStats {
    correct: number;
    wrong: number;
    totalTime: number;
}

export interface UserStats {
    totalQuestions: number;
    correctAnswers: number;
    wrongAnswers: number;
    streak: number;
    bestStreak: number;
    topicStats: Record<string, TopicStats>; // e.g., "geometra:area_quadrado" -> stats
    lastPlayed: string;
}
