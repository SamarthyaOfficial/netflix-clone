import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({ title }) {
  if (!title) return null
  return (
    <section className="hero" style={{ backgroundImage: `url(${title.thumbnailUrl})` }}>
      <div className="hero-content">
        <h1 className="hero-title">{title.name}</h1>
        <p className="hero-desc">{title.description}</p>
        <Link to={`/watch/${title.id}`} className="hero-play">Play</Link>
      </div>
    </section>
  )
}
