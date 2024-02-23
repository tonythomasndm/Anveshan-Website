import React, { useEffect, useState } from 'react';

const Timeline = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section  id="timeline" className="flex flex-col justify-center w-full max-container">
            <h1 className='heading text-transparent text-stroke'>&lt;Timeline&gt;</h1>
            <div className='flex items-center justify-center lg:px-16 px-8 lg:py-24 py-12'>
            {windowWidth <= 1024 ? (
                <img src="/assets/timeline2.svg" className='' alt="" />
            ) : (
                <img src="/assets/timeline.svg" className='' alt="" />
            )}
            </div>
        </section>
    );
}

export default Timeline;
