import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { getStats, getWeaknesses } from '@/utils/statsManager';
import { UserStats } from '@/types/stats';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Brain, Target, Zap, AlertTriangle, X } from 'lucide-react';

interface ProgressReportProps {
    onClose: () => void;
}

export const ProgressReport = ({ onClose }: ProgressReportProps) => {
    const [stats, setStats] = useState<UserStats | null>(null);
    const [weaknesses, setWeaknesses] = useState<any[]>([]);

    useEffect(() => {
        const loadedStats = getStats();
        setStats(loadedStats);
        setWeaknesses(getWeaknesses(loadedStats));
    }, []);

    if (!stats) return null;

    const accuracy = stats.totalQuestions > 0
        ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100)
        : 0;

    const pieData = [
        { name: 'Acertos', value: stats.correctAnswers, color: '#22c55e' },
        { name: 'Erros', value: stats.wrongAnswers, color: '#ef4444' },
    ];

    // Prepare data for bar chart (Top 5 topics)
    const barData = Object.entries(stats.topicStats)
        .map(([key, stat]) => ({
            name: key.split(':')[1].replace(/_/g, ' '),
            acertos: stat.correct,
            erros: stat.wrong,
        }))
        .sort((a, b) => (b.acertos + b.erros) - (a.acertos + a.erros))
        .slice(0, 5);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1a1625] border-primary/30 shadow-2xl relative">
                <Button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-transparent hover:bg-white/10 text-white"
                    size="icon"
                >
                    <X className="w-6 h-6" />
                </Button>

                <div className="p-8 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 flex items-center justify-center gap-3">
                            <Brain className="w-8 h-8 text-primary" />
                            GRIMÓRIO DO CONHECIMENTO
                        </h2>
                        <p className="text-gray-400">Análise detalhada do seu desempenho mágico</p>
                    </div>

                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6 bg-black/40 border-primary/20 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors">
                            <Target className="w-10 h-10 text-green-500 mb-3" />
                            <div className="text-4xl font-bold text-white mb-1">{accuracy}%</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Precisão Total</div>
                        </Card>

                        <Card className="p-6 bg-black/40 border-primary/20 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors">
                            <Zap className="w-10 h-10 text-yellow-500 mb-3" />
                            <div className="text-4xl font-bold text-white mb-1">{stats.totalQuestions}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Desafios Enfrentados</div>
                        </Card>

                        <Card className="p-6 bg-black/40 border-primary/20 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors">
                            <div className="text-4xl mb-3">🔥</div>
                            <div className="text-4xl font-bold text-white mb-1">{stats.bestStreak}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Melhor Sequência</div>
                        </Card>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Pie Chart */}
                        <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-6 text-center">Distribuição de Respostas</h3>
                            <div className="h-64 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1a1625', borderColor: '#7c3aed', borderRadius: '8px' }}
                                            itemStyle={{ color: '#fff' }}
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Weaknesses List */}
                        <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                                Pontos a Melhorar
                            </h3>

                            <div className="space-y-4 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                                {weaknesses.length === 0 ? (
                                    <div className="text-center py-12 text-gray-500">
                                        <p>Nenhum ponto fraco detectado ainda.</p>
                                        <p className="text-sm mt-2">Continue jogando para gerar análises!</p>
                                    </div>
                                ) : (
                                    weaknesses.map((weakness, idx) => (
                                        <div key={idx} className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-bold text-red-400 capitalize">
                                                    {weakness.topic.replace(/_/g, ' ')}
                                                </span>
                                                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                                                    {Math.round(weakness.accuracy * 100)}% Precisão
                                                </span>
                                            </div>
                                            <Progress value={weakness.accuracy * 100} className="h-2 bg-red-900/50" indicatorClassName="bg-red-500" />
                                            <p className="text-xs text-gray-400 mt-2">
                                                {weakness.stat.wrong} erros em {weakness.total} tentativas
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Topic Performance Bar Chart */}
                    <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-6">Desempenho por Tópico (Top 5)</h3>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barData} layout="vertical">
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={150} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                        contentStyle={{ backgroundColor: '#1a1625', borderColor: '#7c3aed', borderRadius: '8px' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="acertos" stackId="a" fill="#22c55e" radius={[0, 4, 4, 0]} />
                                    <Bar dataKey="erros" stackId="a" fill="#ef4444" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    );
};
