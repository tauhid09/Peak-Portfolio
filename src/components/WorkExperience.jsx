import React, { useState } from 'react';

const NAV_ITEMS = ['EDUCATION', 'EXPERIENCE', 'PROJECTS', 'CERTIFICATES'];

const WorkExperience = () => {
    const [activeTab, setActiveTab] = useState('EXPERIENCE');

    return (
        <div className="relative w-full min-h-screen mt-20">
            {/* Dot Grid Background Layer */}
            <div className="absolute inset-0 pointer-events-none"></div>
            <div className="relative flex h-full grow flex-col">

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
                    <div className="flex flex-col">
                        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] ">
                            High<button className="px-5 py-4 neo-border bg-[#FFD60A] text-white text-7xl md:text-[10rem] font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all cursor-pointer z-50">Lights</button>
                        </h1>
                    </div>
                </div>

                {/* Navigation Bar */}
                <nav className="w-full max-w-3xl mx-auto mt-4 mb-10 scale-[0.9]  md:scale-[1] ">
                    <div className="flex justify-center items-center gap-6 md:gap-12 border-b-2  pb-0">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveTab(item)}
                                className={`
                                    relative pb-3 text-sm md:text-base font-black tracking-wider uppercase cursor-pointer  duration-200  shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all z-50 bg-amber-50
                                    ${activeTab === item ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}
                                `}
                            >
                                {item}
                                {activeTab === item && (
                                    <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FFD60A] rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </nav>

            
            </div>
        </div>
    );
};

export default WorkExperience;
