import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SECTIONS = ['hero', 'projects', 'about', 'services', 'contact'];

const navItems = [
    { name: 'Home', href: '#hero', section: 'hero' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Contact', href: '#contact', section: 'contact' },
];

const Navbar = () => {
    const [hasMounted, setHasMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted) return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            // Active section detection
            const scrollY = window.scrollY + 80;
            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const el = document.getElementById(SECTIONS[i]);
                if (el && el.offsetTop <= scrollY) {
                    setActiveSection(SECTIONS[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMounted]);

    if (!hasMounted) return null;

    return (
        <motion.header
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 px-6 transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}
        >
            <div className="max-w-6xl mx-auto h-16 flex items-center justify-between w-full">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-2.5 min-h-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <span className="font-bold text-slate-900 text-base">Danial</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.section}
                            href={item.href}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-0 ${
                                activeSection === item.section
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="sm:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="sm:hidden border-t border-slate-200 bg-white overflow-hidden"
                    >
                        <nav className="px-4 py-3 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.section}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                        activeSection === item.section
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
