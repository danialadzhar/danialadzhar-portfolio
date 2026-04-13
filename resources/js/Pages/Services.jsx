import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import PageTransition from '@/Components/PageTransition';
import ClientLayout from '@/Layouts/ClientLayout';
import { useInView } from 'react-intersection-observer';
import {
    FaCode, FaMobileAlt, FaRobot, FaPaintBrush, FaServer,
} from 'react-icons/fa';

const Checkmark = () => (
    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const Services = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const services = [
        {
            icon: FaCode,
            title: 'Web Development',
            description: 'Building responsive, high-performance websites and web applications using modern frameworks and best practices.',
            features: ['Custom Web Applications', 'E-Commerce Solutions', 'Progressive Web Apps', 'API Integration'],
        },
        {
            icon: FaMobileAlt,
            title: 'Mobile App Development',
            description: 'Creating cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
            features: ['React Native Apps', 'Flutter Development', 'UI/UX Design', 'App Store Deployment'],
        },
        {
            icon: FaRobot,
            title: 'AI Chatbot',
            description: 'Building custom AI chatbots for customer support and task automation.',
            features: ['Multilingual Support', 'Knowledge Base Integration', 'Website/WhatsApp Embed', 'Analytics & Reporting'],
        },
        {
            icon: FaPaintBrush,
            title: 'UI/UX Design',
            description: 'Designing intuitive and visually stunning interfaces that enhance user engagement and satisfaction.',
            features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
        },
        {
            icon: FaServer,
            title: 'Backend Development',
            description: 'Developing robust server-side solutions with scalable architecture and secure data management.',
            features: ['RESTful APIs', 'Database Design', 'Authentication & Security', 'Microservices'],
        },
    ];

    return (
        <>
            <Head title="Services" />
            <PageTransition>
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center space-y-4 mb-16"
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
                                Our Services
                            </h1>
                            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
                                Comprehensive technology solutions tailored to meet your business needs
                                and drive digital transformation.
                            </p>
                        </motion.div>

                        {/* Services Grid */}
                        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.08, duration: 0.5 }}
                                    className="card h-full flex flex-col p-6 group"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                        <service.icon className="w-6 h-6 text-blue-600" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-500 text-sm leading-relaxed mb-5 grow">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                                                <Checkmark />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Learn More row */}
                                    <div className="mt-5 pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-blue-600 font-semibold text-sm flex items-center gap-1.5">
                                            Learn More <span>→</span>
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-20 rounded-2xl bg-linear-to-r from-blue-600 to-blue-500 p-10 sm:p-14 text-center"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                                Let&apos;s collaborate to bring your ideas to life with modern technology
                                and innovative solutions.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                Get In Touch
                            </a>
                        </motion.div>

                    </div>
                </section>
            </PageTransition>
        </>
    );
};

Services.layout = page => <ClientLayout children={page} />;

export default Services;
