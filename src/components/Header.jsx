export default function Header() {
    const targetRoles = [
        "Software Engineer",
        "Web Developer",
        "Mobile App Developer",
        "UI / UX Designer",
        "QA & Test Engineer",
        "IT Systems Associate"
    ];

    const stats = [
        { label: 'Internship Role', value: 'Software Engineer Intern', detail: 'Gamage Recruiters (6 Months)' },
        { label: 'Projects', value: '10+  Projects', detail: 'Web, Mobile & UI/UX' },
        { label: 'Core Versatility', value: 'Engineering & Design', detail: 'React · Mobile · Spring · Figma' },
        { label: 'Availability', value: 'Open to All Roles', detail: 'SE · Dev · Mobile · UI/UX · QA' },
    ];

    return (
        <section id="top" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="aurora-glow-1"></div>
            <div className="aurora-glow-2"></div>

            <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">

                {/* Available Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-md mb-6 hover:scale-105 transition duration-300">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-medium tracking-wide text-purple-700 dark:text-purple-300">
                        Open to Tech & Engineering Opportunities Across All Roles
                    </span>
                </div>

                {/* Profile Image with Gradient Ring */}
                <div className="relative mb-6">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 shadow-xl shadow-purple-500/20 animate-float">
                        <img
                            src="./assets/profile-img.png"
                            alt="Lahiru Welagedara"
                            className="w-full h-full object-cover rounded-full bg-white dark:bg-[#11001F]"
                        />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-2 -right-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-[#1A0B2E] border border-gray-200 dark:border-white/10 shadow-lg flex items-center gap-1.5 text-gray-800 dark:text-white">
                        <span>⚡</span> SE Intern
                    </div>
                </div>

                {/* Subtitle / Intro */}
                <h2 className="text-base sm:text-lg text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase mb-2 font-Outfit">
                    Lahiru Welagedara
                </h2>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6 font-Outfit">
                    Turning Ideas into  <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500">
                        Impactful Engineering, Design & Innovation
                    </span>
                </h1>

                {/* Multi-role Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6 max-w-2xl">
                    {targetRoles.map((role, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium"
                        >
                            {role}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Final year IT Undergraduate with 6 months of hands-on experience as a <span className="font-semibold text-gray-900 dark:text-white">Software Engineer Intern</span> at Gamage Recruiters. Equipped with a broad technical toolkit across software engineering, web & mobile applications, UI/UX prototyping, testing, and databases.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <a
                        href="#work"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-medium text-sm shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition duration-300 flex items-center gap-2"
                    >
                        <span>Explore Projects</span>
                        <img src="./assets/right-arrow-white.png" alt="" className="w-3.5" />
                    </a>

                    <a
                        href="./assets/Lahiru_Welagedara_Resume.pdf"
                        download="Lahiru_Welagedara_Resume.pdf"
                        className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-medium text-sm shadow-sm hover:scale-105 transition duration-300 flex items-center gap-2 backdrop-blur-md"
                    >
                        <span>Download Resume</span>
                        <img src="./assets/download-icon.png" alt="" className="w-3.5 dark:invert" />
                    </a>
                </div>

                {/* Live Stats Grid */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200/70 dark:border-white/10">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl glass-card text-center hover:-translate-y-1 transition duration-300">
                            <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-0.5">
                                {stat.value}
                            </div>
                            <div className="text-xs font-semibold text-gray-800 dark:text-white">
                                {stat.label}
                            </div>
                            <div className="text-[11px] text-gray-500 dark:text-gray-400">
                                {stat.detail}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}