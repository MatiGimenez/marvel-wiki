import React from 'react'
import styled from 'styled-components';

const StyledMain = styled.div`
  display: grid;
  grid-template: '1fr 1fr 1fr'
`;

const Main = () => {
  return (
    <StyledMain>
      <div>HOLA</div>
      <div>HOLA</div>
      <div>HOLA</div>
    </StyledMain>
  )
}

export default Main