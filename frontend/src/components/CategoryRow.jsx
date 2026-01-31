import React from 'react'
import TitleCard from './TitleCard'

export default function CategoryRow({ name, titles, onTitleClick }) {
  return (
    <section className="category-row">
      <h2 className="category-title">{name}</h2>
      <div className="title-row">
        {titles?.map((t) => (
          <TitleCard key={t.id} title={t} onClick={onTitleClick} />
        ))}
      </div>
    </section>
  )
}
