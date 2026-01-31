import React, { useState } from 'react'
import './SeasonEpisodes.css'

export default function SeasonEpisodes({ episodesData, onEpisodeSelect, seriesName, seriesThumbnail }) {
  const [selectedSeason, setSelectedSeason] = useState(1)
  const [isSeasonDropdownOpen, setIsSeasonDropdownOpen] = useState(false)

  if (!episodesData?.seasons?.length) return null

  const currentSeason = episodesData.seasons.find(s => s.seasonNumber === selectedSeason) || episodesData.seasons[0]

  return (
    <div className="episodes-section">
      <div className="episodes-header">
        <h3 className="episodes-title">Episodes</h3>
        <div className="season-selector">
          <button
            className="season-dropdown-btn"
            onClick={() => setIsSeasonDropdownOpen(!isSeasonDropdownOpen)}
          >
            <span>Season {selectedSeason}</span>
            <svg viewBox="0 0 24 24" className={`dropdown-arrow ${isSeasonDropdownOpen ? 'open' : ''}`}>
              <path fill="currentColor" d="M7 10l5 5 5-5z" />
            </svg>
          </button>
          {isSeasonDropdownOpen && (
            <div className="season-dropdown">
              {episodesData.seasons.map((season) => (
                <button
                  key={season.seasonNumber}
                  className={`season-option ${season.seasonNumber === selectedSeason ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSeason(season.seasonNumber)
                    setIsSeasonDropdownOpen(false)
                  }}
                >
                  Season {season.seasonNumber}
                  <span className="episode-count">({season.episodes.length} Episodes)</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="episodes-list">
        {currentSeason.episodes.map((episode, index) => (
          <div
            key={episode.id}
            className="episode-card"
            onClick={() => onEpisodeSelect(episode)}
          >
            <div className="episode-number">{episode.number}</div>
            <div className="episode-thumbnail-wrapper">
              <img
                src={episode.thumbnail || seriesThumbnail || 'https://image.tmdb.org/t/p/w300/placeholder.jpg'}
                alt={`${seriesName} S${selectedSeason}E${episode.number}`}
                className="episode-thumbnail"
              />
              <div className="episode-play-overlay">
                <svg viewBox="0 0 24 24" className="play-icon">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="episode-duration">{episode.duration}</span>
            </div>
            <div className="episode-info">
              <h4 className="episode-name">{episode.title}</h4>
              <p className="episode-description">{episode.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
