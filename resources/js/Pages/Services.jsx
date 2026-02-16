import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import PageTransition from '@/Components/PageTransition';
import ClientLayout from '@/Layouts/ClientLayout';
import { useInView } from 'react-intersection-observer';
import {
    FaCode, FaMobileAlt, FaRobot, FaPaintBrush,
    FaServer
} from 'react-icons/fa';

const Services = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const services = [
        {
            icon: FaCode,
            title: 'Web Development',
            description: 'Building responsive, high-performance websites and web applications using modern frameworks and best practices.',
            features: [
                'Custom Web Applications',
                'E-Commerce Solutions',
                'Progressive Web Apps',
                'API Integration'
            ],
        },
        {
            icon: FaMobileAlt,
            title: 'Mobile App Development',
            description: 'Creating cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
            features: [
                'React Native Apps',
                'Flutter Development',
                'UI/UX Design',
                'App Store Deployment'
            ],
        },
        {
            icon: FaRobot,
            title: 'AI Chatbot',
            description: 'Building custom AI chatbots for customer support and task automation.',
            features: [
                'Multilingual Support',
                'Knowledge Base Integration',
                'Website/WhatsApp Embed',
                'Analytics & Reporting'
            ],
        },
        {
            icon: FaPaintBrush,
            title: 'UI/UX Design',
            description: 'Designing intuitive and visually stunning interfaces that enhance user engagement and satisfaction.',
            features: [
                'User Research',
                'Wireframing & Prototyping',
                'Visual Design',
                'Usability Testing'
            ],
        },
        {
            icon: FaServer,
            title: 'Backend Development',
            description: 'Developing robust server-side solutions with scalable architecture and secure data management.',
            features: [
                'RESTful APIs',
                'Database Design',
                'Authentication & Security',
                'Microservices'
            ],
        },
    ];

    return (
        <>
            <Head title="Services" />
            <PageTransition>
                <section className="min-h-screen pb-16 sm:pb-20">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center space-y-6 mb-20"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
                                Our Services
                            </h1>
                            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                                Comprehensive technology solutions tailored to meet your business needs
                                and drive digital transformation.
                            </p>
                        </motion.div>

                        {/* Services Grid */}
                        <motion.div
                            ref={ref}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group"
                                >
                                    <div className="card h-full relative overflow-hidden p-6">
                                        {/* Animated background gradient */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            initial={false}
                                        />

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Icon */}
                                            <div className="mb-6">
                                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--glow)]">
                                                    <service.icon className="w-8 h-8 text-black" />
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed flex-grow">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-2">
                                                {service.features.map((feature, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                                                        className="flex items-center gap-2 text-sm text-gray-400"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                                                        <span>{feature}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Hover effect - Learn More */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileHover={{ opacity: 1, y: 0 }}
                                                className="mt-6 pt-4 border-t border-[var(--border)] opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <button className="text-[var(--primary)] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                                    Learn More
                                                    <span>→</span>
                                                </button>
                                            </motion.div>
                                        </div>

                                        {/* Decorative corner */}
                                        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[var(--primary)]/10 group-hover:border-[var(--primary)]/30 transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-20 text-center"
                        >
                            <div className="glass rounded-2xl p-8 sm:p-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                                    Ready to Start Your Project?
                                </h2>
                                <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                                    Let&apos;s collaborate to bring your ideas to life with cutting-edge technology
                                    and innovative solutions.
                                </p>
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block btn-primary"
                                >
                                    Get In Touch
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </PageTransition>
        </>
    );
};

Services.layout = page => <ClientLayout children={page} />;

export default Services;
