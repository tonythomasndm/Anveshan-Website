
import React, { useEffect, useState } from 'react';
const Timeline = () =>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageSrc, setImageSrc] = useState("/assets/timeline.svg");

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 744) {
            setImageSrc("/assets/timeline2.svg");
        } else {
            setImageSrc("/assets/timeline.svg");
        }
    }, [windowWidth]);
    return (
        <section  id="timeline" className="flex flex-col justify-center w-full max-container">
            <h1 className='heading text-transparent text-stroke'>&lt;Timeline&gt;</h1>
                <img src={imageSrc} className="" alt="" />
        </section>
    );
}

export default Timeline;
