import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import PageTransition from '@/Components/PageTransition';
import ClientLayout from '@/Layouts/ClientLayout';
import { useInView } from 'react-intersection-observer';
import {
    FaReact, FaNodeJs, FaPython,
    FaGitAlt, FaFigma, FaDatabase
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiMongodb,
    SiTypescript
} from 'react-icons/si';

const About = () => {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

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

    const timeline = [
        {
            year: '2024 - Present',
            title: 'Senior Full Stack Developer',
            company: 'Tech Company',
            description: 'Leading development of modern web applications using cutting-edge technologies.',
        },
        {
            year: '2022 - 2024',
            title: 'AI Trainer & Consultant',
            company: 'AI Solutions Inc.',
            description: 'Training AI models and consulting clients on ML implementation strategies.',
        },
        {
            year: '2020 - 2022',
            title: 'Mobile App Developer',
            company: 'Mobile Innovations',
            description: 'Developed cross-platform mobile applications using React Native and Flutter.',
        },
        {
            year: '2018 - 2020',
            title: 'Junior Web Developer',
            company: 'Digital Agency',
            description: 'Built responsive websites and learned modern web development practices.',
        },
    ];

    return (
        <>
            <Head title="About Me" />
            <PageTransition>
                <section className="min-h-screen pb-16 sm:pb-20">
                    <div className="max-w-7xl mx-auto space-y-20">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center space-y-6"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
                                About Me
                            </h1>
                            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                                Passionate developer with expertise in creating innovative solutions
                                that combine cutting-edge technology with exceptional user experiences.
                            </p>
                        </motion.div>

                        {/* Introduction */}
                        <motion.div
                            ref={ref1}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView1 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="space-y-0"
                        >
                            <div className="glass rounded-2xl p-6 sm:p-8 md:p-12 space-y-6">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                    Who I Am
                                </h2>
                                <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                                    <p>
                                        I’m a passionate developer who loves turning ideas into powerful digital experiences. My focus lies in building fast, scalable, and visually engaging applications whether for the web or mobile. With a strong foundation in both front-end and back-end development, I bridge creativity and technology to deliver seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Skills Section */}
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView2 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="space-y-12"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: index * 0.05, duration: 0.4 }}
                                        className="card group hover:scale-105"
                                    >
                                        <div className="text-center space-y-3">
                                            <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-[var(--primary)] group-hover:scale-110 transition-transform" />
                                            <h3 className="font-semibold text-white text-sm sm:text-base">{skill.name}</h3>

                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={inView2 ? { width: `${skill.level}%` } : {}}
                                                    transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                                                    className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                                                />
                                            </div>
                                            <span className="text-xs text-gray-400">{skill.level}%</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Seksyen Experience Timeline dinyahaktif sementara */}
                        {false && (
                            <motion.div
                                ref={ref3}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                                    Experience Timeline
                                </h2>
                                <div className="relative pt-10 md:pt-0">
                                    {/* Timeline line */}
                                    <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]" />

                                    <div className="space-y-12">
                                        {timeline.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                                    } flex-row`}
                                            >
                                                {/* Timeline dot */}
                                                <div className="absolute left-6 sm:left-8 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -ml-2 shadow-lg shadow-[var(--glow)] z-10" />

                                                {/* Content card */}
                                                <div className={`w-full md:w-5/12 ml-14 sm:ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                                                    }`}>
                                                    <div className="glass rounded-xl p-6 space-y-3 hover:scale-105 transition-transform">
                                                        <span className="text-[var(--primary)] font-semibold text-xs sm:text-sm">
                                                            {item.year}
                                                        </span>
                                                        <h3 className="text-lg sm:text-xl font-bold text-white">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-gray-400 font-medium">
                                                            {item.company}
                                                        </p>
                                                        <p className="text-gray-500 text-sm sm:text-base">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </section>
            </PageTransition>
        </>
    );
};

About.layout = page => <ClientLayout children={page} />;

export default About;
