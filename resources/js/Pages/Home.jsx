import { motion } from 'framer-motion';
import { Link, Head } from '@inertiajs/react';
import AnimatedText from '@/Components/AnimatedText';
import PageTransition from '@/Components/PageTransition';
import ClientLayout from '@/Layouts/ClientLayout';
import { FaArrowRight, FaCode, FaMobileAlt, FaRobot, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <PageTransition>
                {/* Center secara vertical dan horizontal, responsive untuk mobile & desktop */}
                <section className="relative flex items-center justify-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid gap-8 sm:gap-12 lg:gap-14 lg:grid-cols-2 lg:items-center">
                            {/* Text Content */}
                            <div className="order-2 lg:order-1 text-center lg:text-left pt-10">
                                {/* Greeting */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-gray-400 text-base sm:text-lg"
                                >
                                    #Introduction
                                </motion.div>

                                {/* Main Heading */}
                                <AnimatedText
                                    text="Hi, I am Danial"
                                    className="text-4xl sm:text-5xl lg:text-7xl font-bold gradient-text"
                                />

                                {/* Roles */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-base sm:text-lg text-gray-300 mt-4"
                                >
                                    <div className="flex items-center gap-2">
                                        <FaCode className="text-[var(--primary)]" />
                                        <span>Web Developer</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMobileAlt className="text-[var(--primary)]" />
                                        <span>Mobile App Developer</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaRobot className="text-[var(--primary)]" />
                                        <span>AI Specialist</span>
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                    className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4 text-justify"
                                >
                                    I’m passionate about crafting digital experiences that merge design, functionality, and innovation. With a strong foundation in web and mobile app development, I bring ideas to life through clean code, smart systems, and AI-driven solutions. My focus is building products that not only look great but also work seamlessly across platforms.
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
                                >
                                    <Link href="/portfolio">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
                                        >
                                            View My Work
                                            <FaArrowRight />
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Image/Card Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="order-1 lg:order-2 relative w-full flex justify-center"
                            >
                                <div className="relative aspect-square w-full max-w-[280px] sm:max-w-sm lg:max-w-md">

                                    {/* Floating card dengan glow effect */}
                                    <motion.div
                                        animate={{
                                            y: [0, -20, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden animate-glow mt-10"
                                    >
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20" />

                                        {/* Gambar Placeholder */}
                                        <div className="relative z-10 h-full flex items-center justify-center">
                                            <img
                                                src="/placeholder/placeholder-text.png"
                                                alt="Danial Portfolio"
                                                width={400}
                                                height={400}
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-4 right-4 w-20 h-20 border-2 border-[var(--primary)] rounded-full opacity-20" />
                                        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-[var(--accent)] rounded-full opacity-20" />
                                    </motion.div>

                                    {/* Background decorative elements */}
                                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)] rounded-full blur-3xl opacity-20" />
                                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--accent)] rounded-full blur-3xl opacity-20" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </PageTransition>
        </>
    );
}

Home.layout = page => <ClientLayout children={page} />;

export default Home;
