import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { api } from '../api/client'
import Navbar from '../components/Navbar'
import SeriesBanner from '../components/SeriesBanner'
import GenreRow from '../components/GenreRow'
import SeriesDetailModal from '../components/SeriesDetailModal'

// Genre configuration with display names
const genres = [
  { key: 'action', name: 'Action', keywords: ['Action', 'Thriller', 'Adventure'] },
  { key: 'romantic', name: 'Romantic', keywords: ['Romance', 'Drama', 'Love'] },
  { key: 'comedy', name: 'Comedy', keywords: ['Comedy', 'Funny'] },
  { key: 'thriller', name: 'Thriller', keywords: ['Thriller', 'Crime', 'Mystery', 'Horror'] },
]

export default function Home() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [allTitles, setAllTitles] = useState([])
  const [featuredTitles, setFeaturedTitles] = useState([])
  const [selectedTitle, setSelectedTitle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const [titles, featured] = await Promise.all([
          api('/api/titles'),
          api('/api/titles/featured')
        ])
        if (cancelled) return
        setAllTitles(titles)
        setFeaturedTitles(featured)
      } catch (e) {
        if (!cancelled) setError(e.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  // Filter titles by genre keywords
  const getTitlesByGenre = (keywords) => {
    return allTitles.filter((title) => {
      if (!title.genre) return false
      return keywords.some((keyword) =>
        title.genre.toLowerCase().includes(keyword.toLowerCase())
      )
    })
  }

  // Handle banner play click
  const handleBannerPlay = (title) => {
    navigate(`/watch/${title.id}`)
  }

  // Handle more info click - open modal
  const handleMoreInfo = (title) => {
    setSelectedTitle(title)
  }

  // Handle watch from modal
  const handleWatch = (title, episode = null) => {
    if (episode) {
      const params = new URLSearchParams()
      params.set('episode', episode.id)
      if (episode.videoUrl) {
        params.set('videoUrl', episode.videoUrl)
      }
      navigate(`/watch/${title.id}?${params.toString()}`)
    } else {
      navigate(`/watch/${title.id}`)
    }
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Series Banner */}
      <SeriesBanner
        titles={featuredTitles}
        onPlay={handleBannerPlay}
        onMoreInfo={handleMoreInfo}
      />

      {/* Genre Rows */}
      <div className="genre-rows-container">
        {genres.map((genre) => {
          const genreTitles = getTitlesByGenre(genre.keywords)
          if (genreTitles.length === 0) return null
          return (
            <GenreRow
              key={genre.key}
              genre={genre.name}
              titles={genreTitles}
              onTitleClick={handleMoreInfo}
            />
          )
        })}

        {/* Trending Now - Show featured titles */}
        {featuredTitles.length > 0 && (
          <GenreRow
            genre="Trending Now"
            titles={featuredTitles}
            onTitleClick={handleMoreInfo}
          />
        )}

        {/* All Titles */}
        {allTitles.length > 0 && (
          <GenreRow
            genre="Popular on Netflix"
            titles={allTitles.slice(0, 15)}
            onTitleClick={handleMoreInfo}
          />
        )}
      </div>

      {/* Series Detail Modal */}
      {selectedTitle && (
        <SeriesDetailModal
          title={selectedTitle}
          onClose={() => setSelectedTitle(null)}
          onWatch={handleWatch}
        />
      )}
    </div>
  )
}
