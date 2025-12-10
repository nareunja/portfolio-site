import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const Spotlight = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 40, stiffness: 1000 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 200);
            mouseY.set(e.clientY - 200);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed z-30 w-[400px] h-[400px] rounded-full blur-[80px] opacity-40 mix-blend-screen backdrop-blur-sm"
            style={{
                x,
                y,
                left: 0,
                top: 0,
                background: "linear-gradient(to right, #bc13fe, #04d9ff)",
            }}
        />
    );
};

export default Spotlight;
