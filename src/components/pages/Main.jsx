import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY, HASH, DATE } from '../../config'

const StyledMain = styled.div`
  display: grid;
  grid-template: '1fr 1fr 1fr'
`;

const Main = () => {

  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    let mounted = true;
    
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${DATE}&apikey=${API_KEY}&hash=${HASH}`)
      .then(response => {
        if (mounted) {
          console.log(response)
        }});

    return () => mounted = false;
  }, [])

  return (
    <StyledMain>
      <div>HOLA</div>
      <div>HOLA</div>
      <div>HOLA</div>
      <div>HOLA</div>
      <div>HOLA</div>
      <div>HOLA</div>
      <div>HOLA</div>
      <div>HOLA</div>
    </StyledMain>
  )
}

export default Main