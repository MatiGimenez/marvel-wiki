import React from 'react'

const CharacterCard = ({name, thumbnail}) => {

  return (
    <div>
      <div>
        <img width={300} height={300} alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
      </div>
      <h3>{name}</h3>
    </div>
  )
}

export default CharacterCard