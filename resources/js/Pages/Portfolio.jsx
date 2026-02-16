import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import PageTransition from '@/Components/PageTransition';
import ClientLayout from '@/Layouts/ClientLayout';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const filters = ['All', 'Web', 'AI'];

    // Senarai projek fokus Web & AI sahaja
    const projects = [
        {
            id: 1,
            title: 'Stock Inventory - MG Global Sdn Bhd',
            category: 'Web',
            description: 'Stock inventory system for warehouse management and real-time reporting.',
            tech: ['Next.js', 'MongoDB', 'Node.js'],
            size: 'large', // untuk bento grid sizing
            disabledDemo: true,
        },
        {
            id: 2,
            title: 'WWC Ticket Event - Warzone',
            category: 'Web',
            description: 'Event ticket platform with QR check-in and participant management.',
            tech: ['Next.js', 'Stripe', 'PostgreSQL'],
            size: 'medium',
            demoUrl: 'https://wwcticket.com/',
        },
        {
            id: 3,
            title: 'Website Company - Go Repair Sdn Bhd',
            category: 'Web',
            description: 'Corporate responsive website for repair services with a simple CMS.',
            tech: ['Next.js', 'Tailwind CSS'],
            size: 'small',
            demoUrl: 'https://www.mgglobalhq.com/',
        },
        {
            id: 4,
            title: 'AI Chatbot - MG Global Sdn Bhd',
            category: 'AI',
            description: 'Chatbot AI for customer support and automation of basic questions.',
            tech: ['Python', 'FastAPI', 'NLP'],
            size: 'medium',
            disabledDemo: true,
        },
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <>
            <Head title="Portfolio" />
            <PageTransition>
                <section className="min-h-screen pb-16 sm:pb-20">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center space-y-6 mb-12"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
                                My Portfolio
                            </h1>
                            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                                A collection of projects showcasing my expertise in web development,
                                mobile applications, and artificial intelligence.
                            </p>
                        </motion.div>

                        {/* Filter Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
                        >
                            {filters.map((filter) => (
                                <motion.button
                                    key={filter}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${activeFilter === filter
                                        ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black'
                                        : 'glass text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {filter}
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Bento Grid */}
                        <motion.div
                            ref={ref}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className={`group`}
                                >
                                    <div className="card h-full flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden">
                                        {/* Background gradient effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10">
                                            {/* Category badge */}
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--primary)]/20 text-[var(--primary)] mb-3">
                                                {project.category}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action buttons */}
                                        <div className="relative z-10 flex flex-col xs:flex-row gap-3">
                                            {project.demoUrl ? (
                                                <motion.a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-black rounded-lg font-medium hover:shadow-lg hover:shadow-[var(--glow)] transition-all"
                                                >
                                                    <FaExternalLinkAlt className="w-4 h-4" />
                                                    Live Demo
                                                </motion.a>
                                            ) : (
                                                <div
                                                    aria-disabled="true"
                                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-gray-400 rounded-lg font-medium cursor-not-allowed"
                                                    title="View dimatikan"
                                                >
                                                    <FaExternalLinkAlt className="w-4 h-4" />
                                                    Live Demo
                                                </div>
                                            )}
                                        </div>

                                        {/* Decorative corner elements */}
                                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[var(--primary)]/20 group-hover:border-[var(--primary)]/50 transition-colors" />
                                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[var(--accent)]/20 group-hover:border-[var(--accent)]/50 transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* No results message */}
                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-gray-400 py-20"
                            >
                                <p className="text-xl">No projects found in this category.</p>
                            </motion.div>
                        )}
                    </div>
                </section>
            </PageTransition>
        </>
    );
};

Portfolio.layout = page => <ClientLayout children={page} />;

export default Portfolio;
