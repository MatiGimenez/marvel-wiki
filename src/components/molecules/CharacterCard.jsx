import React from 'react'
import './CharacterCard.css'

const CharacterCard = (props) => {
  return (
    <div className="character-card">
      <div className="character-card-content">
        <img width={300} height={300} alt="" src={`${props.thumbnail.path.replace('http', 'https')}.${props.thumbnail.extension}`} />
        <h3 className="character-card-content-title">{props.name}</h3>
      </div>
    </div>
  )
}

export default CharacterCard