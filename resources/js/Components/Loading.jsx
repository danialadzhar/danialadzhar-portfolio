import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-white">
            <div className="text-center space-y-6">
                <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="w-24 h-24 mx-auto rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200"
                >
                    <span className="text-4xl font-bold text-white">D</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-blue-600 font-bold text-2xl"
                >
                    Loading...
                </motion.div>

                <div className="flex justify-center gap-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 0 }}
                            animate={{ y: [-10, 0, -10] }}
                            transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
                            className="w-3 h-3 rounded-full bg-blue-600"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;
