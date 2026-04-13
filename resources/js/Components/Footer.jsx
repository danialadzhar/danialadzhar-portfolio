import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 py-8 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm"
                    >
                        © 2025 Danial. All rights reserved.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm flex items-center gap-1.5"
                    >
                        Made with <span className="text-red-500">♥</span> by Danial
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
