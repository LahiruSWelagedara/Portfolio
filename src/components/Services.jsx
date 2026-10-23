export default function Services() {
    const services = [
        {
            num: '01',
            name: 'Software Engineering & Logic',
            description: 'Designing modular algorithms and robust systems in Java, Python, C++, and Node.js with attention to scalability, data structures, and clean architecture.',
            tags: ['Java', 'Python', 'C++', 'Data Structures', 'OOP', 'Clean Architecture'],
            icon: '⚙️'
        },
        {
            num: '02',
            name: 'Web & Frontend Development',
            description: 'Building fast, accessible, and responsive user interfaces using React.js, Next.js, Tailwind CSS, and modern JavaScript standards.',
            tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'State Management'],
            icon: '🌐'
        },
        {
            num: '03',
            name: 'Mobile Application Development',
            description: 'Developing smooth cross-platform mobile apps for Android and iOS using React Native, REST API sync, and mobile-first user flows.',
            tags: ['React Native', 'Mobile UX', 'Cross-Platform', 'API Sync', 'Mobile App'],
            icon: '📱'
        },
        {
            num: '04',
            name: 'UI / UX Design & Prototyping',
            description: 'Creating user research flows, design systems, clickable prototypes, and modern interfaces in Figma and Adobe XD.',
            tags: ['Figma', 'Adobe XD', 'Wireframing', 'UI/UX Design', 'User Research'],
            icon: '🎨'
        },
        {
            num: '05',
            name: 'Database Architecture & Modeling',
            description: 'Architecting relational schemas with MySQL and document stores with MongoDB, ensuring data integrity, normalization, and performant queries.',
            tags: ['MySQL', 'MongoDB', 'Schema Design', 'Data Queries', 'NoSQL & SQL'],
            icon: '🗄️'
        },
        {
            num: '06',
            name: 'QA Testing & Code Quality',
            description: 'Executing functional testing, defect logging, test scenario validation, peer code reviews, and Agile sprint debugging.',
            tags: ['Defect Logging', 'Unit Testing', 'Code Reviews', 'Agile/Scrum', 'Quality Assurance'],
            icon: '🧪'
        }
    ];

    return (
        <section id="services" className="w-full px-6 lg:px-16 py-20 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
                        Capabilities
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 font-Outfit">
                        Specialized Engineering Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
                        From system architecture to client-side polish, I provide end-to-end technical execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div 
                            key={service.name} 
                            className="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-purple-500/50 hover:-translate-y-1.5 transition duration-300 group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                                        {service.icon}
                                    </div>
                                    <span className="font-mono text-xs font-bold text-gray-400 dark:text-gray-500">
                                        {service.num}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-Outfit group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                                    {service.name}
                                </h3>
                                
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-white/5">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}