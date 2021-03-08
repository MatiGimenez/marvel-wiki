import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY, HASH, DATE } from '../../config'
import CharacterCard from '../molecules/CharacterCard';

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
          console.log(response.data.data.results)
          setCharacters(response.data.data.results)
        }});

    return () => mounted = false;
  }, [])

  return (
    <StyledMain>
      {characters && characters.map(character => <CharacterCard key={character.id} name={character.name} thumbnail={character.thumbnail} />)}
    </StyledMain>
  )
}

export default Main