import React from 'react'
import Input from '../atoms/Input'
import './SearchArea.css'

const SearchArea = () => {

  return (
    <div className="search-area">
      <Input type="text" name="search"/>
    </div>
  )
}

export default SearchArea