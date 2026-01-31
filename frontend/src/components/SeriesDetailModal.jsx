import React, { useState, useEffect } from 'react'
import SeasonEpisodes from './SeasonEpisodes'
import './SeriesDetailModal.css'

// Mock episodes data - in production this would come from API
const mockEpisodesData = {
  'Peaky Blinders': {
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: 1, number: 1, title: 'Episode 1', duration: '57m', thumbnail: 'https://image.tmdb.org/t/p/w300/paSUjGRxm1EXyF9VjW9Wn7bCNCT.jpg', videoUrl: 'https://www.youtube.com/watch?v=oVzVdvGICXU', description: 'Thomas Shelby plans to move up in the world.' },
          { id: 2, number: 2, title: 'Episode 2', duration: '55m', thumbnail: 'https://image.tmdb.org/t/p/w300/AnQlkqd6qSdwPq9tBg1uxcYGsLl.jpg', videoUrl: 'https://www.youtube.com/watch?v=1V3hoE5YsU8', description: 'The Shelbys get a surprise visit.' },
          { id: 3, number: 3, title: 'Episode 3', duration: '58m', thumbnail: 'https://image.tmdb.org/t/p/w300/dJ3WBQXyVNKqtB0hE8Gv4nhEhDP.jpg', videoUrl: 'https://www.youtube.com/watch?v=gsFKxMfLqN4', description: 'Tommy makes a deal with Campbell.' },
          { id: 4, number: 4, title: 'Episode 4', duration: '56m', thumbnail: 'https://image.tmdb.org/t/p/w300/8uyqRgHzI9bY3kJEaQuxXrqoA48.jpg', videoUrl: 'https://www.youtube.com/watch?v=m2v6bSGmoxU', description: 'Tensions rise in Birmingham.' },
          { id: 5, number: 5, title: 'Episode 5', duration: '59m', thumbnail: 'https://image.tmdb.org/t/p/w300/gphxpP7qWrU7Z4s4LNVbHgZMdgk.jpg', videoUrl: 'https://www.youtube.com/watch?v=0JfCpPl6qIo', description: 'The race day arrives.' },
          { id: 6, number: 6, title: 'Episode 6', duration: '60m', thumbnail: 'https://image.tmdb.org/t/p/w300/fMKnKoFP0F7BkxHx7tKr9lVZ1bQ.jpg', videoUrl: 'https://www.youtube.com/watch?v=oVzVdvGICXU', description: 'Season finale - Tommy faces his enemies.' },
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          { id: 7, number: 1, title: 'Episode 1', duration: '58m', thumbnail: 'https://image.tmdb.org/t/p/w300/ySh9LrGR3pjuZpLBxXVQ7MvL6qv.jpg', videoUrl: 'https://www.youtube.com/watch?v=qIlBYGVpXZY', description: 'Two years later, Tommy expands the business.' },
          { id: 8, number: 2, title: 'Episode 2', duration: '56m', thumbnail: 'https://image.tmdb.org/t/p/w300/sMIrvRBjCyRQB2oKJSNMvPFfNlp.jpg', videoUrl: 'https://www.youtube.com/watch?v=B-YZ8WOU1-c', description: 'A new enemy emerges.' },
          { id: 9, number: 3, title: 'Episode 3', duration: '57m', thumbnail: 'https://image.tmdb.org/t/p/w300/jF8S7U0HBzxk6PZMr8vPfpH7J3q.jpg', videoUrl: 'https://www.youtube.com/watch?v=c7rLhR9wrJQ', description: 'Tommy goes to London.' },
          { id: 10, number: 4, title: 'Episode 4', duration: '55m', thumbnail: 'https://image.tmdb.org/t/p/w300/jy1Eq9HNYJNhdJ3qIXyq5SoJfXl.jpg', videoUrl: 'https://www.youtube.com/watch?v=oVzVdvGICXU', description: 'Alliances are tested.' },
          { id: 11, number: 5, title: 'Episode 5', duration: '58m', thumbnail: 'https://image.tmdb.org/t/p/w300/fSYqwUjtv1KGrThCbUXrPPGvPw4.jpg', videoUrl: 'https://www.youtube.com/watch?v=oVzVdvGICXU', description: 'The plan comes together.' },
          { id: 12, number: 6, title: 'Episode 6', duration: '62m', thumbnail: 'https://image.tmdb.org/t/p/w300/mzlMNJQVfWl98DlYCXPQwFBW7mq.jpg', videoUrl: 'https://www.youtube.com/watch?v=oVzVdvGICXU', description: 'Season 2 finale.' },
        ]
      },
    ]
  },
  'Stranger Things': {
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: 1, number: 1, title: 'Chapter One: The Vanishing of Will Byers', duration: '49m', thumbnail: 'https://image.tmdb.org/t/p/w300/AdwF2jXvhdODr6gUZ61bHKRkz09.jpg', videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU', description: 'On his way home from a friend\'s house, young Will sees something terrifying.' },
          { id: 2, number: 2, title: 'Chapter Two: The Weirdo on Maple Street', duration: '55m', thumbnail: 'https://image.tmdb.org/t/p/w300/jDCgWVlejIo8sQYxw3Yf1cVQUIL.jpg', videoUrl: 'https://www.youtube.com/watch?v=R1ZXOOLMJ8s', description: 'Lucas, Mike and Dustin try to talk to the strange girl.' },
          { id: 3, number: 3, title: 'Chapter Three: Holly, Jolly', duration: '51m', thumbnail: 'https://image.tmdb.org/t/p/w300/wLH0kEetL6EhSBpPLElimF4CANN.jpg', videoUrl: 'https://www.youtube.com/watch?v=mndKkTvg7W0', description: 'Nancy and Jonathan form an unlikely alliance.' },
          { id: 4, number: 4, title: 'Chapter Four: The Body', duration: '51m', thumbnail: 'https://image.tmdb.org/t/p/w300/oI8SXn9VO1R3gu4eYNfuEMgLTKl.jpg', videoUrl: 'https://www.youtube.com/watch?v=vgS2L7WPIO4', description: 'Refusing to believe Will is dead, Joyce tries to contact him.' },
          { id: 5, number: 5, title: 'Chapter Five: The Flea and the Acrobat', duration: '52m', thumbnail: 'https://image.tmdb.org/t/p/w300/sLb4DP4SFNjuR0xGqe9qFJ37V7B.jpg', videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU', description: 'Hopper breaks into the lab.' },
          { id: 6, number: 6, title: 'Chapter Six: The Monster', duration: '46m', thumbnail: 'https://image.tmdb.org/t/p/w300/rKpx9obcbvJNrSKGtUH4djWLPOT.jpg', videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU', description: 'A frantic Jonathan and Nancy prepare for battle.' },
          { id: 7, number: 7, title: 'Chapter Seven: The Bathtub', duration: '41m', thumbnail: 'https://image.tmdb.org/t/p/w300/dSEPJdr1LXcjHsOyJP9iEZwn0M3.jpg', videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU', description: 'Eleven struggles to reach Will.' },
          { id: 8, number: 8, title: 'Chapter Eight: The Upside Down', duration: '55m', thumbnail: 'https://image.tmdb.org/t/p/w300/8DGivfYoprHe0PeFH60RYsGIJbk.jpg', videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU', description: 'The group infiltrates the Upside Down.' },
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          { id: 9, number: 1, title: 'Chapter One: MADMAX', duration: '48m', thumbnail: 'https://image.tmdb.org/t/p/w300/lSMJMEye7k4IFy8zSKJvOWo9FLl.jpg', videoUrl: 'https://www.youtube.com/watch?v=vgS2L7WPIO4', description: 'A year after Will\'s return, strange things happen in Hawkins.' },
          { id: 10, number: 2, title: 'Chapter Two: Trick or Treat, Freak', duration: '56m', thumbnail: 'https://image.tmdb.org/t/p/w300/cR59ql8qSLxhT8h7KQxgZlBCqME.jpg', videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU', description: 'Halloween brings unexpected visitors.' },
          { id: 11, number: 3, title: 'Chapter Three: The Pollywog', duration: '51m', thumbnail: 'https://image.tmdb.org/t/p/w300/nYKMZsV2cPE6lzs7uV7VNQHCJhD.jpg', videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU', description: 'Dustin adopts a strange new pet.' },
          { id: 12, number: 4, title: 'Chapter Four: Will the Wise', duration: '46m', thumbnail: 'https://image.tmdb.org/t/p/w300/kX0p1dvSRz17Lz5CjxX5YmYJzF4.jpg', videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU', description: 'Will\'s connection grows stronger.' },
        ]
      },
    ]
  },
  'Breaking Bad': {
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: 1, number: 1, title: 'Pilot', duration: '58m', thumbnail: 'https://image.tmdb.org/t/p/w300/ydlY3iPfeOAvu8gVqrxPoMvzNCn.jpg', videoUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY', description: 'A high school chemistry teacher is diagnosed with lung cancer.' },
          { id: 2, number: 2, title: 'Cat\'s in the Bag...', duration: '48m', thumbnail: 'https://image.tmdb.org/t/p/w300/tjuH2adsqr0EHVn1j1I3hQwbbPB.jpg', videoUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY', description: 'Walt and Jesse try to dispose of evidence.' },
          { id: 3, number: 3, title: '...And the Bag\'s in the River', duration: '48m', thumbnail: 'https://image.tmdb.org/t/p/w300/aurTSqGI5KpcUQNMCeGAWzplmFC.jpg', videoUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY', description: 'Walt faces a difficult decision.' },
          { id: 4, number: 4, title: 'Cancer Man', duration: '48m', thumbnail: 'https://image.tmdb.org/t/p/w300/1Sg8R8txTG4rZxOBnq3hVzWHlNB.jpg', videoUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY', description: 'Walt tells his family about his diagnosis.' },
          { id: 5, number: 5, title: 'Gray Matter', duration: '48m', thumbnail: 'https://image.tmdb.org/t/p/w300/6LdJEhFpEObnhRfby3aluACAWM5.jpg', videoUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY', description: 'Walt reconnects with old friends.' },
          { id: 6, number: 6, title: 'Crazy Handful of Nothin\'', duration: '48m', thumbnail: 'https://image.tmdb.org/t/p/w300/p3hMmvfmv4vc8xhGi85wdmpdoUM.jpg', videoUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY', description: 'Walt adopts a new persona.' },
          { id: 7, number: 7, title: 'A No-Rough-Stuff-Type Deal', duration: '48m', thumbnail: 'https://image.tmdb.org/t/p/w300/8nRqfMl8Is0wHqpBOT4aKQoY6dX.jpg', videoUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY', description: 'Walt and Jesse expand their operation.' },
        ]
      },
    ]
  }
}

// Default episodes for series not in mock data - uses the series thumbnail as fallback
const defaultEpisodes = {
  seasons: [
    {
      seasonNumber: 1,
      episodes: [
        { id: 1, number: 1, title: 'Episode 1', duration: '45m', thumbnail: null, description: 'The story begins.' },
        { id: 2, number: 2, title: 'Episode 2', duration: '45m', thumbnail: null, description: 'The journey continues.' },
        { id: 3, number: 3, title: 'Episode 3', duration: '45m', thumbnail: null, description: 'New challenges arise.' },
        { id: 4, number: 4, title: 'Episode 4', duration: '45m', thumbnail: null, description: 'Tensions build.' },
        { id: 5, number: 5, title: 'Episode 5', duration: '45m', thumbnail: null, description: 'A turning point.' },
        { id: 6, number: 6, title: 'Episode 6', duration: '50m', thumbnail: null, description: 'Season finale.' },
      ]
    }
  ]
}

export default function SeriesDetailModal({ title, onClose, onWatch }) {
  const [showEpisodes, setShowEpisodes] = useState(false)
  const [selectedEpisode, setSelectedEpisode] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (showEpisodes) {
          setShowEpisodes(false)
        } else {
          onClose()
        }
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, showEpisodes])

  if (!title) return null

  const episodesData = mockEpisodesData[title.name] || defaultEpisodes
  const castList = title.cast ? title.cast.split(',').map(c => c.trim()) : []
  const languagesList = title.languages ? title.languages.split(',').map(l => l.trim()) : []
  const genreList = title.genre ? title.genre.split(',').map(g => g.trim()) : []

  const handleWatchClick = () => {
    if (title.type === 'SERIES') {
      setShowEpisodes(true)
    } else {
      onWatch && onWatch(title)
    }
  }

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode)
    onWatch && onWatch(title, episode)
  }

  return (
    <div className="detail-modal-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="detail-modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        {/* Hero Section */}
        <div
          className="detail-modal-hero"
          style={{ backgroundImage: `url(${title.thumbnailUrl})` }}
        >
          <div className="detail-hero-gradient" />
          <div className="detail-hero-content">
            <h1 className="detail-title">{title.name}</h1>
            <div className="detail-hero-actions">
              <button className="detail-btn play-btn" onClick={handleWatchClick}>
                <svg viewBox="0 0 24 24" className="btn-icon">
                  <path fill="currentColor" d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" />
                </svg>
                <span>{title.type === 'SERIES' ? 'Watch' : 'Play'}</span>
              </button>
              <button className="detail-btn add-btn">
                <svg viewBox="0 0 24 24" className="btn-icon">
                  <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </button>
              <button className="detail-btn like-btn">
                <svg viewBox="0 0 24 24" className="btn-icon">
                  <path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="detail-content">
          <div className="detail-main">
            {/* Meta Info */}
            <div className="detail-meta">
              <span className="meta-match">98% Match</span>
              {title.releaseYear && <span className="meta-year">{title.releaseYear}</span>}
              {title.rating && <span className="meta-rating">{title.rating}</span>}
              {title.type === 'SERIES' && (
                <span className="meta-seasons">{episodesData.seasons.length} Season{episodesData.seasons.length > 1 ? 's' : ''}</span>
              )}
              <span className="meta-quality">HD</span>
            </div>

            {/* Description */}
            <p className="detail-description">{title.description}</p>
          </div>

          <div className="detail-sidebar">
            {/* Cast */}
            {castList.length > 0 && (
              <div className="detail-info-row">
                <span className="info-label">Cast:</span>
                <span className="info-value">{castList.join(', ')}</span>
              </div>
            )}

            {/* Genres */}
            {genreList.length > 0 && (
              <div className="detail-info-row">
                <span className="info-label">Genres:</span>
                <span className="info-value">{genreList.join(', ')}</span>
              </div>
            )}

            {/* Languages */}
            {languagesList.length > 0 && (
              <div className="detail-info-row">
                <span className="info-label">Languages:</span>
                <span className="info-value">{languagesList.join(', ')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Episodes Section - Shows when Watch is clicked for series */}
        {showEpisodes && title.type === 'SERIES' && (
          <SeasonEpisodes
            episodesData={episodesData}
            onEpisodeSelect={handleEpisodeSelect}
            seriesName={title.name}
            seriesThumbnail={title.thumbnailUrl}
          />
        )}

        {/* Similar Titles Section Placeholder */}
        <div className="detail-section">
          <h3 className="detail-section-title">More Like This</h3>
          <p className="detail-section-placeholder">Similar titles will appear here</p>
        </div>
      </div>
    </div>
  )
}
