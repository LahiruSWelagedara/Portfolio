export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full border-t border-gray-200 dark:border-white/10 pt-16 pb-12 px-6 lg:px-16 mt-20 relative bg-white/40 dark:bg-black/20 backdrop-blur-md">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-gray-200/80 dark:border-white/10">
                {/* Brand */}
                <div className="text-center md:text-left">
                    <a href="#top" className="inline-block mb-2">
                        <img src="./assets/logo.png" alt="Lahiru Welagedara Logo" className="w-32 mx-auto md:mx-0 dark:hidden" />
                        <img src="./assets/logo_dark.png" alt="Lahiru Welagedara Logo" className="w-32 mx-auto md:mx-0 hidden dark:block" />
                    </a>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Software Engineer Intern · Web & Mobile Developer · UI/UX Designer
                    </p>
                </div>

                {/* Social Channels */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/LahiruSWelagedara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-4 py-2.5 rounded-xl glass-card text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-purple-500/50 transition duration-300 flex items-center gap-2.5 shadow-sm"
                        title="GitHub Profile"
                    >
                        <svg className="w-4 h-4 fill-current text-gray-800 dark:text-gray-200 group-hover:scale-110 transition duration-200" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub</span>
                        <span className="text-[10px] text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-200">↗</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lahiru-welagedara-6a719643b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-4 py-2.5 rounded-xl glass-card text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] dark:hover:text-[#388be8] hover:border-[#0A66C2]/40 transition duration-300 flex items-center gap-2.5 shadow-sm"
                        title="LinkedIn Profile"
                    >
                        <svg className="w-4 h-4 fill-[#0A66C2] group-hover:scale-110 transition duration-200" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                        </svg>
                        <span>LinkedIn</span>
                        <span className="text-[10px] text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-200">↗</span>
                    </a>

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to Top"
                        className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50 transition duration-300 text-sm font-bold"
                        title="Back to Top"
                    >
                        ↑
                    </button>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-4">
                <p>© {new Date().getFullYear()} Lahiru Welagedara. All rights reserved.</p>
                <p className="flex items-center gap-1">
                    <span>Designed & Developed with</span>
                    <span className="text-purple-500">React & Tailwind CSS</span>
                </p>
            </div>
        </footer>
    );
}