export default function Experience() {
    const experience = {
        role: "Software Engineer Intern",
        company: "Gamage Recruiters (Pvt) Ltd",
        location: "Panadura, Sri Lanka",
        period: "03/2026 – 09/2026",
        points: [
            "Built and maintained 3+ React.js frontend modules, improving UI consistency and reducing reported defects.",
            "Engineered RESTful API endpoints using Node.js and Spring Boot to power key application workflows.",
            "Participated across the full Agile SDLC with peer code reviews, continuous debugging, and quality assurance."
        ],
        tags: ["React.js", "Spring Boot", "Node.js", "REST APIs", "Agile", "Git/GitHub"]
    };

    const educationList = [
        {
            degree: "BSc (Hons) in Information & Communication Technology",
            institution: "University of Jaffna",
            period: "2023 – Present",
            status: "Final Year Undergraduate",
            focus: "Algorithms, Software Architectures, Database Systems & Mobile Computing"
        },
        {
            degree: "G.C.E. Advanced Level (Physical Science Stream)",
            institution: "Gamini Dissanayake National School",
            period: "2020",
            status: "Completed",

        }
    ];

    const certifications = [
        { title: "Data Structures & Algorithms in Python", issuer: "Simplilearn", year: "2026", badge: "DSA" },
        { title: "Python for Beginners", issuer: "Univ. of Moratuwa", year: "2025", badge: "Python" },
        { title: "JavaScript for Beginners", issuer: "Udemy", year: "2025", badge: "JS" },
        { title: "PHP and MySQL", issuer: "Udemy", year: "2025", badge: "Database" },
    ];

    const honors = [
        "Vice President, Sports Council — University of Vavuniya (2025)",
        "University Colors in Cricket — University of Vavuniya (2024)",
        "Participant, ICT Expo 3.0 & SLUG (2025)"
    ];

    const referees = [
        {
            name: "Mr. V. Vinoharan",
            title: "Head of Department",
            department: "Faculty of Technological Studies, University of Vavuniya",
            email: "v.vinoharan@vau.ac.lk",
            phone: "+94 77 248 7111"
        },
        {
            name: "Ms. T. Amritha",
            title: "Lecturer (Probationary)",
            department: "Faculty of Technological Studies, University of Vavuniya",
            email: "amriprem@vau.ac.lk",
            phone: "+94 77 284 4884"
        }
    ];

    return (
        <section id="experience" className="w-full px-6 lg:px-16 py-20 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-xs uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
                        Career & Background
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 font-Outfit">
                        Experience & Credentials
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
                        Professional internship, university education, verified industry certifications, and academic endorsements.
                    </p>
                </div>

                {/* Modular Separate Containers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    
                    {/* Container 1: Work Experience */}
                    <div className="glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition duration-300 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200/80 dark:border-white/10">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-2xl">💼</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-Outfit">
                                        Work Experience
                                    </h3>
                                </div>
                                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold">
                                    6 Months Internship
                                </span>
                            </div>

                            <div className="mb-4">
                                <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white font-Outfit">
                                        {experience.role}
                                    </h4>
                                    <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-medium">
                                        {experience.period}
                                    </span>
                                </div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {experience.company} · <span className="text-gray-500">{experience.location}</span>
                                </p>
                            </div>

                            <ul className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {experience.points.map((pt, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                        <span className="text-purple-500 font-bold mt-1">▸</span>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200/80 dark:border-white/10">
                            {experience.tags.map((t) => (
                                <span 
                                    key={t} 
                                    className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Container 2: Education */}
                    <div className="glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition duration-300 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200/80 dark:border-white/10">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-2xl">🎓</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-Outfit">
                                        Education
                                    </h3>
                                </div>
                                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">
                                    Academic
                                </span>
                            </div>

                            <div className="space-y-5">
                                {educationList.map((edu, idx) => (
                                    <div 
                                        key={idx} 
                                        className="p-4 rounded-xl bg-gray-50/70 dark:bg-white/5 border border-gray-200/80 dark:border-white/5"
                                    >
                                        <div className="flex items-baseline justify-between gap-2 mb-1.5">
                                            <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white font-Outfit">
                                                {edu.degree}
                                            </h4>
                                            <span className="text-xs font-mono text-gray-500 shrink-0">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1.5">
                                            {edu.institution} · <span className="text-gray-600 dark:text-gray-300">{edu.status}</span>
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                                            {edu.focus}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Container 3: Certifications & Honors */}
                    <div className="glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition duration-300 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200/80 dark:border-white/10">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-2xl">📜</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-Outfit">
                                        Certifications & Honors
                                    </h3>
                                </div>
                                
                            </div>

                            {/* Certifications List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {certifications.map((c, i) => (
                                    <div 
                                        key={i} 
                                        className="p-3 rounded-xl bg-gray-50/70 dark:bg-white/5 border border-gray-200/80 dark:border-white/5 flex flex-col justify-between"
                                    >
                                        <div className="flex items-center justify-between gap-1 mb-1.5">
                                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold">
                                                {c.badge}
                                            </span>
                                            <span className="text-[10px] text-gray-400 font-mono">{c.year}</span>
                                        </div>
                                        <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-snug">
                                            {c.title}
                                        </h4>
                                        <p className="text-[11px] text-gray-500 mt-1">{c.issuer}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Leadership bullet points */}
                            <div className="pt-2">
                                <span className="text-xs uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 block mb-2 font-Outfit">
                                    Leadership & Activities
                                </span>
                                <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                                    {honors.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-amber-500 font-bold mt-0.5">•</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-gray-200/80 dark:border-white/10 flex items-center justify-between text-xs text-gray-500">
                            <span>Continuous professional upskilling</span>
                        </div>
                    </div>

                    {/* Container 4: Academic Referees */}
                    <div className="glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition duration-300 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200/80 dark:border-white/10">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-2xl">🤝</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-Outfit">
                                        Academic Referees
                                    </h3>
                                </div>
                                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
                                    References
                                </span>
                            </div>

                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                                Available for professional and academic verification upon request.
                            </p>

                            <div className="space-y-4">
                                {referees.map((r, i) => (
                                    <div 
                                        key={i} 
                                        className="p-4 rounded-xl bg-gray-50/70 dark:bg-white/5 border border-gray-200/80 dark:border-white/5"
                                    >
                                        <div className="flex items-baseline justify-between gap-1 mb-1">
                                            <h4 className="font-bold text-sm text-gray-900 dark:text-white font-Outfit">
                                                {r.name}
                                            </h4>
                                            <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
                                                {r.title}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                                            {r.department}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs pt-2 border-t border-gray-200/60 dark:border-white/5">
                                            <a 
                                                href={`mailto:${r.email}`} 
                                                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition flex items-center gap-1.5"
                                            >
                                                <span>✉️</span>
                                                <span>{r.email}</span>
                                            </a>
                                            <a 
                                                href={`tel:${r.phone.replace(/\s+/g, '')}`} 
                                                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition flex items-center gap-1.5"
                                            >
                                                <span>📞</span>
                                                <span>{r.phone}</span>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-gray-200/80 dark:border-white/10 flex items-center justify-between text-xs text-gray-500">
                            <span>Verification</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">University of Vavuniya</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
