import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { motion } from 'framer-motion';

export default function LakersApp() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/players')
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

    return (
        <div className="min-h-screen bg-purple-800 text-yellow-400 flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-bold mb-5">🏀 Lakers Players 🏀</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {players.map((player, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }}>
                        <Card className="bg-yellow-400 text-purple-900 p-5 rounded-2xl shadow-lg">
                            <CardContent className="text-center text-lg font-semibold">
                                {player}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}