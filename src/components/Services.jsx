export default function Services() {
    const services = [
        {
            name: 'Web Development',
            icon: './assets/web-icon.png',
            description: 'Creating responsive websites with clean design and smooth user experience using HTML, CSS, React, and Node.js.',
            link: '#',
        },
        {
            name: 'Software & Application Development',
            icon: './assets/mobile-icon.png',
            description: 'Building functional and efficient desktop, web, and mobile applications.',
            link: '#',
        },
        {
            name: 'Programming Solutions',
            icon: './assets/graphics-icon.png',
            description: 'Writing clean, maintainable code in Python, C, C++, Java, JavaScript, and C# to solve complex problems.',
            link: '#',
        },
        {
            name: 'Networking & IT Fundamentals',
            icon: './assets/graphics-icon.png',
            description: 'Implementing and simulating network solutions using Cisco Packet Tracer.',
            link: '#',
        },
        {
            name: 'UI/ UX design',
            icon: './assets/ui-icon.png',
            description: 'Designing intuitive interfaces with Figma and Adobe XD for engaging user experiences.',
            link: '#',
        },       
        {
            name: 'Database Management',
            icon: './assets/web-icon.png',
            description: 'Developing and managing databases using MySQL and MongoDB for reliable data storage.',
            link: '#',
        },
        {
            name: 'Continuous Learning',
            icon: './assets/graphics-icon.png',
            description: 'Staying up-to-date with emerging technologies to deliver modern, optimized solutions.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I create practical digital solutions, build user-friendly apps and websites, and continuously learn new tools to solve problems efficiently.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}