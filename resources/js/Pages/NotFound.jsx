import { motion } from 'framer-motion';
import { Link, Head } from '@inertiajs/react';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
    return (
        <>
            <Head title="Page Not Found" />
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="max-w-2xl mx-auto text-center">
                    {/* 404 Number */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-9xl md:text-[12rem] font-bold gradient-text leading-none">
                            404
                        </h1>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="space-y-4 mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Page Not Found
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
                        </p>
                    </motion.div>

                    {/* Glitch Effect Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="glass rounded-2xl p-8 mb-8 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10" />
                        <p className="relative text-gray-300 text-lg">
                            Don&apos;t worry, even the best explorers get lost sometimes.
                            Let&apos;s get you back on track!
                        </p>
                    </motion.div>

                    {/* Back to Home Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary flex items-center gap-2 mx-auto"
                            >
                                <FaHome />
                                Back to Home
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -100, 0],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--primary)] rounded-full blur-3xl opacity-10"
                        />
                        <motion.div
                            animate={{
                                x: [0, -100, 0],
                                y: [0, 100, 0],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent)] rounded-full blur-3xl opacity-10"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
