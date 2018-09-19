import React from 'react';

const IntroOverlay = () => {
  const isHome = document.body.classList.contains("homepage");
  const isAtTheTop = window.pageYOffset < window.innerHeight;
    
  if (isHome && isAtTheTop) {
    window.scrollTo(0, 0);
    document.querySelector(".intro-overlay-text").innerHTML = "";
    document.body.classList.add("intro-animation");
    setTimeout(() => {
      document.body.classList.add("intro-initialized");
    }, 2000);
  } else {
    setTimeout(() => {
      document.body.classList.add("intro-initialized");
    }, 200);
  }

  return (
    <div className="intro-overlay">
      <span className="intro-overlay-text">{isHome && isAtTheTop ? "Almost there..." : "" }</span>
    </div>
  );
};

export default IntroOverlay;
