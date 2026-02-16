import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import PageTransition from '@/Components/PageTransition';
import ClientLayout from '@/Layouts/ClientLayout';
import { useState } from 'react';
import {
    FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
    FaPhone, FaMapMarkerAlt, FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        alert('Message sent successfully! (Demo only)');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'danial0597@gmail.com',
            link: 'mailto:danial0597@gmail.com'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            value: '+60 11-1272 9197',
            link: 'tel:+601112729197'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'Kluang, Johor, Malaysia',
            link: '#'
        },
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            name: 'GitHub',
            url: 'https://github.com/danial0597',
            color: '#333'
        },
        {
            icon: FaLinkedin,
            name: 'LinkedIn',
            url: 'https://linkedin.com',
            color: '#0077b5'
        },
        {
            icon: FaTwitter,
            name: 'Twitter',
            url: 'https://twitter.com',
            color: '#1da1f2'
        },
        {
            icon: FaEnvelope,
            name: 'Email',
            url: 'mailto:danial0597@gmail.com',
            color: '#ea4335'
        },
    ];

    return (
        <>
            <Head title="Contact" />
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
                                Get In Touch
                            </h1>
                            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                                Have a project in mind or want to collaborate?
                                Feel free to reach out and let&apos;s create something amazing together.
                            </p>
                        </motion.div>

                        <div className="grid gap-10 xl:gap-12 grid-cols-1 justify-items-center">
                            {/* Contact Form (hidden) */}
                            {false && (
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="glass rounded-2xl p-6 sm:p-8">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                                            Send Me a Message
                                        </h2>
                                    </div>
                                </motion.div>
                            )}

                            {/* Contact Info & Social */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8 w-full max-w-3xl"
                            >
                                {/* Availability Status (moved to top) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="glass rounded-2xl p-6"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-4 h-4 bg-green-500 rounded-full" />
                                            <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Available for Projects</p>
                                            <p className="text-sm text-gray-400">Currently accepting new opportunities</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Contact Information */}
                                <div className="glass rounded-2xl p-6 sm:p-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                                        Contact Information
                                    </h2>
                                    <div className="space-y-4">
                                        {contactInfo.map((info, index) => (
                                            <motion.a
                                                key={index}
                                                href={info.link}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ x: 10 }}
                                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                                            >
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <info.icon className="w-5 h-5 text-black" />
                                                </div>
                                                <div>
                                                    <h3 className="text-gray-400 text-sm font-medium mb-1">
                                                        {info.title}
                                                    </h3>
                                                    <p className="text-white font-semibold break-words">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Links */
                                }
                                <div className="glass rounded-2xl p-6 sm:p-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                                        Connect With Me
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-[var(--border)] hover:border-[var(--primary)] transition-all group text-center"
                                            >
                                                <social.icon className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-[var(--primary)] transition-colors" />
                                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                                    {social.name}
                                                </span>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>


                            </motion.div>
                        </div>
                    </div>
                </section>
            </PageTransition>
        </>
    );
};

Contact.layout = page => <ClientLayout children={page} />;

export default Contact;
