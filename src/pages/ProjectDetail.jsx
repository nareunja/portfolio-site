import { useParams, Link } from 'react-router-dom';
import { brandProjects, graphicProjects, motionProjects } from '../data/projects';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();

    // Combine all projects to find the matching one
    const allProjects = [...brandProjects, ...graphicProjects, ...motionProjects];
    const project = allProjects.find(p => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-neon-cyan hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    // --- Layouts ---

    // 1. Graphic Design Layout (Minimal, Image Focus)
    if (project.id.startsWith('graphic-')) {
        return (
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="min-h-screen pt-32 pb-20 px-6 container mx-auto relative z-20 text-white flex flex-col items-center"
            >
                <Link to="/" className="absolute top-32 left-6 md:left-20 text-slate-400 hover:text-white transition-colors group">
                    <span className="group-hover:-translate-x-1 transition-transform inline-block mr-2">←</span> Back
                </Link>

                <div className="max-w-4xl w-full text-center mt-12 mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4">{project.title}</h1>
                    <p className="text-slate-400">{project.desc}</p>
                </div>

                <div className="max-w-4xl w-full">
                    <img src={project.img} alt={project.title} className="w-full h-auto rounded-lg shadow-2xl border border-white/10" />
                </div>
            </motion.div>
        );
    }

    // 2. Motion Graphics Layout (Video + Styleframes)
    if (project.id.startsWith('motion-')) {
        return (
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="min-h-screen pt-32 pb-20 px-6 container mx-auto relative z-20 text-white"
            >
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
                    <span className="group-hover:-translate-x-1 transition-transform inline-block mr-2">←</span> Back to Works
                </Link>

                {/* Video Section */}
                <div className="max-w-6xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-8">{project.title}</h1>
                    <div className="aspect-video w-full bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                        {/* YouTube Embed */}
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0`}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                    <p className="mt-6 text-slate-300 text-lg">{project.details}</p>
                </div>

                {/* Styleframes Section */}
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">Styleframes</h3>
                    {project.styleframeImg ? (
                        <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img src={project.styleframeImg} alt={`${project.title} Styleframes`} className="w-full h-auto" />
                        </div>
                    ) : (
                        <p className="text-slate-500">No styleframes available.</p>
                    )}
                </div>

                {/* Optional Detail Images Stack (for Motion projects) */}
                {project.detailImages && (
                    <div className="max-w-7xl mx-auto mt-20">
                        <h3 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">Details</h3>
                        <div className="flex flex-col gap-0 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            {project.detailImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${project.title} detail ${index + 1}`}
                                    className="w-full h-auto"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        );
    }

    // 3. Default (Brand Identity) Layout
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-32 pb-20 px-6 container mx-auto relative z-20 text-white"
        >
            <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
                <span className="group-hover:-translate-x-1 transition-transform inline-block mr-2">←</span> Back to Works
            </Link>

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-neon-cyan font-mono text-sm mb-4 block tracking-widest uppercase">
                        {project.id.split('-')[0]} Project
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-montserrat tracking-tight mb-4">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light">{project.desc}</p>
                </div>

                {/* Main Image */}
                {project.img ? (
                    <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl">
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                ) : (
                    <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 bg-white/5 flex items-center justify-center">
                        <span className="text-slate-500">No Image Available</span>
                    </div>
                )}

                {/* Details Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="glass-card p-8 h-fit">
                        <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Project Info</h3>
                        <ul className="space-y-4 text-sm">
                            {project.period && (
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Period</span>
                                    <span className="text-slate-200">{project.period}</span>
                                </li>
                            )}
                            {project.year && (
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Year</span>
                                    <span className="text-slate-200">{project.year}</span>
                                </li>
                            )}
                            {project.engTitle && (
                                <li className="flex flex-col gap-1">
                                    <span className="text-slate-500">English Title</span>
                                    <span className="text-slate-200 text-right">{project.engTitle}</span>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Overview</h3>
                            <p className="text-slate-300 leading-relaxed text-lg font-light">
                                {project.details || "Detailed description coming soon..."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Detail Images Stack */}
                {project.detailImages && (
                    <div className="mt-20 flex flex-col gap-0 w-full">
                        {project.detailImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${project.title} detail ${index + 1}`}
                                className="w-full h-auto shadow-2xl"
                            />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
