import React from 'react'
import Input from '../atoms/Input'
import './SearchArea.css'

const SearchArea = () => {

  return (
    <div className="search-area">
      <div className="input-container">
        <Input type="text" name="search"/>
      </div>
    </div>
  )
}

export default SearchArea