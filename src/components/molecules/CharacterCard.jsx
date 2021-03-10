import React from 'react'
import styled from 'styled-components'

const CharacterCard = styled((props) => {

  return (
    <div className="CharacterCard">
      <div>
        <img width={300} height={300} alt="" src={`${props.thumbnail.path.replace('http', 'https')}.${props.thumbnail.extension}`} />
      </div>
      <h3>{props.name}</h3>
    </div>
  )
})`
  .CharacterCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px none black;
  }
`

export default CharacterCard