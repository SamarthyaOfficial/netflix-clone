import React from 'react'

function isYouTubeUrl(url) {
  return url && (url.includes('youtube.com') || url.includes('youtu.be'))
}

export default function VideoPlayer({ title }) {
  if (!title?.videoUrl) return <p>No video URL</p>
  if (isYouTubeUrl(title.videoUrl)) {
    const vid = title.videoUrl.includes('v=') ? new URL(title.videoUrl).searchParams.get('v') : title.videoUrl.split('/').pop()
    const embedUrl = `https://www.youtube.com/embed/${vid}`
    return (
      <div className="video-container">
        <iframe title={title.name} src={embedUrl} allowFullScreen />
      </div>
    )
  }
  return (
    <div className="video-container">
      <video src={title.videoUrl} controls autoPlay />
    </div>
  )
}
