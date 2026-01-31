import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HeroBanner({ titles }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!titles?.length) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [titles])

  if (!titles?.length) return null

  return (
    <section className="hero-banner">
      <div
        className="hero-banner-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out'
        }}
      >
        {titles.map((title) => (
          <div
            key={title.id}
            className="hero-slide"
            style={{ backgroundImage: `url(${title.thumbnailUrl})` }}
          >
            <div className="hero-slide-content">
              <h1 className="hero-slide-title">{title.name}</h1>
              <p className="hero-slide-desc">{title.description}</p>
              <div className="hero-slide-actions">
                <Link to={`/watch/${title.id}`} className="hero-play">Play</Link>
                <button type="button" className="hero-info">More Info</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-indicators">
        {titles.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`hero-indicator ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
