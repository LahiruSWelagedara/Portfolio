import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(100%)';
    }

    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.toggle('dark');
        const isDark = root.classList.contains('dark');
        setIsDarkMode(isDark);
        localStorage.theme = isDark ? 'dark' : 'light';
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);

        const initialDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (initialDark) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#top' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className={`w-full fixed top-0 left-0 py-3.5 px-6 lg:px-16 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-[#11001F]/80 backdrop-blur-xl shadow-lg shadow-purple-500/5 border-b border-gray-200/50 dark:border-white/10'
                : 'bg-transparent'
                }`}>
                {/* Logo */}
                <a href="#top" className="flex items-center">
                    <img src="./assets/logo.png" alt="Lahiru Welagedara Logo" className="w-28 sm:w-32 cursor-pointer dark:hidden" />
                    <img src="./assets/logo_dark.png" alt="Lahiru Welagedara Logo" className="w-28 sm:w-32 cursor-pointer hidden dark:block" />
                </a>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full glass-card shadow-sm border border-gray-200 dark:border-white/10 text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="px-3.5 py-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-300 shadow-sm"
                    >
                        {isDarkMode ? (
                            <span className="text-amber-400 text-lg">☀️</span>
                        ) : (
                            <span className="text-purple-600 text-lg">🌙</span>
                        )}
                    </button>

                    {/* Quick CTA */}
                    <a
                        href="#contact"
                        className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition duration-300"
                    >
                        <span>Let's Talk</span>
                        <span>→</span>
                    </a>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={openMenu}
                        className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/15 bg-white/60 dark:bg-white/5"
                        aria-label="Open Navigation Menu"
                    >
                        <span className="text-gray-800 dark:text-white text-xl">☰</span>
                    </button>
                </div>

                {/* Mobile Drawer */}
                <div
                    ref={sideMenuRef}
                    style={{ transform: 'translateX(100%)' }}
                    className="fixed top-0 right-0 w-72 h-screen bg-white/95 dark:bg-[#11001F]/95 backdrop-blur-2xl p-8 z-50 transition-transform duration-300 shadow-2xl flex flex-col justify-between border-l border-gray-200 dark:border-white/10"
                >
                    <div>
                        <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-white/10 mb-8">
                            <a href="#top" onClick={closeMenu} className="flex items-center">
                                <img src="./assets/logo.png" alt="Lahiru Welagedara Logo" className="w-24 cursor-pointer dark:hidden" />
                                <img src="./assets/logo_dark.png" alt="Lahiru Welagedara Logo" className="w-24 cursor-pointer hidden dark:block" />
                            </a>
                            <button
                                onClick={closeMenu}
                                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white text-lg"
                            >
                                ✕
                            </button>
                        </div>
                        <ul className="flex flex-col gap-4 text-base font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="block py-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                        <a
                            href="./assets/Lahiru_Welagedara_Resume.pdf"
                            download="Lahiru_Welagedara_Resume.pdf"
                            className="w-full block text-center py-2.5 rounded-xl bg-purple-600 text-white font-medium text-sm shadow-md"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}