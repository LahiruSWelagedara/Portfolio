export default function About() {
    const tools = [
        { name: 'VS Code', icon: './assets/vscode.png', role: 'Development' },
        { name: 'Git & GitHub', icon: './assets/git.png', role: 'Version Control' },
        { name: 'Figma', icon: './assets/figma.png', role: 'UI/UX Design' },
        { name: 'MongoDB', icon: './assets/mongodb.png', role: 'Database' },
        { name: 'Firebase', icon: './assets/firebase.png', role: 'Cloud & Auth' },
    ];

    const highlights = [
        {
            title: 'Software Engineer Intern',
            tag: 'Gamage Recruiters (6 Months)',
            desc: 'Hands-on production engineering: built React modules, developed Spring Boot & Node APIs, participated in peer code reviews, testing, and defect reduction.',
            icon: '💼',
        },
        {
            title: 'Academic Foundations',
            tag: 'University of Jaffna',
            desc: 'Final year undergraduate in BSc (Hons) in ICT, building rigorous expertise in algorithms, computer networks, and system architecture.',
            icon: '🎓',
        },
        {
            title: 'Cross-Functional Breadth',
            tag: 'End-to-End Delivery',
            desc: 'Capable of taking a product from Figma wireframe and database schema to scalable frontend, backend APIs, and rigorous QA testing.',
            icon: '⚡',
        },
    ];

    const rolesSupported = [
        { title: 'Software Engineer', desc: 'Core logic, algorithms, Java, Python, C++, and microservice architectures' },
        { title: 'Web / Frontend Developer', desc: 'Responsive React.js, Next.js, modern CSS, state management & clean UI' },
        { title: 'Mobile App Developer', desc: 'Cross-platform iOS & Android mobile applications with React Native' },
        { title: 'UI / UX Designer', desc: 'User experience research, wireframing, component design in Figma & Adobe XD' },
        { title: 'QA / Software Tester', desc: 'Defect logging, unit testing, test execution, and Agile bug triage' },
        { title: 'Database & Systems Associate', desc: 'Relational MySQL and NoSQL MongoDB modeling, queries, and optimization' },
    ];

    const skillGroups = [
        {
            category: 'Languages',
            skills: ['Python', 'JavaScript (ES6+)', 'Java', 'C / C++']
        },
        {
            category: 'Frontend',
            skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5 & CSS3']
        },
        {
            category: 'Backend & APIs',
            skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs']
        },
        {
            category: 'Mobile & Databases',
            skills: ['React Native', 'MongoDB', 'MySQL']
        },
        {
            category: 'Design & Tools',
            skills: ['Figma', 'Adobe XD', 'Git & GitHub', 'Agile / QA Testing']
        }
    ];

    return (
        <section id="about" className="w-full px-6 lg:px-16 py-20 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
                        About & Capability
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 font-Outfit">
                        Adaptable, Multi-Disciplinary Technologist
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
                        Ready to contribute across Software Engineering, Web/Mobile Development, UI/UX Design, and QA roles.
                    </p>
                </div>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {highlights.map((item, i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl hover:border-purple-500/40 hover:-translate-y-1 transition duration-300">
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                                {item.tag}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2 font-Outfit">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Roles Supported Grid */}
                <div className="mb-16 glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-Outfit flex items-center gap-2">
                                <span>🎯</span> Roles I Can Step Into Immediately
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Engineering, design, and innovation through technology.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {rolesSupported.map((r, i) => (
                            <div key={i} className="p-4 rounded-xl bg-gray-50/70 dark:bg-white/5 border border-gray-200/80 dark:border-white/5 hover:border-purple-500/40 transition">
                                <h4 className="font-bold text-sm text-gray-900 dark:text-white font-Outfit mb-1 flex items-center gap-1.5">
                                    <span className="text-purple-500 font-bold">✓</span>
                                    <span>{r.title}</span>
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {r.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profile Story + Simplified Technical Competencies */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* Story / Bio */}
                    <div className="lg:col-span-5 glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-Outfit mb-4 flex items-center gap-2">
                                <span>💡</span> Technical Mindset
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                I completed a 6-month internship as a <strong>Software Engineer Intern</strong> at Gamage Recruiters (Pvt) Ltd. This experience gave me comprehensive exposure to the software lifecycle—from initial requirements and wireframes to backend APIs, frontend integration, and systematic testing.
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                My academic journey in Information & Communication Technology at the University of Jaffna has reinforced this with deep knowledge in algorithms, database architectures, and engineering principles, making me adaptable across many technical tracks.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                            <span className="text-xs uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400 block mb-3">
                                Development & Design Toolkit
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                                {tools.map((t) => (
                                    <div key={t.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs">
                                        <img src={t.icon} alt={t.name} className="w-4 h-4 object-contain" />
                                        <span className="font-medium text-gray-800 dark:text-gray-200">{t.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Short & Simple Technical Competencies */}
                    <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-Outfit flex items-center gap-2 mb-1">
                                <span>⚙️</span> Technical Competencies
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                                Core programming languages, frameworks, databases, and engineering tools
                            </p>

                            <div className="space-y-3.5">
                                {skillGroups.map((group) => (
                                    <div
                                        key={group.category}
                                        className="p-3.5 rounded-xl bg-gray-50/70 dark:bg-white/5 border border-gray-200/80 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-purple-500/30 transition duration-200"
                                    >
                                        <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 min-w-36 font-Outfit">
                                            {group.category}
                                        </span>
                                        <div className="flex flex-wrap gap-1.5 flex-1 sm:justify-end">
                                            {group.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-[#11001F] text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-white/10 shadow-2xs"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <span>Continuously expanding technical depth</span>
                            <span className="font-semibold text-purple-600 dark:text-purple-400 font-Outfit">15+ Technologies</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}