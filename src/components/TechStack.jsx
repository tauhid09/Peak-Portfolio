import React from 'react';

const TechStack = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">

                <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-20">
                    <div className="flex flex-col items-center mb-16">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none flex flex-wrap justify-center gap-x-4">
                            <span className="text-outline uppercase">TECH</span>
                            <span className="bg-black text-white px-4 uppercase">STACK</span>
                        </h1>
                        <p className="mt-6 text-xl font-bold bg-white border-2 border-black px-4 py-2 shadow-neo">
                            My digital arsenal for building high-performance web experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        <div className="bg-primary p-6 border-4 border-black shadow-neo-lg flex flex-col items-center justify-center gap-4 group">
                            <div className="p-4 bg-white border-2 border-black shadow-neo">
                                <span className="material-symbols-outlined text-4xl font-bold">code</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase text-black">React</h3>
                                <p className="text-sm font-bold uppercase opacity-80">Frontend UI</p>
                            </div>
                        </div>

                        <div className="bg-accent-cyan p-6 border-4 border-black shadow-neo-lg flex flex-col items-center justify-center gap-4">
                            <div className="p-4 bg-white border-2 border-black shadow-neo">
                                <span className="material-symbols-outlined text-4xl font-bold">layers</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase text-black">Next.js</h3>
                                <p className="text-sm font-bold uppercase opacity-80">Fullstack Framework</p>
                            </div>
                        </div>

                        <div className="bg-accent-pink p-6 border-4 border-black shadow-neo-lg flex flex-col items-center justify-center gap-4">
                            <div className="p-4 bg-white border-2 border-black shadow-neo">
                                <span className="material-symbols-outlined text-4xl font-bold">palette</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase text-black">Tailwind</h3>
                                <p className="text-sm font-bold uppercase opacity-80">Styling System</p>
                            </div>
                        </div>

                        <div className="bg-primary p-6 border-4 border-black shadow-neo-lg flex flex-col items-center justify-center gap-4">
                            <div className="p-4 bg-white border-2 border-black shadow-neo">
                                <span className="material-symbols-outlined text-4xl font-bold">terminal</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase text-black">TypeScript</h3>
                                <p className="text-sm font-bold uppercase opacity-80">Type Safety</p>
                            </div>
                        </div>

                        <div className="bg-accent-cyan p-6 border-4 border-black shadow-neo-lg flex flex-col items-center justify-center gap-4">
                            <div className="p-4 bg-white border-2 border-black shadow-neo">
                                <span className="material-symbols-outlined text-4xl font-bold">draw</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase text-black">Figma</h3>
                                <p className="text-sm font-bold uppercase opacity-80">Visual Design</p>
                            </div>
                        </div>

                        <div className="bg-accent-pink p-6 border-4 border-black shadow-neo-lg flex flex-col items-center justify-center gap-4">
                            <div className="p-4 bg-white border-2 border-black shadow-neo">
                                <span className="material-symbols-outlined text-4xl font-bold">database</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase text-black">PostgreSQL</h3>
                                <p className="text-sm font-bold uppercase opacity-80">Data Persistence</p>
                            </div>
                        </div>

                        <div className="bg-primary p-6 border-4 border-black shadow-neo-lg flex flex-col items-center justify-center gap-4">
                            <div className="p-4 bg-white border-2 border-black shadow-neo">
                                <span className="material-symbols-outlined text-4xl font-bold">hub</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase text-black">GraphQL</h3>
                                <p className="text-sm font-bold uppercase opacity-80">Data Fetching</p>
                            </div>
                        </div>

                        <div className="bg-accent-cyan p-6 border-4 border-black shadow-neo-lg flex flex-col items-center justify-center gap-4">
                            <div className="p-4 bg-white border-2 border-black shadow-neo">
                                <span className="material-symbols-outlined text-4xl font-bold">settings</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase text-black">Node.js</h3>
                                <p className="text-sm font-bold uppercase opacity-80">Backend Runtime</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TechStack;
