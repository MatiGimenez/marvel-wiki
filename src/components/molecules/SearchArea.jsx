import React from 'react'
import Input from '../atoms/Input'
import './SearchArea.css'

const SearchArea = () => {

  return (
    <div className="search-area">
      <div className="input-container">
        <i className="fas fa-search"></i>
        <Input type="text" name="search"/>
      </div>
    </div>
  )
}

export default SearchArea