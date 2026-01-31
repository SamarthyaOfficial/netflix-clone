import React, { useState, useRef, useEffect, useCallback } from 'react'
import './NetflixPlayer.css'

// Sample subtitle data - in production, this would come from an API
const subtitleTracks = {
  english: [
    { start: 0, end: 3, text: 'Welcome to the show.' },
    { start: 4, end: 7, text: 'This is an exciting journey.' },
    { start: 8, end: 12, text: 'Our story begins here...' },
    { start: 13, end: 17, text: 'In a world full of mysteries.' },
    { start: 18, end: 22, text: 'Where nothing is as it seems.' },
    { start: 23, end: 27, text: 'Follow along as we uncover the truth.' },
    { start: 28, end: 32, text: 'Every moment counts.' },
    { start: 33, end: 37, text: 'The adventure continues...' },
  ],
  spanish: [
    { start: 0, end: 3, text: 'Bienvenidos al programa.' },
    { start: 4, end: 7, text: 'Este es un viaje emocionante.' },
    { start: 8, end: 12, text: 'Nuestra historia comienza aqui...' },
    { start: 13, end: 17, text: 'En un mundo lleno de misterios.' },
    { start: 18, end: 22, text: 'Donde nada es lo que parece.' },
    { start: 23, end: 27, text: 'Sigue mientras descubrimos la verdad.' },
    { start: 28, end: 32, text: 'Cada momento cuenta.' },
    { start: 33, end: 37, text: 'La aventura continua...' },
  ],
  french: [
    { start: 0, end: 3, text: 'Bienvenue dans le spectacle.' },
    { start: 4, end: 7, text: "C'est un voyage passionnant." },
    { start: 8, end: 12, text: 'Notre histoire commence ici...' },
    { start: 13, end: 17, text: 'Dans un monde plein de mysteres.' },
    { start: 18, end: 22, text: "Ou rien n'est ce qu'il semble." },
    { start: 23, end: 27, text: 'Suivez-nous alors que nous decouvrons la verite.' },
    { start: 28, end: 32, text: 'Chaque moment compte.' },
    { start: 33, end: 37, text: "L'aventure continue..." },
  ],
  hindi: [
    { start: 0, end: 3, text: 'शो में आपका स्वागत है।' },
    { start: 4, end: 7, text: 'यह एक रोमांचक यात्रा है।' },
    { start: 8, end: 12, text: 'हमारी कहानी यहाँ शुरू होती है...' },
    { start: 13, end: 17, text: 'रहस्यों से भरी दुनिया में।' },
    { start: 18, end: 22, text: 'जहाँ कुछ भी वैसा नहीं है जैसा दिखता है।' },
    { start: 23, end: 27, text: 'जैसे-जैसे हम सच्चाई उजागर करते हैं, साथ चलें।' },
    { start: 28, end: 32, text: 'हर पल मायने रखता है।' },
    { start: 33, end: 37, text: 'रोमांच जारी है...' },
  ],
}

const playbackSpeeds = [0.5, 0.75, 1, 1.25, 1.5, 2]

export default function NetflixPlayer({ videoUrl, title, onBack, episodeInfo }) {
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const progressRef = useRef(null)
  const controlsTimeoutRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [buffered, setBuffered] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [showSpeedMenu, setShowSpeedMenu] = useState(false)
  const [showSubtitleMenu, setShowSubtitleMenu] = useState(false)
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(false)
  const [currentSubtitleLang, setCurrentSubtitleLang] = useState('english')
  const [currentSubtitle, setCurrentSubtitle] = useState('')

  // Format time helper
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Video event handlers
  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return
    setCurrentTime(videoRef.current.currentTime)

    // Update buffered
    if (videoRef.current.buffered.length > 0) {
      setBuffered(videoRef.current.buffered.end(videoRef.current.buffered.length - 1))
    }

    // Update subtitles
    if (subtitlesEnabled) {
      const tracks = subtitleTracks[currentSubtitleLang] || []
      const current = tracks.find(
        (sub) => videoRef.current.currentTime >= sub.start && videoRef.current.currentTime <= sub.end
      )
      setCurrentSubtitle(current?.text || '')
    }
  }, [subtitlesEnabled, currentSubtitleLang])

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)

  // Control functions
  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  const handleSeek = (e) => {
    if (!progressRef.current || !videoRef.current) return
    const rect = progressRef.current.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    videoRef.current.currentTime = pos * duration
  }

  const skip = (seconds) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + seconds))
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    if (isMuted) {
      videoRef.current.volume = volume || 1
      setIsMuted(false)
    } else {
      videoRef.current.volume = 0
      setIsMuted(true)
    }
  }

  const toggleFullscreen = async () => {
    if (!playerRef.current) return
    try {
      if (!document.fullscreenElement) {
        await playerRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
    }
  }

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed)
    if (videoRef.current) {
      videoRef.current.playbackRate = speed
    }
    setShowSpeedMenu(false)
  }

  const handleSubtitleChange = (lang) => {
    setCurrentSubtitleLang(lang)
    setSubtitlesEnabled(true)
    setShowSubtitleMenu(false)
  }

  const toggleSubtitles = () => {
    if (subtitlesEnabled) {
      setSubtitlesEnabled(false)
      setCurrentSubtitle('')
    } else {
      setShowSubtitleMenu(true)
    }
  }

  // Mouse movement for controls visibility
  const handleMouseMove = useCallback(() => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
        setShowSpeedMenu(false)
        setShowSubtitleMenu(false)
      }
    }, 3000)
  }, [isPlaying])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT') return

      switch (e.key.toLowerCase()) {
        case ' ':
        case 'k':
          e.preventDefault()
          togglePlay()
          break
        case 'arrowleft':
          e.preventDefault()
          skip(-10)
          break
        case 'arrowright':
          e.preventDefault()
          skip(10)
          break
        case 'arrowup':
          e.preventDefault()
          setVolume((v) => {
            const newVol = Math.min(1, v + 0.1)
            if (videoRef.current) videoRef.current.volume = newVol
            return newVol
          })
          break
        case 'arrowdown':
          e.preventDefault()
          setVolume((v) => {
            const newVol = Math.max(0, v - 0.1)
            if (videoRef.current) videoRef.current.volume = newVol
            return newVol
          })
          break
        case 'f':
          e.preventDefault()
          toggleFullscreen()
          break
        case 'm':
          e.preventDefault()
          toggleMute()
          break
        case 'c':
          e.preventDefault()
          toggleSubtitles()
          break
        case 'escape':
          if (isFullscreen) {
            document.exitFullscreen()
            setIsFullscreen(false)
          }
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPlaying, isFullscreen, volume])

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Check if it's a YouTube URL
  const isYouTube = videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'))

  if (isYouTube) {
    const vid = videoUrl.includes('v=')
      ? new URL(videoUrl).searchParams.get('v')
      : videoUrl.split('/').pop()
    const embedUrl = `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`

    return (
      <div className="netflix-player youtube-mode" ref={playerRef}>
        <div className="player-header">
          <button className="back-btn" onClick={onBack}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            <span>Back to Browse</span>
          </button>
        </div>
        <div className="youtube-container">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="player-title-overlay">
          <h2>{title}</h2>
          {episodeInfo && <span className="episode-label">{episodeInfo}</span>}
        </div>
      </div>
    )
  }

  // Native video player for non-YouTube URLs
  // Using a sample video for demo purposes
  const demoVideoUrl = videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

  return (
    <div
      className={`netflix-player ${showControls ? 'show-controls' : ''} ${isFullscreen ? 'fullscreen' : ''}`}
      ref={playerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={demoVideoUrl}
        className="player-video"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {/* Subtitle Display */}
      {subtitlesEnabled && currentSubtitle && (
        <div className="subtitle-display">
          <span>{currentSubtitle}</span>
        </div>
      )}

      {/* Center Play Button */}
      {!isPlaying && (
        <div className="center-play-btn" onClick={togglePlay}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {/* Top Controls */}
      <div className="player-top-controls">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
      </div>

      {/* Title Overlay */}
      <div className="player-title-info">
        <h2>{title}</h2>
        {episodeInfo && <span className="episode-label">{episodeInfo}</span>}
      </div>

      {/* Bottom Controls */}
      <div className="player-bottom-controls">
        {/* Progress Bar */}
        <div className="progress-container" ref={progressRef} onClick={handleSeek}>
          <div className="progress-bar">
            <div className="progress-buffered" style={{ width: `${(buffered / duration) * 100}%` }} />
            <div className="progress-current" style={{ width: `${(currentTime / duration) * 100}%` }}>
              <div className="progress-handle" />
            </div>
          </div>
        </div>

        {/* Controls Row */}
        <div className="controls-row">
          <div className="controls-left">
            {/* Play/Pause */}
            <button className="control-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? (
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Skip Backward */}
            <button className="control-btn" onClick={() => skip(-10)} title="Rewind 10 seconds">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
              </svg>
              <span className="skip-label">10</span>
            </button>

            {/* Skip Forward */}
            <button className="control-btn" onClick={() => skip(10)} title="Forward 10 seconds">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
              </svg>
              <span className="skip-label">10</span>
            </button>

            {/* Volume */}
            <div className="volume-control">
              <button className="control-btn" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
                {isMuted || volume === 0 ? (
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : volume < 0.5 ? (
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                className="volume-slider"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
              />
            </div>

            {/* Time Display */}
            <div className="time-display">
              <span>{formatTime(currentTime)}</span>
              <span className="time-separator">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="controls-right">
            {/* Subtitles */}
            <div className="subtitle-control">
              <button
                className={`control-btn ${subtitlesEnabled ? 'active' : ''}`}
                onClick={toggleSubtitles}
                title="Subtitles"
              >
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z" />
                </svg>
              </button>
              {showSubtitleMenu && (
                <div className="dropdown-menu subtitle-menu">
                  <div className="menu-title">Subtitles</div>
                  <button
                    className={`menu-item ${!subtitlesEnabled ? 'active' : ''}`}
                    onClick={() => {
                      setSubtitlesEnabled(false)
                      setShowSubtitleMenu(false)
                    }}
                  >
                    Off
                  </button>
                  {Object.keys(subtitleTracks).map((lang) => (
                    <button
                      key={lang}
                      className={`menu-item ${subtitlesEnabled && currentSubtitleLang === lang ? 'active' : ''}`}
                      onClick={() => handleSubtitleChange(lang)}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Playback Speed */}
            <div className="speed-control">
              <button
                className="control-btn speed-btn"
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                title="Playback Speed"
              >
                <span>{playbackSpeed}x</span>
              </button>
              {showSpeedMenu && (
                <div className="dropdown-menu speed-menu">
                  <div className="menu-title">Playback Speed</div>
                  {playbackSpeeds.map((speed) => (
                    <button
                      key={speed}
                      className={`menu-item ${playbackSpeed === speed ? 'active' : ''}`}
                      onClick={() => handleSpeedChange(speed)}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fullscreen */}
            <button className="control-btn" onClick={toggleFullscreen} title="Fullscreen">
              {isFullscreen ? (
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="keyboard-hints">
        <span>Space: Play/Pause</span>
        <span>Arrow Keys: Seek/Volume</span>
        <span>F: Fullscreen</span>
        <span>M: Mute</span>
        <span>C: Subtitles</span>
      </div>
    </div>
  )
}
