import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import '../styles/LatestSeriesCarousel.css';

function LatestSeriesCarousel() {
  const [titles, setTitles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const autoScrollTimer = useRef(null);

  useEffect(() => {
    fetchLatestTitles();
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollTimer.current) {
        clearTimeout(autoScrollTimer.current);
      }
    };
  }, [titles, currentIndex]);

  const fetchLatestTitles = async () => {
    try {
      setLoading(true);
      const response = await api('/api/titles/latest');
      setTitles(response);
      setCurrentIndex(0);
    } catch (error) {
      console.error('Error fetching latest titles:', error);
    } finally {
      setLoading(false);
    }
  };

  const startAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearTimeout(autoScrollTimer.current);
    }
    
    autoScrollTimer.current = setTimeout(() => {
      if (titles.length > 0) {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }, 6000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (autoScrollTimer.current) {
      clearTimeout(autoScrollTimer.current);
    }
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? titles.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % titles.length);
  };

  const handlePlayClick = (titleId) => {
    navigate(`/title/${titleId}`);
  };

  if (loading) {
    return (
      <div className="carousel-container loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (titles.length === 0) {
    return null;
  }

  const currentTitle = titles[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {titles.map((title, index) => (
          <div
            key={title.id}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${title.thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {index === currentIndex && (
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1 className="carousel-title">{currentTitle.name}</h1>
                  <p className="carousel-description">{currentTitle.description}</p>
                  
                  <div className="carousel-meta">
                    <span className="carousel-type">
                      {currentTitle.type === 'SERIES' ? '📺 Series' : '🎬 Movie'}
                    </span>
                    {currentTitle.rating && (
                      <span className="carousel-rating">⭐ {currentTitle.rating}</span>
                    )}
                    {currentTitle.duration && currentTitle.type === 'MOVIE' && (
                      <span className="carousel-duration">⏱️ {currentTitle.duration} min</span>
                    )}
                  </div>

                  <button
                    className="carousel-play-btn"
                    onClick={() => handlePlayClick(currentTitle.id)}
                  >
                    ▶️ View Details
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button className="carousel-nav-btn carousel-prev" onClick={goToPrev}>
        ❮
      </button>
      <button className="carousel-nav-btn carousel-next" onClick={goToNext}>
        ❯
      </button>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {titles.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestSeriesCarousel;
