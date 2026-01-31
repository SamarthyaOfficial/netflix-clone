import React, { useRef, useState } from 'react'
import './GenreRow.css'

export default function GenreRow({ genre, titles, onTitleClick }) {
  const rowRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = () => {
    if (!rowRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction) => {
    if (!rowRef.current) return
    const scrollAmount = rowRef.current.clientWidth * 0.8
    rowRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  if (!titles?.length) return null

  return (
    <section className="genre-row">
      <h2 className="genre-row-title">{genre}</h2>
      <div className="genre-row-wrapper">
        {showLeftArrow && (
          <button
            className="genre-nav genre-nav-left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        )}
        <div
          className="genre-row-content"
          ref={rowRef}
          onScroll={handleScroll}
        >
          {titles.map((title) => (
            <div
              key={title.id}
              className="genre-card"
              onClick={() => onTitleClick && onTitleClick(title)}
            >
              <div className="genre-card-image-wrapper">
                <img
                  src={title.thumbnailUrl}
                  alt={title.name}
                  className="genre-card-image"
                  loading="lazy"
                />
                <div className="genre-card-overlay">
                  <div className="genre-card-play">
                    <svg viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="genre-card-info">
                <h3 className="genre-card-title">{title.name}</h3>
                <div className="genre-card-meta">
                  {title.releaseYear && <span>{title.releaseYear}</span>}
                  {title.rating && <span className="rating-badge">{title.rating}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            className="genre-nav genre-nav-right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}
