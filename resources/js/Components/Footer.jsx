import { motion } from 'framer-motion';

const Footer = () => {

    return (
        <footer className="relative mt-20 py-8 border-t border-[var(--border)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm"
                    >
                        © 2025 Danial. All rights reserved.
                    </motion.div>

                    {/* Made with love */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm flex items-center gap-2"
                    >
                        Made with <span className="text-[var(--primary)] animate-pulse">♥</span> by Danial
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
