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
        <div className="flex space-x-8 text-2xl bg-black font-extrabold">
            <h3 className="banner_line" id="seo" style={{ transform: `translateX(calc(60vw + ${currentPos / 3}px))` }}>
                <div className="flex items-end space-x-7">
                    <span className='bg-black'>&lt;section&gt; &lt;/section&gt;  &lt;div&gt; &lt;/div&gt; &lt;h1&gt; &lt;/h1&gt; &lt;article&gt;&lt;/article&gt;&lt;section&gt; &lt;/section&gt;  &lt;div&gt; &lt;/div&gt; &lt;h1&gt; &lt;/h1&gt; &lt;article&gt;&lt;/article&gt;&lt;</span>
                </div>
            </h3>
        </div>
    );
};

export default BannerComponent;
