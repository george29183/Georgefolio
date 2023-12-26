import React, { useEffect, useState } from 'react';


const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.scrollY;
    const currentScrollPercentage = (scrollTop / documentHeight) * 100;

    setScrollPercentage(currentScrollPercentage);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run the effect once on mount

  return (
    <div className="sticky top-32 z-[1] left-0 w-full h-2 bg-slate-400">
      <div
        className="h-full bg-slate-900 rounded-r-lg transition-width duration-300 ease-in"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
