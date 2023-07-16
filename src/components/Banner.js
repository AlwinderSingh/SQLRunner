import React, { useEffect, useState } from 'react';

const Banner = ({ activeTab }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (activeTab === 'home' && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [activeTab, animationStarted]);

  return (
    <div className={`banner ${animationStarted ? 'animate' : ''}`}>
      <h1 className="banner-text">Welcome to AtlanSQL</h1>
    </div>
  );
};

export default Banner;
