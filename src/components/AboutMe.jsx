import React, { useState } from 'react';
import profile from '../assets/ProfilePics/profilePic.svg'
import achImg1 from '../assets/ProfilePics/img-1.jpg'
import achImg2 from '../assets/ProfilePics/img-2.jpg'
import achImg3 from '../assets/ProfilePics/img-3.jpg'
import achImg4 from '../assets/ProfilePics/img-4.jpg'
import achImg5 from '../assets/ProfilePics/img-5.jpg'
import achImg6 from '../assets/ProfilePics/img-6.jpg'

const achievementImages = [
    { src: achImg1, alt: 'Achievement 1' },
    { src: achImg2, alt: 'Achievement 2' },
    { src: achImg3, alt: 'Achievement 3' },
    { src: achImg4, alt: 'Achievement 4' },
    { src: achImg5, alt: 'Achievement 5' },
    { src: achImg6, alt: 'Achievement 6' },
];

const AboutMe = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? achievementImages.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev === achievementImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Main Content Area with Dot Grid */}
                <main className="grow flex flex-col items-center justify-center min-h-screen py-2 px-6">
                    <div className="w-full max-w-[1200px]">

                        {/* Header: Title + Download CV */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
                            <div className="flex flex-col">
                                <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase">
                                    About<button className="px-3 py-1 neo-border bg-[#00D3F2] text-white text-7xl md:text-[10rem] font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all cursor-pointer z-50">ME</button>
                                </h1>
                            </div>
                        </div>

                        {/* Main Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                            {/* Bio Card - full width */}
                            <div className="md:col-span-12 bg-white neo-border p-6 md:p-10 flex flex-col md:flex-row gap-8 shadow-neo">
                                {/* Profile Picture */}
                                <div className="w-full md:w-64 lg:w-80 shrink-0 relative">
                                    <div className="bg-[#007AFF] neo-border-sm overflow-hidden aspect-square w-full">
                                        <img
                                            alt="Professional portrait"
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 contrast-125 transition-all duration-500"
                                            src={profile}
                                        />
                                    </div>
                                    {/* Hello Badge */}
                                    <div className="absolute -bottom-1 -right-4 md:-bottom-1 md:-right-5 bg-[#FFD60A] border-[3px] border-black px-4 py-2  shadow-[3px_3px_0px_rgba(0,0,0,1)] z-10">
                                        <span className="text-2xl md:text-3xl font-black italic text-black" style={{ fontFamily: "'Caveat', cursive" }}>Hello!!</span>
                                    </div>
                                </div>
                                {/* Text Content */}
                                <div className="flex flex-col gap-6 justify-center flex-1">
                                    <h3 className="text-3xl md:text-4xl font-black uppercase">MOHAMMED TAUHEED ANSARI</h3>
                                    <p className="text-xl md:text-2xl leading-tight font-bold">
                                        I am currently working as a Salesforce Developer Intern with hands-on experience in Apex, Salesforce Admin, and Lightning Web Components (LWC). Previously, I worked as a Frontend Developer Intern building responsive web applications using HTML5, CSS3, JavaScript, React.js, and Tailwind CSS.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                        <div className="p-4 md:p-6 bg-[#F4F1EA] neo-border-sm">
                                            <p className="text-xs font-black uppercase mb-1 opacity-50 tracking-widest">Current Status</p>
                                            <p className="text-lg md:text-xl font-black uppercase">--------------</p>
                                        </div>
                                        <div className="p-4 md:p-6 bg-[#F4F1EA] neo-border-sm">
                                            <p className="text-xs font-black uppercase mb-1 opacity-50 tracking-widest">Base Location</p>
                                            <p className="text-lg md:text-xl font-black uppercase">Varansi, Uttar Pradesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Card */}
                            <div className="md:col-span-8 neo-border shadow-neo overflow-hidden p-[5px] md:p-0 bg-white">
                                {/* Card Header */}
                                <div className="flex items-center gap-3 p-6 bg-white">
                                    <div className="size-12 bg-white neo-border-thin flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[#0066ff] text-3xl font-extrabold">code</span>
                                    </div>
                                    <h4 className="text-2xl font-black uppercase">Tech Stack</h4>
                                </div>

                                {/* Terminal-style Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 bg-[#ffffff]">
                                    {[
                                        { category: 'Salesforce Backend', name: 'Apex', color: '#00A1E0' },
                                        { category: 'Salesforce Query Language', name: 'SOQL', color: '#1B96FF' },
                                        { category: 'Salesforce Framework', name: 'LWC', color: '#0D9DDA' },
                                        { category: 'Salesforce Automation', name: 'Flow', color: '#032D60' },
                                        { category: 'Language', name: 'C++', color: '#659AD2' },
                                        { category: 'Language', name: 'Java', color: '#ED8B00' },
                                        { category: 'Language', name: 'JavaScript', color: '#F7DF1E' },
                                        { category: 'Core', name: 'HTML5', color: '#E34F26' },
                                        { category: 'Styling', name: 'Tailwind CSS', color: '#06B6D4' },
                                        { category: 'Library', name: 'React', color: '#61DAFB' },
                                        { category: 'Backend', name: 'Node.js', color: '#339933' },
                                        { category: 'Version', name: 'Git', color: '#F05032' },
                                        { category: 'Workspace', name: 'GitHub', color: '#6e5494' },
                                        { category: 'Database', name: 'MySQL', color: '#4479A1' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col justify-center gap-1 px-4 py-5 md:px-5 md:py-6 border-[0.5px] border-black/10 transition-all duration-300 group cursor-default"
                                            style={{ '--hover-color': item.color + '20', '--hover-text': item.color }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = item.color + '59';
                                                e.currentTarget.querySelector('.tech-category').style.color = item.color;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.querySelector('.tech-category').style.color = '';
                                            }}
                                        >
                                            <span className="tech-category text-[10px] md:text-xs font-mono uppercase tracking-widest text-black/50 transition-colors duration-300">
                                                <span className="text-black font-bold">&gt;_</span> {item.category}
                                            </span>
                                            <span className="text-sm md:text-base font-black uppercase text-black tracking-wide leading-tight">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Achievement Card with Image Carousel */}
                            <div className="md:col-span-4 bg-[#ffffff] neo-border p-6 flex flex-col shadow-neo min-h-[400px]">
                                {/* Card Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="size-12 bg-white neo-border-thin flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[#e7c000] text-3xl font-bold">emoji_events</span>
                                    </div>
                                    <h4 className="text-2xl font-black uppercase">Achievements</h4>
                                </div>

                                {/* Carousel Container */}
                                <div className="relative w-full flex-1 flex flex-col">
                                    {/* Image Display */}
                                    <div className="relative w-full aspect-square bg-white neo-border-sm overflow-hidden">
                                        {achievementImages.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img.src}
                                                alt={img.alt}
                                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out"
                                                style={{
                                                    opacity: index === currentSlide ? 1 : 0,
                                                    transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Arrow Controls + Slide Counter */}
                                    <div className="flex items-center justify-between mt-4">
                                        <button
                                            onClick={goToPrev}
                                            className="size-12 bg-black text-white neo-border-thin flex items-center justify-center font-black text-2xl hover:bg-white hover:text-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                                            aria-label="Previous image"
                                        >
                                            ←
                                        </button>

                                        {/* Dot Indicators */}
                                        <div className="flex gap-2">
                                            {achievementImages.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentSlide(index)}
                                                    className={`size-3 neo-border-thin transition-all cursor-pointer ${index === currentSlide
                                                        ? 'bg-black scale-125'
                                                        : 'bg-white hover:bg-gray-300'
                                                        }`}
                                                    aria-label={`Go to slide ${index + 1}`}
                                                />
                                            ))}
                                        </div>

                                        <button
                                            onClick={goToNext}
                                            className="size-12 bg-black text-white neo-border-thin flex items-center justify-center font-black text-2xl hover:bg-white hover:text-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                                            aria-label="Next image"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Philosophy - full width */}
                            <div className="md:col-span-12 bg-[#007AFF] text-white neo-border p-12 flex flex-col md:flex-row gap-12 items-center shadow-neo">
                                <div className="flex-1">
                                    <h3 className="text-5xl font-black uppercase mb-6 tracking-tighter">Technical Philosophy</h3>
                                    <p className="text-2xl font-black leading-tight italic border-l-8 border-white pl-8 py-2">
                                        "Clean code is not an end goal; it is a prerequisite for agility. I build systems that are easy to reason about today and effortless to scale tomorrow."
                                    </p>
                                </div>
                                {/* <div className="flex flex-wrap justify-center gap-8">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="size-20 bg-white neo-border-sm flex items-center justify-center">
                                            <span className="material-symbols-outlined text-black text-4xl font-bold">verified</span>
                                        </div>
                                        <span className="font-black uppercase text-sm tracking-widest">Quality</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="size-20 bg-white neo-border-sm flex items-center justify-center">
                                            <span className="material-symbols-outlined text-black text-4xl font-bold">speed</span>
                                        </div>
                                        <span className="font-black uppercase text-sm tracking-widest">Velocity</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="size-20 bg-white neo-border-sm flex items-center justify-center">
                                            <span className="material-symbols-outlined text-black text-4xl font-bold">security</span>
                                        </div>
                                        <span className="font-black uppercase text-sm tracking-widest">Security</span>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AboutMe;
