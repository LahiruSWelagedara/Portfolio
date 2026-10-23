import { useState } from 'react';

export default function Work() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const projects = [
        {
            title: 'Internship Management System',
            category: 'Full-Stack',
            year: '2026',
            bgImage: './assets/work-3.png',
            summary: 'Enterprise platform streamlining project assignments, task tracking, leave approvals, and intern evaluations.',
            highlights: ['Role-based JWT Auth', 'Kanban Board Workflow', 'Supervisor Feedback Loop', 'Analytics Dashboards'],
            technologies: ['Spring Boot', 'React.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Recharts'],
            github: 'https://github.com/LahiruSWelagedara/internship-management-system',
            featured: true
        },
        {
            title: 'CleanPro Service Management',
            category: 'Full-Stack',
            year: '2026',
            bgImage: './assets/work-4.png',
            summary: 'Full-stack MERN application for premium cleaning services with real-time booking and centralized administrative controls.',
            highlights: ['Customer Booking Engine', 'Service Catalog Management', 'Admin Dashboard', 'Customer Reviews'],
            technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Vite'],
            github: 'https://github.com/LahiruSWelagedara/CleanPro-Service',
            featured: true
        },
        {
<<<<<<< HEAD
            title: 'Smart Job Finder',
            category: 'Mobile',
            year: '2025',
            bgImage: './assets/work-2.png',
            summary: 'Cross-platform mobile application providing an end-to-end job seeker workflow with search, filters, and resume upload.',
            highlights: ['Search & Pagination', 'CV Upload Mechanism', 'Relational MySQL Schema', 'Favorites & Saved Jobs'],
            technologies: ['React Native', 'Node.js', 'MySQL', 'REST APIs'],
            github: 'https://github.com/LahiruSWelagedara/smart-job-finder-mobile-app',
            featured: false
=======
            name: 'Trip Explorer',
            icon: './assets/work-3.png',
            description: 'Website',
            link: 'https://github.com/LahiruSWelagedara/TripExplorer',
>>>>>>> db3b5466770cf940ffca0c12bb0a4422afb8327c
        },
        {
            title: 'Movie Finder',
            category: 'Web App',
            year: '2025',
            bgImage: './assets/work-1.png',
            summary: 'Dynamic movie discovery web platform connecting to TMDB API to search across 500,000+ movie records with instant posters and ratings.',
            highlights: ['500,000+ TMDB Records', 'Real-Time Search Querying', 'Responsive Movie Posters', 'Detailed Overviews'],
            technologies: ['React.js', 'JavaScript', 'TMDB API', 'CSS3'],
            github: 'https://github.com/LahiruSWelagedara/movie-finder',
            featured: false
        },
        {
            title: 'Developer Portfolio',
            category: 'Web App',
            year: '2026',
            bgImage: './assets/work-3.png',
            summary: 'Modern, high-performance developer showcase website with dark mode, smooth scrolling, and responsive layouts.',
            highlights: ['Interactive Theme Switching', 'Smooth Smooth Scrolling', 'Modern UI/UX Systems', 'Vite Bundler'],
            technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Netlify'],
            github: 'https://github.com/LahiruSWelagedara/Portfolio',
            featured: false
        }
    ];

    const categories = ['All', 'Full-Stack', 'Mobile', 'Web App'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="work" className="w-full px-6 lg:px-16 py-20 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-xs uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
                        Portfolio Showcase
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 font-Outfit">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
                        A selection of highlights from <span className="font-semibold text-purple-600 dark:text-purple-400">10+ projects</span> — spanning enterprise web platforms, RESTful APIs, and cross-platform mobile apps.
                    </p>

                    {/* Projects count badge */}
                    <div className="flex items-center justify-center gap-6 mt-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 font-Outfit">10+</span>
                            <div className="text-left">
                                <span className="text-[11px] font-semibold text-gray-800 dark:text-white block leading-tight">Total Projects</span>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">Built & Shipped</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-Outfit">5</span>
                            <div className="text-left">
                                <span className="text-[11px] font-semibold text-gray-800 dark:text-white block leading-tight">Featured Here</span>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">Highlighted Builds</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                            <span className="text-2xl font-bold text-pink-500 dark:text-pink-400 font-Outfit">3</span>
                            <div className="text-left">
                                <span className="text-[11px] font-semibold text-gray-800 dark:text-white block leading-tight">Tech Domains</span>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">Web · Mobile · UI/UX</span>
                            </div>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition duration-300 ${selectedCategory === cat
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25'
                                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-purple-500/50 hover:-translate-y-2 transition duration-300 group shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
                        >
                            {/* Card Image Banner */}
                            <div
                                className="h-48 w-full bg-cover bg-center relative p-4 flex flex-col justify-between group-hover:scale-[1.02] transition duration-500"
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20"></div>

                                <div className="relative z-10 flex items-center justify-between">
                                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/20">
                                        {project.category}
                                    </span>
                                    <span className="text-xs font-mono text-purple-300 font-bold">
                                        {project.year}
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-white font-Outfit drop-shadow-sm group-hover:text-purple-300 transition">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        {project.summary}
                                    </p>

                                    {/* Architectural Highlights */}
                                    <div className="mb-4">
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 block mb-1.5">
                                            Key Features
                                        </span>
                                        <div className="grid grid-cols-2 gap-1.5 text-xs text-gray-700 dark:text-gray-300">
                                            {project.highlights.map((h, i) => (
                                                <div key={i} className="flex items-center gap-1.5">
                                                    <span className="text-purple-500 text-xs font-bold">✓</span>
                                                    <span className="text-[11px] truncate">{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-white/5 mb-5">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Link */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/5 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 hover:border-transparent flex items-center justify-center gap-2 text-xs font-semibold text-gray-800 dark:text-white transition duration-300 shadow-sm"
                                    >
                                        <span>View Code on GitHub</span>
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 space-y-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-700 dark:text-gray-300">5 featured projects</span> — view all <span className="font-semibold text-purple-600 dark:text-purple-400">10+ repositories</span> on GitHub
                    </p>
                    <a
                        href="https://github.com/LahiruSWelagedara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-purple-600 hover:text-white hover:border-transparent text-gray-900 dark:text-white text-sm font-semibold transition duration-300 shadow-sm hover:scale-105 hover:shadow-purple-500/25 hover:shadow-lg"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>View All 10+ Projects on GitHub</span>
                        <span>↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
