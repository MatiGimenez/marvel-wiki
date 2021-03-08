import React from 'react'

const CharacterCard = ({name, thumbnail}) => {

  return (
    <>
      <div>
        <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
      </div>
      <h3>{name}</h3>
    </>
  )
}

export default CharacterCard