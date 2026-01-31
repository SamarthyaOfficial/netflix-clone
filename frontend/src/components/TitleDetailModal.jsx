import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TitleDetailModal({ title, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!title) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose}>×</button>
        <div
          className="modal-hero"
          style={{ backgroundImage: `url(${title.thumbnailUrl})` }}
        >
          <div className="modal-hero-content">
            <h1>{title.name}</h1>
            <div className="modal-actions">
              <Link to={`/watch/${title.id}`} className="modal-play">Play</Link>
            </div>
          </div>
        </div>
        <div className="modal-details">
          <div className="modal-meta">
            {title.releaseYear && <span>{title.releaseYear}</span>}
            {title.rating && <span>{title.rating}</span>}
            {title.type && <span>{title.type}</span>}
            {title.genre && <span>{title.genre}</span>}
          </div>
          <p className="modal-description">{title.description}</p>
          {title.cast && (
            <div className="modal-section">
              <h3>Cast</h3>
              <p>{title.cast}</p>
            </div>
          )}
          {title.languages && (
            <div className="modal-section">
              <h3>Languages</h3>
              <p>{title.languages}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
