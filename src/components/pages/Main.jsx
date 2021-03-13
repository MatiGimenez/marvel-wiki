import React from 'react'
import Header from '../organisms/Header'
import Dashboard from '../templates/Dashboard'
import './Main.scss'

const Main = () => {

  return (
    <div className="main-page">
      <Header />
      <Dashboard/>
    </div>
  )
}

export default Main