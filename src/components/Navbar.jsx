import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    // Scroll spy logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'highlight', 'contact'];
            let current = 'home';

            // Allow a small offset for detecting the current section
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    if (element.offsetTop <= scrollPosition) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', icon: 'home', color: 'bg-[#00D3F2]' },
        { id: 'about', icon: 'person', color: 'bg-[#007AFF]' },
        { id: 'highlight', icon: 'star', color: 'bg-[#FFD60A]' },
        { id: 'contact', icon: 'mail', color: 'bg-[#05DF72]' }
    ];

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(null, '', `#${id}`);
    };

    return (
        <div className="fixed bottom-7 sm:bottom-0 sm:scale-[0.8] left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100 pointer-events-auto">
            <div className="bg-white border-4 border-black rounded-4xl p-2 sm:p-3 flex gap-2 sm:gap-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-300">
                {/* Main Navigation Links */}
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[1.2rem] sm:rounded-2xl border-4 border-black flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-none ${isActive ? `${item.color} translate-x-1 translate-y-1 shadow-none` : 'bg-white hover:bg-slate-200 shadow-[4px_4px_0px_rgba(0,0,0,1)]'}`}
                            aria-label={item.id}
                        >
                            <span className="material-symbols-outlined font-black text-black text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                {item.icon}
                            </span>
                        </a>
                    );
                })}

                {/* Social Media Popup Toggle */}
                <div className="relative">
                    {/* The Popup List */}
                    <div className={`absolute bottom-full mb-4 right-0 transition-all duration-300 origin-bottom-right ${isSocialOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-50 opacity-0 pointer-events-none'}`}>
                        <div className=" p-2 sm:p-3 flex flex-row gap-2 sm:gap-4 rounded-4xl">
                            {[
                                { name: 'github', color: 'bg-[#FFFFFF]', icon: 'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000', link: 'https://github.com' },
                                { name: 'linkedin', color: 'bg-[#0A66C2]', icon: 'https://img.icons8.com/?size=100&id=102748&format=png&color=FFFFFF', link: 'https://linkedin.com' },
                                { name: 'mail', color: 'bg-[#ff3b3b]', icon: 'https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF', link: 'mailto:contact@tauheed.dev' },
                                { name: 'instagram', color: 'bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]', icon: 'https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=FFFFFF', link: 'https://instagram.com' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank" rel="noopener noreferrer"
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border-4 border-black flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)] ${social.color}`}
                                    title={social.name}
                                >
                                    <img src={social.icon} alt={social.name} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* The Three-Dot Toggle Button */}
                    <button
                        onClick={() => setIsSocialOpen(!isSocialOpen)}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[1.2rem] sm:rounded-2xl border-4 border-black flex items-center justify-center transition-all duration-200 cursor-pointer shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none ${isSocialOpen ? 'bg-[#ff4b4b]' : 'bg-white hover:bg-slate-200'}`}
                        aria-label="Toggle Social Menu"
                    >
                        <span className="material-symbols-outlined font-black text-black text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {isSocialOpen ? 'close' : 'more_horiz'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;