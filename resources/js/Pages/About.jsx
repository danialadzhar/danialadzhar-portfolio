import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import PageTransition from '@/Components/PageTransition';
import ClientLayout from '@/Layouts/ClientLayout';
import { useInView } from 'react-intersection-observer';
import {
    FaReact, FaNodeJs, FaPython, FaGitAlt,
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript,
} from 'react-icons/si';

const About = () => {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

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

    return (
        <>
            <Head title="About Me" />
            <PageTransition>
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto space-y-16">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center space-y-4"
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
                                About Me
                            </h1>
                            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
                                Passionate developer with expertise in creating innovative solutions
                                that combine modern technology with exceptional user experiences.
                            </p>
                        </motion.div>

                        {/* Who I Am */}
                        <motion.div
                            ref={ref1}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView1 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="card p-8 sm:p-10">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Who I Am</h2>
                                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                    I'm a passionate developer who loves turning ideas into powerful digital experiences. My focus lies in building fast, scalable, and visually engaging applications — whether for the web or mobile. With a strong foundation in both front-end and back-end development, I bridge creativity and technology to deliver seamless user experiences.
                                </p>
                            </div>
                        </motion.div>

                        {/* Technical Skills */}
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView2 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView2 ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.06, duration: 0.4 }}
                                        className="card p-5 text-center group hover:border-blue-200"
                                    >
                                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 flex items-center justify-center">
                                            <skill.icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h3 className="font-semibold text-slate-900 text-sm mb-3">{skill.name}</h3>
                                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={inView2 ? { width: `${skill.level}%` } : {}}
                                                transition={{ delay: index * 0.06 + 0.3, duration: 0.8 }}
                                                className="h-full bg-blue-600 rounded-full"
                                            />
                                        </div>
                                        <span className="text-xs text-slate-400 mt-1.5 block">{skill.level}%</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </section>
            </PageTransition>
        </>
    );
};

About.layout = page => <ClientLayout children={page} />;

export default About;
