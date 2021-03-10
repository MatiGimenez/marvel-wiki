import React from 'react'
import './CharacterCard.css'

const CharacterCard = (props) => {
  return (
    <div className="CharacterCard">
      <div>
        <img width={300} height={300} alt="" src={`${props.thumbnail.path.replace('http', 'https')}.${props.thumbnail.extension}`} />
      </div>
      <h3>{props.name}</h3>
    </div>
  )
}

export default CharacterCard