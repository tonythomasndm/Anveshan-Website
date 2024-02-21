import React, { useState, useEffect } from 'react';

const Timeline = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);

        // Initial check for screen size
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="timeline" className="flex flex-col justify-center w-full max-container">
            <h1 className='heading'>&lt;Timeline&gt;</h1>
            {!isSmallScreen && (
                <img src="/assets/timeline.png" className="hidden sm:block max-w-full h-auto" alt="Timeline" />
            )}
            {isSmallScreen && (
                <div className="hidden sm:block">
                    <img src="/assets/mobile-view.png" className="p-20 object-contain" alt="Mobile View" />
                </div>
            )}
           
        </section>
    );
}

export default Timeline;
