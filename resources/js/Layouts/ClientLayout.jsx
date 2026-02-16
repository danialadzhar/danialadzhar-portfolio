import { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

// Lazy load heavy components
const ScrollProgress = lazy(() => import('@/Components/ScrollProgress'));
const ParticleBackground = lazy(() => import('@/Components/ParticleBackground'));
const BackToTop = lazy(() => import('@/Components/BackToTop'));

const ClientLayout = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <Suspense fallback={null}>
                    <ScrollProgress />
                    <ParticleBackground />
                    <BackToTop />
                </Suspense>
            )}
            <Navbar />
            <main className="min-h-screen py-24 px-12 sm:px-6 sm:py-12">
                {children}
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default ClientLayout;
