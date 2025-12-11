import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 relative z-20 border-t border-white/5 mt-32">
            <div className="max-w-4xl mx-auto">


                <div className="flex flex-col gap-6 items-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="mailto:wldnjsdpqh@naver.com"
                        className="glass-card px-12 py-6 text-2xl md:text-3xl font-black text-white hover:text-neon-cyan transition-colors"
                    >
                        wldnjsdpqh@naver.com
                    </motion.a>

                    <div className="flex gap-8 mt-8">
                        <a href="tel:010-8403-0695" className="text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm">+82 10-8403-0695</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
