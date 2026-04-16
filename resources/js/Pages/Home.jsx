import { useState } from 'react';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import { useInView } from 'react-intersection-observer';
import AnimatedText from '@/Components/AnimatedText';
import PageTransition from '@/Components/PageTransition';
import ClientLayout from '@/Layouts/ClientLayout';
import {
    FaArrowRight, FaCode, FaMobileAlt, FaRobot,
    FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
    FaPhone, FaMapMarkerAlt, FaExternalLinkAlt,
    FaPaintBrush, FaServer, FaReact, FaNodeJs,
    FaPython, FaGitAlt,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si';

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
    {
        id: 5,
        title: 'GBGold',
        category: 'Web',
        image: '/project-ss/gbgold.png',
        description: 'Digital and physical gold trading platform with MLM system, eKYC verification, and multiple payment gateways.',
        tech: ['Laravel', 'Livewire', 'MySQL', 'Redis'],
        demoUrl: 'https://gbgold.my',
        githubUrl: null,
    },
    {
        id: 6,
        title: 'DekreatifAI',
        category: 'Web',
        image: '/project-ss/dekreatifai.png',
        description: 'A marketplace platform for buying and selling AI prompts with integrated payment and digital content management.',
        tech: ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS'],
        demoUrl: 'https://dekreatifai.com',
        githubUrl: null,
    },
    {
        id: 7,
        title: 'KreatifAgent',
        category: 'Web',
        image: '/project-ss/kreatifagent.png',
        description: 'An AI-powered platform for generating images and videos with a simple and intuitive interface.',
        tech: ['Laravel', 'React', 'AI API', 'Tailwind CSS'],
        demoUrl: 'https://kreatifagent.com',
        githubUrl: null,
    },
    {
        id: 8,
        title: 'KUJDT CRM',
        category: 'Web',
        image: '/project-ss/kujdt-crm.png',
        description: 'A CRM system for managing Umrah pilgrims — lead tracking, WhatsApp communications, and reporting.',
        tech: ['Laravel', 'Bootstrap', 'MySQL', 'WhatsApp API'],
        demoUrl: null,
        githubUrl: null,
    },
    {
        id: 1,
        title: 'Stock Inventory - MG Global Sdn Bhd',
        category: 'Web',
        description: 'A comprehensive stock inventory management system for tracking products, suppliers, and stock levels in real-time.',
        tech: ['Next.js', 'MongoDB', 'Node.js'],
        demoUrl: null,
        githubUrl: null,
    },
    {
        id: 2,
        title: 'WWC Ticket Event - Warzone',
        category: 'Web',
        image: '/project-ss/warzone.png',
        description: 'A ticketing platform for gaming events with payment integration and real-time seat availability.',
        tech: ['Next.js', 'Stripe', 'PostgreSQL'],
        demoUrl: 'https://wwcticket.com/',
        githubUrl: null,
    },
    {
        id: 3,
        title: 'Website Company - Go Repair Sdn Bhd',
        category: 'Web',
        description: 'A professional company website with service listings, contact forms and modern design.',
        tech: ['Next.js', 'Tailwind CSS'],
        demoUrl: 'https://www.mgglobalhq.com/',
        githubUrl: null,
    },
    {
        id: 4,
        title: 'AI Chatbot - MG Global Sdn Bhd',
        category: 'AI',
        description: 'An intelligent chatbot powered by NLP for automated customer support and query handling.',
        tech: ['Python', 'FastAPI', 'NLP'],
        demoUrl: null,
        githubUrl: null,
    },
];

const skills = [
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'Next.js', icon: SiNextdotjs, level: 85 },
    { name: 'TypeScript', icon: SiTypescript, level: 80 },
    { name: 'Node.js', icon: FaNodeJs, level: 85 },
    { name: 'Python', icon: FaPython, level: 75 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95 },
    { name: 'MongoDB', icon: SiMongodb, level: 80 },
    { name: 'Git', icon: FaGitAlt, level: 90 },
];

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

const contactInfo = [
    { icon: FaEnvelope, title: 'Email', value: 'danial0597@gmail.com', link: 'mailto:danial0597@gmail.com' },
    { icon: FaPhone, title: 'Phone', value: '+60 11-1272 9197', link: 'tel:+601112729197' },
    { icon: FaMapMarkerAlt, title: 'Location', value: 'Kluang, Johor, Malaysia', link: null },
];

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/danial0597' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:danial0597@gmail.com' },
];

const INITIAL_COUNT = 6;

// ─── Sub-components ───────────────────────────────────────────────────────────

const Checkmark = () => (
    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.05 });
    const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.05 });
    const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.05 });
    const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const filtered = projects.filter(p => activeFilter === 'All' || p.category === activeFilter);
    const displayed = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
    const hasMore = !showAll && filtered.length > INITIAL_COUNT;

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setShowAll(false);
    };

    return (
        <>
            <Head title="Home" />
            <PageTransition>

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <section id="hero" className="px-6 min-h-[calc(80vh-4rem)] flex items-center">
                    <div className="max-w-6xl mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                            {/* Left: Text */}
                            <div className="order-2 lg:order-1 text-center lg:text-left">
                                {/* Available badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="mb-5"
                                >
                                    <span className="badge badge-green inline-flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        Available for work
                                    </span>
                                </motion.div>

                                {/* Heading */}
                                <AnimatedText
                                    text="Hi, I am Danial"
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4"
                                />

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6"
                                >
                                    I'm passionate about crafting digital experiences that merge design, functionality, and innovation — from web and mobile apps to AI-driven solutions.
                                </motion.p>

                                {/* Role badges */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
                                >
                                    <span className="badge badge-blue inline-flex items-center gap-1.5">
                                        <FaCode className="w-3 h-3" /> Web Developer
                                    </span>
                                    <span className="badge badge-blue inline-flex items-center gap-1.5">
                                        <FaMobileAlt className="w-3 h-3" /> Mobile App Developer
                                    </span>
                                    <span className="badge badge-blue inline-flex items-center gap-1.5">
                                        <FaRobot className="w-3 h-3" /> AI Specialist
                                    </span>
                                </motion.div>

                                {/* CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                    className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                                >
                                    <a href="#projects" className="btn-primary justify-center">
                                        View My Work <FaArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                    <a href="#contact" className="btn-outline justify-center">
                                        Contact Me
                                    </a>
                                </motion.div>
                            </div>

                            {/* Right: Browser mockup card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="order-1 lg:order-2 flex justify-center"
                            >
                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="w-full max-w-sm"
                                >
                                    <div className="card shadow-2xl rounded-2xl overflow-hidden p-0 mt-8">
                                        {/* Browser bar */}
                                        <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                            <div className="ml-3 flex-1 bg-white rounded px-3 py-1 text-xs text-slate-400 border border-slate-200">
                                                danial.dev
                                            </div>
                                        </div>
                                        {/* Mockup content */}
                                        <div className="p-6 space-y-4 bg-white">
                                            <div className="h-3 bg-slate-100 rounded-full w-3/4" />
                                            <div className="h-3 bg-slate-100 rounded-full w-1/2" />
                                            <div className="grid grid-cols-2 gap-3 pt-2">
                                                <div className="h-20 bg-blue-50 rounded-xl flex flex-col items-center justify-center gap-1">
                                                    <span className="text-blue-600 font-bold text-2xl">4+</span>
                                                    <span className="text-blue-400 text-xs">Projects</span>
                                                </div>
                                                <div className="h-20 bg-slate-50 rounded-xl flex flex-col items-center justify-center gap-1 border border-slate-100">
                                                    <span className="text-slate-700 font-bold text-2xl">2yr</span>
                                                    <span className="text-slate-400 text-xs">Experience</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 pt-1 flex-wrap">
                                                <span className="badge badge-blue text-xs">React</span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Next.js</span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Python</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* ── PROJECTS ─────────────────────────────────────────────── */}
                <section id="projects" className="py-20 px-6 bg-slate-50">
                    <div className="max-w-6xl mx-auto">

                        <motion.div
                            ref={projectsRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Work</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">My Projects</h2>
                            <p className="text-slate-500 max-w-xl mx-auto">
                                A collection of projects I've built — from web apps to AI solutions.
                            </p>
                        </motion.div>

                        {/* Filter buttons */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-white border border-slate-200 rounded-full p-1 flex gap-1 shadow-sm">
                                {['All', 'Web', 'AI'].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => handleFilterChange(filter)}
                                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                            activeFilter === filter
                                                ? 'bg-slate-900 text-white shadow-sm'
                                                : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Projects grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayed.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.08, duration: 0.5 }}
                                    className="card flex flex-col p-6 group"
                                >
                                    {/* Preview block */}
                                    <div className="h-36 rounded-xl bg-slate-50 border border-slate-100 mb-5 overflow-hidden flex items-center justify-center">
                                        {project.image ? (
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-slate-300 text-sm">Preview</span>
                                        )}
                                    </div>

                                    <span className="badge badge-blue mb-2 self-start">{project.category}</span>

                                    <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-4 grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-2.5 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 mt-auto">
                                        {project.demoUrl ? (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary text-sm py-2 px-4"
                                            >
                                                <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
                                            </a>
                                        ) : (
                                            <span className="px-4 py-2 text-sm bg-slate-100 text-slate-400 rounded-lg cursor-not-allowed">
                                                Private
                                            </span>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline text-sm py-2 px-4"
                                            >
                                                <FaGithub className="w-3.5 h-3.5" /> GitHub
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* See More button */}
                        {hasMore && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={projectsInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="flex justify-center mt-10"
                            >
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="btn-outline"
                                >
                                    See More Projects <FaArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </motion.div>
                        )}

                    </div>
                </section>

                {/* ── ABOUT ────────────────────────────────────────────────── */}
                <section id="about" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto space-y-12">

                        <motion.div
                            ref={aboutRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">About</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">About Me</h2>
                            <p className="text-slate-500 max-w-xl mx-auto">
                                Passionate developer with expertise in creating innovative solutions that combine modern technology with exceptional user experiences.
                            </p>
                        </motion.div>

                        {/* 2-column: Who I Am + Tech Stack */}
                        <div className="grid lg:grid-cols-2 gap-8 items-start">

                            {/* Left: Who I Am */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="p-8 h-full flex flex-col justify-center"
                            >
                                <h3 className="text-6xl font-bold text-slate-900 mb-4">Who I Am</h3>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    I'm a passionate developer who loves turning ideas into powerful digital experiences. My focus lies in building fast, scalable, and visually engaging applications — whether for the web or mobile. With a strong foundation in both front-end and back-end development, I bridge creativity and technology to deliver seamless user experiences.
                                </p>
                            </motion.div>

                            {/* Right: Tech Stack */}
                            <div ref={skillsRef}>
                                {/* <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl font-bold text-slate-900 mb-5"
                                >
                                    Tech Stack
                                </motion.h3> */}
                                <div className="grid grid-cols-3 gap-3">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.06, duration: 0.4 }}
                                        className="card p-4 text-center group hover:border-blue-200"
                                    >
                                        <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 flex items-center justify-center">
                                            <skill.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h4 className="font-semibold text-slate-900 text-xs mb-2">{skill.name}</h4>
                                        <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={skillsInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ delay: index * 0.06 + 0.3, duration: 0.8 }}
                                                className="h-full bg-blue-600 rounded-full"
                                            />
                                        </div>
                                        <span className="text-xs text-slate-400 mt-1 block">{skill.level}%</span>
                                    </motion.div>
                                ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ── SERVICES ─────────────────────────────────────────────── */}
                <section id="services" className="py-20 px-6 bg-slate-50">
                    <div className="max-w-6xl mx-auto">

                        <motion.div
                            ref={servicesRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Services</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">What I Offer</h2>
                            <p className="text-slate-500 max-w-xl mx-auto">
                                Comprehensive technology solutions tailored to meet your business needs.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.08, duration: 0.5 }}
                                    className="card flex flex-col p-6 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                        <service.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-5 grow">
                                        {service.description}
                                    </p>
                                    <div className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                                                <Checkmark />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-16 rounded-2xl bg-linear-to-r from-blue-600 to-blue-500 p-10 sm:p-14 text-center"
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                                Let&apos;s collaborate to bring your ideas to life with modern technology and innovative solutions.
                            </p>
                            <a href="#contact" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                                Get In Touch
                            </a>
                        </motion.div>

                    </div>
                </section>

                {/* ── CONTACT ──────────────────────────────────────────────── */}
                <section id="contact" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">

                        <motion.div
                            ref={contactRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={contactInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Contact</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Get In Touch</h2>
                            <p className="text-slate-500 max-w-xl mx-auto">
                                Have a project in mind or want to collaborate? I'd love to hear from you.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-8">

                            {/* Left: contact info */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="space-y-4"
                            >
                                {/* Availability */}
                                <div className="card p-5 flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-60" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">Available for Projects</p>
                                        <p className="text-xs text-slate-500">Currently accepting new opportunities</p>
                                    </div>
                                </div>

                                {/* Contact info list */}
                                <div className="card p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-5">Contact Information</h3>
                                    <div className="space-y-3">
                                        {contactInfo.map((info, index) => {
                                            const Wrapper = info.link ? 'a' : 'div';
                                            const props = info.link ? { href: info.link } : {};
                                            return (
                                                <Wrapper
                                                    key={index}
                                                    {...props}
                                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group cursor-default"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                                        <info.icon className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-slate-400 mb-0.5">{info.title}</p>
                                                        <p className="text-slate-900 font-medium text-sm">{info.value}</p>
                                                    </div>
                                                </Wrapper>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: social links */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="card p-6"
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-5">Connect With Me</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                                        >
                                            <social.icon className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                                            <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{social.name}</span>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <p className="text-slate-500 text-sm mb-3">Prefer email? Reach me directly.</p>
                                    <a href="mailto:danial0597@gmail.com" className="btn-primary w-full justify-center">
                                        Send an Email
                                    </a>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

            </PageTransition>
        </>
    );
};

Home.layout = page => <ClientLayout children={page} />;

export default Home;
