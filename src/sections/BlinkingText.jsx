import React, { useState, useEffect } from 'react';

const BlinkingText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 3000); // Change the interval time as per your preference

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-xl font-semibold">
      <span className={` border p-2 text-lg rounded-2xl border-spacing-3 text-${isVisible ? 'black' : 'white'} bg-${isVisible ? 'white' : 'red-500'}`}>Registrations open till 7 March, 2024 6pm</span>
      
    </div>
  );
};

export default BlinkingText;
