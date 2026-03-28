import React, { useState } from 'react';

const NAV_ITEMS = ['EDUCATION', 'EXPERIENCE', 'PROJECTS', 'CERTIFICATES'];

const WorkExperience = () => {
    const [activeTab, setActiveTab] = useState('EXPERIENCE');

    return (
        <div className="relative w-full min-h-screen mt-10">
            {/* Dot Grid Background Layer */}
            <div className="absolute inset-0 pointer-events-none"></div>
            <div className="relative flex h-full grow flex-col">

                <div className="scale-[0.8] sm:scale-[0.6] flex flex-col md:flex-row justify-center items-center gap-8 mb-0">
                    <div className="flex flex-col">
                        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] ">
                            High<button className="px-0 pr-1 py-4 neo-border bg-[#FFD60A] text-white text-7xl md:text-[10rem] font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all cursor-pointer z-50">Lights</button>
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
                                        ? 'bg-[#77ff00] translate-x-1 translate-y-1 shadow-none text-black'
                                        : 'bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] text-black hover:bg-slate-200 hover:text-black'}
                                `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </nav>

            
            </div>
        </div>
    );
};

export default WorkExperience;
