import React from 'react'

export default function TitleCard({ title, onClick }) {
  return (
    <div className="title-card" onClick={() => onClick?.(title)}>
      <img src={title.thumbnailUrl} alt={title.name} />
      <span>{title.name}</span>
    </div>
  )
}
