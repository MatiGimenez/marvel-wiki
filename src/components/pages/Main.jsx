import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios'

const StyledMain = styled.div`
  display: grid;
  grid-template: '1fr 1fr 1fr'
`;

const Main = () => {

  /* const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    let mounted = true;
    axios.get('')

    return () => mounted = false;
  }, []) */

  return (
    <StyledMain>
      <div>HOLA</div>
      <div>HOLA</div>
      <div>HOLA</div>
    </StyledMain>
  )
}

export default Main