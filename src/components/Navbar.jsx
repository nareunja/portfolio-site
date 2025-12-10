import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-black/80 backdrop-blur-xl py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
                <div className="w-full px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold tracking-tight text-white hover:text-neon-cyan transition-colors z-50">
                        EOM JIWON
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8">
                        {['Home', 'About', 'Work', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`/ #${item.toLowerCase()} `}
                                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1.5 z-50 relative group"
                        aria-label="Menu"
                    >
                        <span className={`w - 6 h - 0.5 bg - white transition - all duration - 300 ${isOpen ? 'rotate-45 translate-y-2' : ''} `}></span>
                        <span className={`w - 6 h - 0.5 bg - white transition - all duration - 300 ${isOpen ? 'opacity-0' : ''} `}></span>
                        <span className={`w - 6 h - 0.5 bg - white transition - all duration - 300 ${isOpen ? '-rotate-45 -translate-y-2' : ''} `}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 flex items-center justify-center md:hidden"
                    >
                        <ul className="flex flex-col gap-8 text-center">
                            {['Home', 'About', 'Work', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`/ #${item.toLowerCase()} `}
                                        className="text-3xl font-light text-white hover:text-neon-cyan transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
