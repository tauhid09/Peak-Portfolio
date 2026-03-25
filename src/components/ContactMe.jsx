import React, { useState } from 'react';

const ContactMe = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // In a real app we'd toggle a class on the `html` or `body` element
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
            <div className="bg-background-light dark:bg-background-dark min-h-screen font-display transition-colors duration-300">

                <div className="flex items-center justify-center p-6 mt-12">
                    <div className="relative max-w-6xl w-full">
                        <div className="absolute -top-6 -left-4 z-20 bg-neo-yellow border-4 border-black px-6 py-2 tilt-card shadow-neo-sm">
                            <span className="font-heading font-extrabold text-xl tracking-tighter text-black uppercase">Start a Project</span>
                        </div>

                        <main className="relative bg-white dark:bg-slate-900 border-[6px] border-black dark:border-white p-8 md:p-16 shadow-neo dark:shadow-neo-dark flex flex-col lg:flex-row gap-16 items-start overflow-visible">
                            <div className="flex-1 space-y-8">
                                <h1 className="font-heading font-extrabold text-7xl md:text-8xl leading-[0.9] tracking-tighter text-black dark:text-white uppercase">
                                    Let's<br />Talk<br />Code.
                                </h1>
                                <p className="font-mono text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                                    I am currently available for freelance work and open to full-time opportunities.
                                </p>
                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-4 group">
                                        <div className="bg-black dark:bg-white text-white dark:text-black p-3 flex items-center justify-center border-2 border-black dark:border-white">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <span className="font-mono font-bold text-xl text-black dark:text-white hover:underline cursor-pointer decoration-2 underline-offset-4">
                                            vikasgowdas222@gmail.com
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="bg-black dark:bg-white text-white dark:text-black p-3 flex items-center justify-center border-2 border-black dark:border-white">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <span className="font-mono font-bold text-xl text-black dark:text-white">
                                            Remote / Earth
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 w-full lg:max-w-md border-2 border-black dark:border-white p-8 bg-white dark:bg-slate-800">
                                <form action="#" className="space-y-6" method="POST">
                                    <div className="space-y-1">
                                        <label className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-slate-300">Identity</label>
                                        <input className="w-full border-2 border-black dark:border-slate-500 bg-transparent p-4 font-mono focus:ring-0 focus:border-primary transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none" placeholder="NAME / COMPANY" type="text" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-slate-300">Coordinates</label>
                                        <input className="w-full border-2 border-black dark:border-slate-500 bg-transparent p-4 font-mono focus:ring-0 focus:border-primary transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none" placeholder="EMAIL ADDRESS" type="email" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-slate-300">Transmission</label>
                                        <textarea className="w-full border-2 border-black dark:border-slate-500 bg-transparent p-4 font-mono focus:ring-0 focus:border-primary transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none resize-none" placeholder="PROJECT DETAILS..." rows="4"></textarea>
                                    </div>
                                    <button className="w-full bg-primary text-white font-heading font-extrabold text-xl py-4 border-4 border-black dark:border-white shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-tighter cursor-pointer" type="submit">
                                        Transmit Data
                                    </button>
                                </form>
                            </div>
                        </main>

                        <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-black dark:bg-white rounded-full hidden xl:block"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;
