import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaCog, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const { url } = usePage();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Nav items dengan icons
    const navItems = [
        { name: 'Home', path: '/', icon: FaHome },
        { name: 'About', path: '/about', icon: FaUser },
        { name: 'Portfolio', path: '/portfolio', icon: FaBriefcase },
        { name: 'Our Services', path: '/services', icon: FaCog },
        { name: 'Contact Us', path: '/contact', icon: FaEnvelope },
    ];

    if (!hasMounted) {
        return null; // Prevent hydration mismatch
    }

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl px-4"
        >
            <div className="glass rounded-full px-3 sm:px-6 md:px-8 py-2 sm:py-4 shadow-2xl border border-white/10">
                <div className="flex items-center justify-around gap-1 sm:gap-2">
                    {navItems.map((item) => {
                        const isActive = url === item.path || (url.startsWith(item.path) && item.path !== '/');
                        const Icon = item.icon;

                        return (
                            <Link key={item.path} href={item.path} className="min-h-0 min-w-0 inline-flex">
                                <motion.div
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative flex flex-col items-center justify-center sm:gap-1 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full transition-all duration-300 ${isActive ? '' : 'hover:bg-white/5'
                                        }`}
                                >
                                    {/* Icon - centered horizontal and vertical */}
                                    <Icon
                                        className={`text-xl sm:text-lg md:text-xl transition-colors duration-300 ${isActive
                                            ? 'text-[var(--primary)]'
                                            : 'text-gray-400'
                                            }`}
                                    />

                                    {/* Text - hide di mobile kecil, show di tablet+ */}
                                    <span
                                        className={`hidden sm:block text-[10px] md:text-xs font-medium whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text' : 'text-gray-400'
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
