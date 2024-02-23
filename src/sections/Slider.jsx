import React, { useState, useEffect } from 'react';

const BannerComponent = () => {
    const [currentPos, setCurrentPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newScrollPos = window.scrollY;
            const scrollDelta = newScrollPos - scrollPos;
            setCurrentPos(currentPos + scrollDelta);
            setScrollPos(newScrollPos);
        };

        let scrollPos = window.scrollY;
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPos]);

    return (
        <div className="flex text-2xl bg-white text-black font-extrabold overflow-hidden">
            <h3 className="banner_line" id="seo" style={{ transform: `translateX(calc(${currentPos / 3}px))` }}>
                <div className="flex items-end">
                    <div className='bg-white text-black'>&lt;section&gt;&lt;/section&gt;</div>
                </div>
            </h3>
        </div>
    );
};

export default BannerComponent;
