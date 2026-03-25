import React from 'react';

const Project = () => {
    return (
        <div className="relative w-full min-h-screen">

            <main className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-16">
                    <div className="inline-block bg-primary neo-border px-4 py-1 mb-4">
                        <span className="font-bold uppercase tracking-widest text-sm italic">Portfolio 2024</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-none mb-6">Selected<br />Projects</h2>
                    <p className="text-xl max-w-2xl font-medium leading-relaxed border-l-8 border-black pl-6">
                        A collection of high-energy digital experiences and bold UI experiments built with a focus on interaction and visual impact.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12">
                    <button className="bg-black text-white px-6 py-2 font-bold uppercase italic neo-border shadow-neo cursor-pointer">All Projects</button>
                    <button className="bg-white px-6 py-2 font-bold uppercase italic neo-border shadow-neo hover:bg-primary transition-colors cursor-pointer">React</button>
                    <button className="bg-white px-6 py-2 font-bold uppercase italic neo-border shadow-neo hover:bg-primary transition-colors cursor-pointer">Three.js</button>
                    <button className="bg-white px-6 py-2 font-bold uppercase italic neo-border shadow-neo hover:bg-primary transition-colors cursor-pointer">UI Design</button>
                    <button className="bg-white px-6 py-2 font-bold uppercase italic neo-border shadow-neo hover:bg-primary transition-colors cursor-pointer">Branding</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Project 1 */}
                    <div className="bg-white neo-border-thick shadow-neo-lg group hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                        <div className="aspect-video w-full bg-slate-200 border-b-[6px] border-black overflow-hidden hover:border-black">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Abstract vibrant geometric shapes neon background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtU3u7mkbwPwAaPDlcCD4l0YaBz7T8M-bHExZ6RZUlMhaTbLwVmL--rEQqJPDUVQsQNxY6lOeEWJ2_75DY__qEa1IpAlCUV2OTGA6UHKYZNN4v_LVv0-5r_jvmrtuekcVa0n8hknb27H8Qb0JsSQ9ZhOOxUADZdVvIWTnQEDybt-oBnyuR8Z0jI5T07yRsdmgNLCZrzk9bIFhdT6T7OrUtgXFGOytdzNBcvP_cAhxLfYkza5WRiiGf6WTC_fvQmQ8pIrz5aAhT3f4" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-[#ff6b6b] neo-border px-2 py-0.5 text-xs font-bold uppercase">React</span>
                                <span className="bg-[#4ecdc4] neo-border px-2 py-0.5 text-xs font-bold uppercase">Three.js</span>
                                <span className="bg-[#ffe66d] neo-border px-2 py-0.5 text-xs font-bold uppercase">GSAP</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase italic leading-tight mb-6">Cyberpunk Dashboard</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a className="inline-flex items-center justify-center bg-neo-cyan neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#live">
                                    Live Link
                                </a>
                                <a className="inline-flex items-center justify-center bg-slate-100 neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#github">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white neo-border-thick shadow-neo-lg group hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                        <div className="aspect-video w-full bg-slate-200 border-b-[6px] border-black overflow-hidden hover:border-black">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Retro aesthetic hardware with neon lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgdTExcF7Yyw7DOnYd7Y4f8KxlkxuqOUKSnrsSddXMhgw7TTuu1B7JysT_BTVjDqBf8R4x-Epy7BgFe-_uMiZSb-xFlvMSrdEGPC5Qo4AAqimjzCkknBtMEWFgLDjIOtrFiMc9b3pMQqKkA-dFpgO02_EZZ759ErJMl4MsMn10BoJg3sV0u2jaATRZLrzAXGEgWyTs05NU0SzGe0B2Y91GfiLcZSuPhYwOHN4-XbHejXeBcvLW9o3dFG0zxKdCt095sp5m-iiOUiw" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-[#a29bfe] neo-border px-2 py-0.5 text-xs font-bold uppercase">Next.js</span>
                                <span className="bg-[#55efc4] neo-border px-2 py-0.5 text-xs font-bold uppercase">Tailwind</span>
                                <span className="bg-[#fab1a0] neo-border px-2 py-0.5 text-xs font-bold uppercase">Shopify</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase italic leading-tight mb-6">Neo-Mint Ecom</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a className="inline-flex items-center justify-center bg-neo-cyan neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#live">
                                    Live Link
                                </a>
                                <a className="inline-flex items-center justify-center bg-slate-100 neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#github">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white neo-border-thick shadow-neo-lg group hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                        <div className="aspect-video w-full bg-slate-200 border-b-[6px] border-black overflow-hidden hover:border-black">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="High contrast brutalist architectural structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlxXVoBKOz8KTm6f4y1E6KnVnaR_S3fbJiSVeRt5OmLpmN0nYePzCzuYzeDpvaDyJi9HkZxpYZnoBCcNdQylMuHPD2aYq8Z4AM4XdBaYE_OYIPS27bglIdtEHsOOeTyJHni5k3mBdSNeaVF88RjjWGNeySmSbYrHeNhVeFneseSdpmE_y7zbb_3AxTy5Rv4yT-3_U29Rip-APNr_rOBkjfev9H0uw4PVpWro52SlgJRseIKhDy26XCkwHrlXXRnyTjkAXvbDtysco" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-[#fdcb6e] neo-border px-2 py-0.5 text-xs font-bold uppercase">UI Design</span>
                                <span className="bg-[#e17055] neo-border px-2 py-0.5 text-xs font-bold uppercase">Motion</span>
                                <span className="bg-[#00b894] neo-border px-2 py-0.5 text-xs font-bold uppercase">WebGL</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase italic leading-tight mb-6">Futuristic Archive</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a className="inline-flex items-center justify-center bg-neo-cyan neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#live">
                                    Live Link
                                </a>
                                <a className="inline-flex items-center justify-center bg-slate-100 neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#github">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="bg-white neo-border-thick shadow-neo-lg group hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                        <div className="aspect-video w-full bg-slate-200 border-b-[6px] border-black overflow-hidden hover:border-black">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Bold black and yellow typography pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfO3MKogGU_2QjJFD1JJNVm6fzo99ib8JHKZgLazb2VRR7DX_TX9KXvaUN39j8rn_FB699PV5HDFmeeYODIJtWfzG63f8f4J-mzJuoGVWqgxEb6YkGAqzMJekIUHIqn4Eputv3lBWEXthVKnTSzGdyXlL_clPM--ofMUhYr5umVddCDEaRwDz_-QOl_V9x-pZ-Aw3q9tVGeoh5b1xxdbFr9cz4dhsUVKV986lnVyd7ChFHVjEZKJ4zrY4IjqL4JQ24lzreO-Wm1iw" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-[#81ecec] neo-border px-2 py-0.5 text-xs font-bold uppercase">p5.js</span>
                                <span className="bg-[#6c5ce7] text-white neo-border px-2 py-0.5 text-xs font-bold uppercase">Typography</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase italic leading-tight mb-6">Kinetic Type Lab</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a className="inline-flex items-center justify-center bg-neo-cyan neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#live">
                                    Live Link
                                </a>
                                <a className="inline-flex items-center justify-center bg-slate-100 neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#github">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="bg-white neo-border-thick shadow-neo-lg group hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                        <div className="aspect-video w-full bg-slate-200 border-b-[6px] border-black overflow-hidden hover:border-black">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Monochrome geometric wireframe digital pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCvPMjbKKJRVgQmCoMPijrcOwLfVK_oG0I0jFs4Wkf5toDE7oki-49eiOpHWopfNXnZUqW4PO9ldCQ_iVE6tAKflbaebG3_JqzlS_vaEB0rr16omzdrk-fHSuH-FbzQsfdsRLDmCoubabNRt95w05AP-71BUC8tnr9au0a_yXhAvTpyhpN3GnwCdnScjV9O9W0WXB9IaeJ5YbBTQuvmkPtqXQn2rQgSdLSzDEhj-rshAXgg7TVKUmWOGhSKROj3cWdyoE_20wW8cw" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-[#d63031] text-white neo-border px-2 py-0.5 text-xs font-bold uppercase">Brutalist</span>
                                <span className="bg-[#00cec9] neo-border px-2 py-0.5 text-xs font-bold uppercase">Markdown</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase italic leading-tight mb-6">Manifesto Blog</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a className="inline-flex items-center justify-center bg-neo-cyan neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#live">
                                    Live Link
                                </a>
                                <a className="inline-flex items-center justify-center bg-slate-100 neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#github">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 6 */}
                    <div className="bg-white neo-border-thick shadow-neo-lg group hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                        <div className="aspect-video w-full bg-slate-200 border-b-[6px] border-black overflow-hidden hover:border-black">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Abstract dark aesthetic design interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKdbPgZbfJHI-XjkE0wjiz_zjUVwLoDFEg_4boSraMMbLBkm345zbIRmNynpIyqeuNemZhzF1bwGV2LEIN9KOQSnJZnzTaRFoY1dwyOICG-n9E1iO7w8-IUHFr9YC_WT4Z6fzo6YiBMzavoCKonvJJyywiMot4HEzkhQb9LU_ZWTKrQHar6MTUorN3t2Ek_MSwLdlL7Mu5SzBLG8hbDItgz_PDYU6c4xG5rg9GP09StJ5HWwLizi_KtP71QYgwnO6SVYn-og3yANk" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-[#636e72] text-white neo-border px-2 py-0.5 text-xs font-bold uppercase">Figma</span>
                                <span className="bg-[#ffeaa7] neo-border px-2 py-0.5 text-xs font-bold uppercase">UX/UI</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase italic leading-tight mb-6">Void Interface</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a className="inline-flex items-center justify-center bg-neo-cyan neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#live">
                                    Live Link
                                </a>
                                <a className="inline-flex items-center justify-center bg-slate-100 neo-border-3 shadow-neo-sm py-2 px-1 font-black uppercase italic text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#github">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-24 bg-primary neo-border-thick shadow-neo-lg p-12 text-center">
                    <h4 className="text-5xl md:text-7xl font-black uppercase italic mb-8">Got a Bold Idea?</h4>
                    <p className="text-2xl font-bold mb-10 max-w-xl mx-auto italic">Let's build something that breaks the internet conventions together.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-black text-white px-10 py-4 font-black uppercase italic text-xl neo-border shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer">Start Project</button>
                        <button className="bg-white px-10 py-4 font-black uppercase italic text-xl neo-border shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer">Download CV</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Project;
