import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15);
            });
        }, 150);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center font-mono"
        >
            <div className="w-64">
                {/* Text Glitch Effect */}
                <div className="flex justify-between items-end mb-4 text-neon-cyan">
                    <span className="text-xl font-bold tracking-widest">SYSTEM_INIT</span>
                    <span className="text-xl font-bold">{Math.min(progress, 100)}%</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>

                {/* Decode Text */}
                <div className="mt-2 text-xs text-slate-500 text-right">
                    LOADING RESOURCES...
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
