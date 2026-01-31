import React, { useState, useEffect, useCallback } from 'react'
import './SeriesBanner.css'

export default function SeriesBanner({ titles, onMoreInfo, onPlay }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const featuredSeries = titles?.filter(t => t.featured) || titles || []

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? featuredSeries.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }, [currentIndex, featuredSeries.length, goToSlide])

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % featuredSeries.length
    goToSlide(newIndex)
  }, [currentIndex, featuredSeries.length, goToSlide])

  useEffect(() => {
    if (!featuredSeries.length || !isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredSeries.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [featuredSeries.length, isAutoPlaying])

  if (!featuredSeries.length) return null

  const currentTitle = featuredSeries[currentIndex]

  return (
    <section className="series-banner">
      <div className="series-banner-slides">
        {featuredSeries.map((title, index) => (
          <div
            key={title.id}
            className={`series-banner-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${title.thumbnailUrl})` }}
          >
            <div className="series-banner-gradient" />
            <div className="series-banner-content">
              <div className="series-banner-badge">
                <span className="netflix-badge">N</span>
                <span className="series-label">{title.type === 'SERIES' ? 'S E R I E S' : 'F I L M'}</span>
              </div>
              <h1 className="series-banner-title">{title.name}</h1>
              <div className="series-banner-meta">
                {title.releaseYear && <span className="meta-item">{title.releaseYear}</span>}
                {title.rating && <span className="meta-item rating">{title.rating}</span>}
                {title.genre && <span className="meta-item">{title.genre}</span>}
              </div>
              <p className="series-banner-description">{title.description}</p>
              <div className="series-banner-actions">
                <button
                  className="banner-btn play-btn"
                  onClick={() => onPlay && onPlay(title)}
                >
                  <svg viewBox="0 0 24 24" className="btn-icon">
                    <path fill="currentColor" d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="banner-btn info-btn"
                  onClick={() => onMoreInfo && onMoreInfo(title)}
                >
                  <svg viewBox="0 0 24 24" className="btn-icon">
                    <path fill="currentColor" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11 7V9H13V7H11ZM11 11V17H13V11H11Z" />
                  </svg>
                  <span>More Info</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="banner-nav banner-nav-prev"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        className="banner-nav banner-nav-next"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="banner-indicators">
        {featuredSeries.map((_, index) => (
          <button
            key={index}
            className={`banner-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="indicator-progress" />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="banner-counter">
        <span className="current">{currentIndex + 1}</span>
        <span className="separator">/</span>
        <span className="total">{featuredSeries.length}</span>
      </div>
    </section>
  )
}
