import { motion } from 'framer-motion';

const floatVariant = {
    animate: {
        y: [-20, 10, -20],
        rotate: [0, 1, -1, 0],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-40 pb-40">
            {/* Floating Text */}
            <motion.div
                variants={floatVariant}
                animate="animate"
                className="relative z-10 p-12"
            >
                <h1 className="relative text-[13vw] leading-none font-bold tracking-tighter text-white drop-shadow-2xl z-20 px-8 py-4 mix-blend-overlay opacity-90 font-montserrat">
                    STACKS
                </h1>
            </motion.div>

            <div className="relative z-10 mt-24 max-w-2xl px-6">
                <p className="text-slate-300 font-light leading-loose text-base md:text-xl break-keep mx-auto">
                    겉보기에만 화려한 디자인은 하고 싶지 않아 고민하고 더 깊이 파고들었습니다.<br className="hidden md:block" />
                    그렇게 쌓인 고민의 흔적들이 저를 더 단단하게 만들었습니다.<br className="hidden md:block" />
                    겉모습보다 그 안의 밀도를 채우는 디자이너가 되고싶습니다.
                </p>
            </div>
        </section>
    );
};

export default Hero;
