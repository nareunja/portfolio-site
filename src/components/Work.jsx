import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { brandProjects, graphicProjects, motionProjects } from '../data/projects';

const cardFloatVariant = {
    animate: (i) => ({
        y: [-8, 8, -8],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1
        }
    }),
    hover: {
        scale: 1.02,
        y: 0,
        borderColor: "rgba(255, 255, 255, 0.4)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.3 }
    }
};

const Work = () => {
    return (
        <section id="work" className="min-h-screen py-32 px-0 w-[90%] mx-auto relative z-20">
            {/* Title */}
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-20 tracking-tighter font-montserrat">WORKS</h2>

            <div className="flex flex-col gap-32">
                {/* 1. Brand Identity Section */}
                <div>
                    <div className="flex items-end gap-4 mb-12 border-b border-white/20 pb-4">
                        <h3 className="text-3xl font-bold text-white">Brand Identity</h3>
                        <span className="text-slate-500 font-mono text-sm mb-1">01</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {brandProjects.map((p, i) => (
                            <Link to={`/project/${p.id}`} key={i} className="contents">
                                <motion.div
                                    variants={cardFloatVariant}
                                    animate="animate"
                                    custom={i}
                                    whileHover="hover"
                                    className={`glass-card p-0 overflow-hidden relative group aspect-video cursor-pointer`}
                                >
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-neon-cyan text-xs font-mono">{p.period}</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-1">{p.title}</h4>
                                        <p className="text-slate-300 text-sm">{p.engTitle} | {p.desc}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 2. Graphic Design Section */}
                <div>
                    <div className="flex items-end gap-4 mb-12 border-b border-white/20 pb-4">
                        <h3 className="text-3xl font-bold text-white">Graphic Design</h3>
                        <span className="text-slate-500 font-mono text-sm mb-1">02</span>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Row 1: 2 Items (Naver, Birthday) - Swapped to Top */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {graphicProjects.slice(3, 5).map((p, i) => (
                                <Link to={`/project/${p.id}`} key={i} className="contents group">
                                    <motion.div
                                        variants={cardFloatVariant}
                                        animate="animate"
                                        custom={i + 6}
                                        whileHover="hover"
                                        className="glass-card p-0 overflow-hidden relative w-full h-auto cursor-pointer aspect-video"
                                    >
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                            <h4 className="text-2xl font-bold text-white">{p.title}</h4>
                                            <p className="text-slate-300 text-sm">{p.desc}</p>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        {/* Row 2: 3 Items (Butterfly, Pinball, Art) - Swapped to Bottom */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {graphicProjects.slice(0, 3).map((p, i) => (
                                <Link to={`/project/${p.id}`} key={i} className="contents group">
                                    <motion.div
                                        variants={cardFloatVariant}
                                        animate="animate"
                                        custom={i + 3}
                                        whileHover="hover"
                                        className="glass-card p-0 overflow-hidden relative w-full h-auto cursor-pointer aspect-square"
                                    >
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                            <h4 className="text-xl font-bold text-white">{p.title}</h4>
                                            <p className="text-slate-300 text-xs">{p.desc}</p>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 3. Motion Graphics Section */}
                <div>
                    <div className="flex items-end gap-4 mb-12 border-b border-white/20 pb-4">
                        <h3 className="text-3xl font-bold text-white">Motion Graphics</h3>
                        <span className="text-slate-500 font-mono text-sm mb-1">03</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {motionProjects.map((p, i) => (
                            <Link to={`/project/${p.id}`} key={i} className="contents">
                                <motion.div
                                    variants={cardFloatVariant}
                                    animate="animate"
                                    custom={i + 7}
                                    whileHover="hover"
                                    className="glass-card p-0 overflow-hidden relative group aspect-video cursor-pointer"
                                >
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-neon-cyan text-xs font-mono">{p.year}</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-1">{p.title}</h4>
                                        <p className="text-slate-300 text-sm">{p.desc}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Work;
