import React, { useState } from 'react';

const NAV_ITEMS = ['EDUCATION', 'EXPERIENCE', 'PROJECTS', 'CERTIFICATES'];

const EDUCATION_DATA = [
    {
        year: '2015 — 2019',
        degree: 'BACHELOR OF DESIGN',
        university: 'TECH UNIVERSITY OF DESIGN',
        description: 'Foundational study in user experience, industrial design principles, and digital interfaces. Developed a core understanding of responsive systems and human-computer interaction.',
        tags: [
            { label: 'UI/UX', color: 'bg-[#aeff00]' },
            { label: 'FRONTEND SYSTEMS', color: 'bg-[#aeff00]' },
            { label: 'SYSTEM THINKING', color: 'bg-[#aeff00]' },
        ],
        icon: 'code',
        iconBg: 'bg-[#aeff00]',
    },
    {
        year: '2020 — 2022',
        degree: 'MASTER OF FINE ARTS',
        university: 'UNIVERSITY OF ARTS, LONDON',
        description: 'Advanced specialization in visual narrative and semiotics. Focus on the intersection of brutalist digital architecture and high-end editorial typography. Thesis: "The Weight of the Digital Grid."',
        tags: [
            { label: 'FINE ARTS', color: 'bg-[#FF6EC7]' },
            { label: 'VISUAL DESIGN', color: 'bg-[#FF6EC7]' },
            { label: 'TYPOGRAPHY', color: 'bg-[#FF6EC7]' },
        ],
        icon: 'school',
        iconBg: 'bg-[#FFD60A]',
    },
];

const EducationCard = ({ data }) => (
    <div className="scale-[0.8] md:scale-[0.9] w-full bg-white border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start justify-between">
            <span className="text-xs font-black tracking-wider border-2 border-black px-3 py-1 bg-white">
                {data.year}
            </span>
            <div className={`w-12 h-12 ${data.iconBg} border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)]`}>
                <span className="material-symbols-outlined text-black text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {data.icon}
                </span>
            </div>
        </div>

        <div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">{data.degree}</h3>
            <p className="text-xs font-bold tracking-widest text-gray-500 mt-1">{data.university}</p>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
            {data.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
            {data.tags.map((tag) => (
                <span
                    key={tag.label}
                    className={`text-[10px] md:text-xs font-black tracking-wider px-3 py-1.5 border-2 border-black ${tag.color} shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase`}
                >
                    {tag.label}
                </span>
            ))}
        </div>
    </div>
);

const WorkExperience = () => {
    const [activeTab, setActiveTab] = useState('EDUCATION');

    return (
        <div className="relative w-full min-h-screen mt-10">
            {/* Dot Grid Background Layer */}
            <div className="absolute inset-0 pointer-events-none"></div>
            <div className="relative flex h-full grow flex-col">

                <div className="scale-[0.8] sm:scale-[0.6] flex flex-col md:flex-row justify-center items-center gap-8 mb-0 uppercase">
                    <div className="flex flex-col">
                        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] ">
                            High<button className="px-0 pr-1 py-4 neo-border bg-[#FFD60A] text-white text-7xl md:text-[10rem] font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all cursor-pointer z-50 uppercase">Lights</button>
                        </h1>
                    </div>
                </div>

                {/* Navigation Bar */}
                <nav className="w-full max-w-3xl mx-auto mt-0 md:mb- mb-10 scale-[0.7] sm:scale-[0.8] ">
                    <div className="flex justify-center items-center gap-6 md:gap-12 pb-0">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveTab(item)}
                                className={`
                                    relative px-4 py-3 text-sm md:text-base font-black tracking-wider uppercase cursor-pointer border-2 border-black transition-all duration-300 ease-in-out active:translate-x-1 active:translate-y-1 active:shadow-none
                                    ${activeTab === item
                                        ? 'bg-[#aeff00] translate-x-1 translate-y-1 shadow-none text-black'
                                        : 'bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] text-black hover:bg-slate-200 hover:text-black'}
                                `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Tab Content */}
                <div className="w-full max-w-6xl mx-auto px-4">
                    {activeTab === 'EDUCATION' && (
                        <div className="flex flex-col md:flex-row md:gap-0 items-center">
                            {EDUCATION_DATA.map((edu, index) => (
                                <React.Fragment key={edu.degree}>
                                    <EducationCard data={edu} />
                                    
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default WorkExperience;

