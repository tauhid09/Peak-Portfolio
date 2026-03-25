import React from 'react';

const WorkExperience = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Dot Grid Background Layer */}
            <div className="absolute inset-0 pointer-events-none"></div>

            <div className="relative flex h-full grow flex-col">

                <main className="max-w-[1000px] mx-auto w-full px-6 py-16">
                    <div className="mb-20">
                        <span className="bg-neo-blue neo-border px-3 py-1 text-sm font-black uppercase inline-block mb-4">My Journey</span>
                        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase mb-6">Work<br />Experience</h1>
                        <p className="text-xl font-medium max-w-xl border-l-4 border-black pl-6">
                            A raw chronological journey through the digital landscapes I've built and the teams I've led.
                        </p>
                    </div>

                    {/* Timeline Section */}
                    <div className="relative">
                        {/* Vertical Axis Line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-black"></div>

                        {/* Experience Item 1 */}
                        <div className="relative mb-24 flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                            <div className="md:w-[45%] w-full order-2 md:order-1">
                                <div className="bg-neo-lavender neo-border-thick p-6 shadow-neo-lg relative group">
                                    <div className="absolute -top-4 -right-4 bg-white neo-border px-4 py-1 font-black text-xs uppercase transform rotate-3">
                                        Current
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-black uppercase leading-none mb-2">Senior Frontend Developer</h3>
                                        <span className="bg-black text-white px-3 py-1 text-sm font-bold inline-block">TECH CORP</span>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Led the migration from legacy systems to modern React architectures.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Implemented Neo-Brutalism design systems across 4 major products.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Mentored a team of 10 junior developers and improved sprint velocity by 25%.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-primary neo-border-thick rounded-full items-center justify-center z-10">
                                <span className="material-symbols-outlined font-black">bolt</span>
                            </div>
                            <div className="md:w-[45%] w-full pl-12 md:pl-0 order-1 md:order-2 mb-4 md:mb-0">
                                <div className="bg-white neo-border px-4 py-2 inline-block font-black text-lg -rotate-2 shadow-neo-sm">
                                    2021 — PRESENT
                                </div>
                            </div>
                        </div>

                        {/* Experience Item 2 */}
                        <div className="relative mb-24 flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                            <div className="md:w-[45%] w-full pl-12 md:pl-0 order-1 md:order-1 mb-4 md:mb-0 md:text-right">
                                <div className="bg-white neo-border px-4 py-2 inline-block font-black text-lg rotate-2 shadow-neo-sm">
                                    2019 — 2021
                                </div>
                            </div>
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-neo-mint neo-border-thick rounded-full items-center justify-center z-10">
                                <span className="material-symbols-outlined font-black">palette</span>
                            </div>
                            <div className="md:w-[45%] w-full order-2 md:order-2">
                                <div className="bg-neo-peach neo-border-thick p-6 shadow-neo-lg relative">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-black uppercase leading-none mb-2">UX/UI Designer</h3>
                                        <span className="bg-black text-white px-3 py-1 text-sm font-bold inline-block">CREATIVE STUDIO</span>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Designed high-fidelity prototypes for international high-profile clients.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Developed brand identities featuring high-contrast aesthetics and bold typography.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Collaborated with engineers to ensure pixel-perfect CSS implementation.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experience Item 3 */}
                        <div className="relative mb-12 flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                            <div className="md:w-[45%] w-full order-2 md:order-1">
                                <div className="bg-neo-mint neo-border-thick p-6 shadow-neo-lg relative">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-black uppercase leading-none mb-2">Junior Web Developer</h3>
                                        <span className="bg-black text-white px-3 py-1 text-sm font-bold inline-block">STARTUP INC</span>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Built responsive landing pages using modern HTML5 and Tailwind CSS.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Optimized asset delivery, reducing average page load times by 40%.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-black mt-1.5 shrink-0"></span>
                                            <p className="text-sm font-bold">Assisted in the development of an internal component library.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-neo-lavender neo-border-thick rounded-full items-center justify-center z-10">
                                <span className="material-symbols-outlined font-black">code</span>
                            </div>
                            <div className="md:w-[45%] w-full pl-12 md:pl-0 order-1 md:order-2 mb-4 md:mb-0">
                                <div className="bg-white neo-border px-4 py-2 inline-block font-black text-lg -rotate-1 shadow-neo-sm">
                                    2017 — 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <button className="bg-primary neo-border-thick px-12 py-6 text-2xl font-black uppercase shadow-neo-lg active:-translate-x-1 active:-translate-y-1 active:shadow-none transition-all cursor-pointer">
                            Let's Talk Projects
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default WorkExperience;
