import React, { useState, useEffect } from 'react';
import './Landing.css';

const images = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
  'https://via.placeholder.com/600x400?text=Image+4',
];

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    const loadingInterval = setInterval(() => {
      setLoadingText((prevText) =>
        prevText.endsWith('...') ? 'Loading' : prevText + '.'
      );
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(loadingInterval);
    };
  }, []);

  // 自动轮播功能
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // 自动切换到下一张图片
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval); // 清理定时器
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="landing-container">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p className="loading-text">{loadingText}</p>
        </div>
      ) : (
        <div className="content-container">
          <header className="landing-header">
            <h1>Welcome to Our Website</h1>
            <p>Your journey to explore amazing content starts here.</p>
          </header>
          <div className="carousel-container">
            <div
              className="carousel"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
              ))}
            </div>
            <button className="nav-button left-arrow" onClick={handlePrevious}>
              &#10094; {/* 左箭头 */}
            </button>
            <button className="nav-button right-arrow" onClick={handleNext}>
              &#10095; {/* 右箭头 */}
            </button>
            <div className="dots-container">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
