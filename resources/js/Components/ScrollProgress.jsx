import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 to-blue-400 origin-left z-100"
            style={{ scaleX: scrollYProgress }}
        />
    );
};

export default ScrollProgress;
