import React, { useEffect, useState } from 'react';


function BannerComponent() {
  // State variables for scroll position and current position
  const [scrollPos, setScrollPos] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const newScrollPos = window.scrollY;
    const scrollDelta = newScrollPos - scrollPos;
    setCurrentPos(currentPos + scrollDelta);
    setScrollPos(newScrollPos);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos, currentPos]);

  return (
    <div className="flex space-x-8 text-2xl text-black font-extrabold">
      <h3 className="banner_line translate-x-[60vw]" id="seo">
        <div className="flex items-end space-x-7">
          <span className='text-black'>SEO</span>
        </div>
      </h3>
    </div>
  );
}

export default BannerComponent;
