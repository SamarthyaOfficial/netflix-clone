import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '../api/client'
import NetflixPlayer from '../components/NetflixPlayer'

export default function Watch() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const episodeId = searchParams.get('episode')
  const episodeVideoUrl = searchParams.get('videoUrl')

  useEffect(() => {
    let cancelled = false
    api(`/api/titles/${id}`)
      .then((data) => { if (!cancelled) setTitle(data) })
      .catch((e) => { if (!cancelled) setError(e.message) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [id])

  const handleBack = () => {
    navigate(-1)
  }

  if (loading) {
    return (
      <div className="watch-loading">
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="watch-error">
        <p>Error: {error}</p>
        <button onClick={handleBack}>Go Back</button>
      </div>
    )
  }

  if (!title) return null

  // Build episode info string if watching a specific episode
  let episodeInfo = null
  if (episodeId && title.type === 'SERIES') {
    episodeInfo = `Episode ${episodeId}`
  }

  // Use episode video URL if available, otherwise fall back to title video URL
  const videoUrl = episodeVideoUrl || title.videoUrl

  return (
    <NetflixPlayer
      videoUrl={videoUrl}
      title={title.name}
      onBack={handleBack}
      episodeInfo={episodeInfo}
    />
  )
}
