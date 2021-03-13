import React from 'react'
import Input from '../atoms/Input'
import './SearchArea.scss'

const SearchArea = () => {

  return (
    <div className="search-area">
      <div className="input-container">
        <h1 className="search-area-title">Aquí podés buscar Personajes y Cómics</h1>
        <Input type="text" name="search"/>
      </div>
    </div>
  )
}

export default SearchArea