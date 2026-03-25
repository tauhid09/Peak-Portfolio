import React from 'react';

const Certificate = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">

            <main className="flex-1 w-full py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="bg-neo-lime border-2 border-black px-3 py-1 text-sm font-black uppercase inline-block mb-4 shadow-neo-sm">
                            Verified Credentials
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">Learning <span className="text-primary italic">never</span> stops.</h2>
                        <p className="text-xl font-medium border-l-4 border-black pl-4">A curated gallery of my professional certifications, technical specializations, and academic achievements arranged in a sleek single-row layout.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white border-2 border-black px-4 py-2 font-bold shadow-neo-sm flex items-center gap-2 hover:bg-slate-50 cursor-pointer">
                            <span className="material-symbols-outlined">filter_list</span> Filter
                        </button>
                        <button className="bg-black text-white border-2 border-black px-4 py-2 font-bold shadow-neo-sm flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined">download</span> Download CV
                        </button>
                    </div>
                </div>

                <div className="w-full relative group/gallery">
                    <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-4 md:pl-10 pointer-events-none">
                        <button className="pointer-events-auto bg-primary border-4 border-black w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-3xl font-black">arrow_back_ios_new</span>
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-4 md:pr-10 pointer-events-none">
                        <button className="pointer-events-auto bg-neo-cyan border-4 border-black w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-3xl font-black">arrow_forward_ios</span>
                        </button>
                    </div>

                    <div className="flex overflow-x-auto hide-scrollbar gap-10 px-6 md:px-[calc((100vw-1280px)/2+80px)] pb-12 snap-x snap-mandatory">

                        {/* Certificate 1 */}
                        <div className="min-w-[320px] md:min-w-[400px] shrink-0 bg-neo-lime border-4 border-black p-6 shadow-neo flex flex-col group snap-center">
                            <div className="relative mb-6 overflow-hidden border-2 border-black shadow-neo-sm">
                                <div className="aspect-video bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBV6-9LRn4sxQKR8CfKB99MVA3_qZffUWMl9vP6vJ8EBFNh_AauS-lddhEOnD5TSg1rnxnn5joouzeTUysKSfmdT4ufFWFEdIWcOH-mM2vo84AOycHtJkHQBLiE8B9s874LOfdZ_enPRlBEEktnG5tCMQA5Wk2K92BnZi0TfFWnFWbMLSe0ZjS7pNIeDHagR8LxBRCuR9j0KDE9MGZ8nUL54E2UlRYcok8mhL0WHGuGKTlNxv7cgQGVQL-XFiPpmSpnImIYLPagc04')" }}>
                                </div>
                                <div className="absolute top-4 right-4 bg-white border-2 border-black p-2 rounded-full">
                                    <span className="material-symbols-outlined block text-black">verified</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase inline-block">Google</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight mb-2">UX Design Professional</h3>
                            <p className="text-sm font-bold opacity-80 mb-6">Issued: October 2023 • ID: G-8829</p>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="material-symbols-outlined text-4xl">architecture</span>
                                <a className="bg-black text-white px-4 py-2 font-black uppercase text-xs hover:bg-slate-800 transition-colors" href="#link">View Credential</a>
                            </div>
                        </div>

                        {/* Certificate 2 */}
                        <div className="min-w-[320px] md:min-w-[400px] shrink-0 bg-neo-purple border-4 border-black p-6 shadow-neo flex flex-col group snap-center">
                            <div className="relative mb-6 overflow-hidden border-2 border-black shadow-neo-sm">
                                <div className="aspect-video bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoUp8tdEri0KzUaIWN2Yj6z3B5PPdaTvhXM-mP8ripQViei1g_0lQ0Ob_nGvHNoO8jKhO1FxVHQkT8fuCQo2Cv4mNOm--xzqANLJmHfoLmGFVscNGXBXH8Jg9qIIRFX8O-k59ZoJKQzMQPYGHmSoU58RY-IrfYwI1OjLzrl_x0vSfoZMO7yJLZ6gLhAGoS8V94_OoTnLGhI5vx7FKC_AHGogyWt1fHxP1dwIsYNiQQ3gTNUlezDPm3btWO5FdJ-pqqosY825lakq8')" }}>
                                </div>
                                <div className="absolute top-4 right-4 bg-white border-2 border-black p-2 rounded-full">
                                    <span className="material-symbols-outlined block text-black">code</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase inline-block">Meta</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight mb-2">Front-End Developer</h3>
                            <p className="text-sm font-bold opacity-80 mb-6">Issued: August 2023 • ID: M-1102</p>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="material-symbols-outlined text-4xl">terminal</span>
                                <a className="bg-black text-white px-4 py-2 font-black uppercase text-xs hover:bg-slate-800 transition-colors" href="#link">View Credential</a>
                            </div>
                        </div>

                        {/* Certificate 3 */}
                        <div className="min-w-[320px] md:min-w-[400px] shrink-0 bg-neo-orange border-4 border-black p-6 shadow-neo flex flex-col group snap-center">
                            <div className="relative mb-6 overflow-hidden border-2 border-black shadow-neo-sm">
                                <div className="aspect-video bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuk60eoQKuLSaT8nHjz4trhXIvtcjujY8ZIVKXIb-2SEykGeibnSXXHinnPI6wDEz8MJDrGpnmsrHYFfPDxci_PFLozp9hwUzBKFPQZjzu_YJ3mEXjx5kov_NRNCQ-4XTpxPnBbDg0hcWKmpH_PxlvmyiGJf2EUOZMahCjvDp2Wfd4WthCHIQSyR6oVdKE6XEwbEKKErBT2IaYbSaSxybN0AR9Ht0r-vmwAMsF86L8Gz156SnMBxY_7zamcAqX_YncEwlZBQNif7M')" }}>
                                </div>
                                <div className="absolute top-4 right-4 bg-white border-2 border-black p-2 rounded-full">
                                    <span className="material-symbols-outlined block text-black">cloud_done</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase inline-block">AWS</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight mb-2">Cloud Practitioner</h3>
                            <p className="text-sm font-bold opacity-80 mb-6">Issued: June 2023 • ID: A-4491</p>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="material-symbols-outlined text-4xl">database</span>
                                <a className="bg-black text-white px-4 py-2 font-black uppercase text-xs hover:bg-slate-800 transition-colors" href="#link">View Credential</a>
                            </div>
                        </div>

                        {/* Certificate 4 */}
                        <div className="min-w-[320px] md:min-w-[400px] shrink-0 bg-primary border-4 border-black p-6 shadow-neo flex flex-col group snap-center">
                            <div className="relative mb-6 overflow-hidden border-2 border-black shadow-neo-sm">
                                <div className="aspect-video bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC75Ifvh8_YV3A_0F1SINyW7ao41DqBUv3SWbdASVFOJWejsCWcezJNK8Wlr69GJDZwpY-Pe53twUSwrg4zkFQBcz9-DZWBvGjzHzIgxPSd0_sn1Ji8R859NcWXRSqu4pR-A_UcMh4PIhcY9qRnuvZHFDMEGWGqCO0SnEzm8K7bHCA8as7fXMNP2506KZT3Ac3_qbrZWr0YNvHKWNez8VYGs0GQPQWODp9mU3ZRgq7cOqL0zsQ2zZ5XD3vt8yyt6kfIQ-B_zJQBBfQ')" }}>
                                </div>
                                <div className="absolute top-4 right-4 bg-white border-2 border-black p-2 rounded-full">
                                    <span className="material-symbols-outlined block text-black">analytics</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase inline-block">Google</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight mb-2">Advanced Analytics</h3>
                            <p className="text-sm font-bold opacity-80 mb-6">Issued: January 2023 • ID: G-3301</p>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="material-symbols-outlined text-4xl">query_stats</span>
                                <a className="bg-black text-white px-4 py-2 font-black uppercase text-xs hover:bg-slate-800 transition-colors" href="#link">View Credential</a>
                            </div>
                        </div>

                        {/* Certificate 5 */}
                        <div className="min-w-[320px] md:min-w-[400px] shrink-0 bg-neo-lime border-4 border-black p-6 shadow-neo flex flex-col group snap-center">
                            <div className="relative mb-6 overflow-hidden border-2 border-black shadow-neo-sm">
                                <div className="aspect-video bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXh5lkr9xUmH0Cjvh5Hur6PHzx73BO0I3ueMUQvGWyoGxGWzl11ALq4AwMiT9pjsBetPJXOcVccS86e3RxiSAX94EudSqMo7NXla1N406o61rZ3cC00ZwPGRzraSYNq3P9DVT3zzzAHzooALW_A_3fyITMuvdP2cxsv-huyVrHxF0ADwht-cnFaCvPdYVeP4kfm0wLBfzV3LK5806zyN_6z5O7cm4Go82eY_udBBTAi_b3GreJeLqgnM5i8QUjhDUL9tE94TkaWug')" }}>
                                </div>
                                <div className="absolute top-4 right-4 bg-white border-2 border-black p-2 rounded-full">
                                    <span className="material-symbols-outlined block text-black">palette</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase inline-block">Udemy</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight mb-2">Graphic Design Masterclass</h3>
                            <p className="text-sm font-bold opacity-80 mb-6">Issued: December 2022 • ID: U-9022</p>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="material-symbols-outlined text-4xl">draw</span>
                                <a className="bg-black text-white px-4 py-2 font-black uppercase text-xs hover:bg-slate-800 transition-colors" href="#link">View Credential</a>
                            </div>
                        </div>

                        {/* Certificate 6 */}
                        <div className="min-w-[320px] md:min-w-[400px] shrink-0 bg-neo-purple border-4 border-black p-6 shadow-neo flex flex-col group snap-center">
                            <div className="relative mb-6 overflow-hidden border-2 border-black shadow-neo-sm">
                                <div className="aspect-video bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsQgqU8zwgWcKu6r-4Ain5-GpvYakKaR-PGKBuO0FHd9QxxLS2JE-ikO8C_TeieyYtkJGNHGl5x-UQgN2bXWfzV_kZyA0fdJbPpvlHYhnUtt2wtF1jzX0CZtrLF8U8h49ou2syorJLCm8KSj1qS9CLJcSRu-i_sN3eVsivydYTnayKwcxHG8ziCUH7LMEt-WzrEPy2Ge_hExclKLK_qlNQnQe7IO1Xh2xi89ZoHxQKN_hF_yMFjyt2rn3QNWmx8Zl_xdu6Vwe3O_k')" }}>
                                </div>
                                <div className="absolute top-4 right-4 bg-white border-2 border-black p-2 rounded-full">
                                    <span className="material-symbols-outlined block text-black">psychology</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase inline-block">Stanford</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight mb-2">Human-Computer Interaction</h3>
                            <p className="text-sm font-bold opacity-80 mb-6">Issued: November 2022 • ID: S-0051</p>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="material-symbols-outlined text-4xl">neurology</span>
                                <a className="bg-black text-white px-4 py-2 font-black uppercase text-xs hover:bg-slate-800 transition-colors" href="#link">View Credential</a>
                            </div>
                        </div>

                    </div>

                    <div className="max-w-7xl mx-auto px-6 mt-4 flex justify-end">
                        <div className="flex items-center gap-2 font-black text-sm uppercase">
                            <span>Use arrows or scroll</span>
                            <span className="material-symbols-outlined animate-bounce">arrow_right_alt</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <section className="mt-20 bg-white border-4 border-black p-8 md:p-16 shadow-neo relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-[200px] rotate-12">handshake</span>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
                                Ready to collaborate on your <span className="bg-primary px-2">next big thing?</span>
                            </h2>
                            <div className="flex flex-col md:flex-row gap-6">
                                <button className="bg-neo-lime border-4 border-black px-10 py-4 font-black uppercase text-xl shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer">
                                    Send a message
                                </button>
                                <button className="bg-white border-4 border-black px-10 py-4 font-black uppercase text-xl shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer">
                                    Check Resume
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </div>
    );
};

export default Certificate;
