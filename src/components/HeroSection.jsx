import React, { useState, useEffect, useRef, useCallback } from 'react';

const HeroSection = () => {
    const [isSalesForce, setIsSalesForce] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef(null);

    const startInterval = useCallback(() => {
        // Clear any existing interval first
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setIsSalesForce(prev => !prev);
                setIsAnimating(false);
            }, 200);
        }, 5000);
    }, []);

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, [startInterval]);

    const handleToggle = () => {
        setIsSalesForce(prev => !prev);
        // Reset the 5-second timer so it doesn't fire right after a manual click
        startInterval();
    };
    return (
        <div className="h-[94vh] sm:h-[50vh] md:min-h-screen w-screen flex justify-center selection:bg-electric-blue selection:text-white pt-5">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden ">
                <h1 className='font-extrabold absolute bottom-[60%] text-8xl rotate-90 left-8 origin-left text-black/10 md:text-9xl md:left-10 md:bottom-1/2 lg:text-9xl lg:left-10 lg:bottom-1/2' >CODER</h1>
                <h1 className='absolute top-1 left-4 md:top-1 md:left-8 px-4 py-1 neo-border bg-[#00D3F2] text-white text-xl font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all cursor-pointer z-50' >
                    <a href="">tauheed</a>
                </h1>

                <button className='w-[120px] sm:w-[130px] absolute top-1 right-4 md:top-1 md:right-8 px-4 py-1 neo-border bg-[#3cf200] text-black text-xl font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all cursor-pointer z-50'>
                    HIRE ME
                </button>


                <main className="flex-1 flex flex-col justify-start mt-20 sm:mt-0 items-center px-10 py-20 relative overflow-hidden ">


                    <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-5 z-10">
                        <div className="scale-[1.2] sm:scale-[1.3] sm:pt-10 md:p-0 md:scale-[1] flex flex-col gap-4 items-center">
                            <h1 className="text-black text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
                                <div className='pb-3 md:pb-4'>
                                    {isSalesForce ? 'SALE' : 'FULL'}<button
                                        onClick={handleToggle}
                                        className={`pr-4 neo-border ${isSalesForce ? 'bg-[#08A4E1]' : 'bg-[#05DF72]'} text-white text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all cursor-pointer ${isAnimating ? 'translate-x-3 translate-y-3 shadow-none' : ''}`} aria-label="Stack">
                                        {isSalesForce ? 'FORCE' : 'STACK'}
                                    </button>
                                </div>
                                <div className="text-[#F8F8F5]" style={{ WebkitTextStroke: 'clamp(1px, 0.3vw + 1px, 4px) black' }}>DEVELOPER</div>
                            </h1>
                        </div>

                        <div className="flex flex-wrap justify-center gap-10 sm:gap-10 mt-10 w-full">
                            <button className="min-w-[170px] h-20 neo-border bg-primary text-white text-xl font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all uppercase tracking-tight cursor-pointer">
                                View Projects
                            </button>
                            <button className="min-w-[220px] h-20 neo-border bg-neon-pink text-black text-xl font-black shadow-neo active:translate-x-3 active:translate-y-3 active:shadow-none transition-all uppercase tracking-tight cursor-pointer">
                                Download Resume
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HeroSection;
