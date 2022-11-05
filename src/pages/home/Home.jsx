import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import "./Home.scss"

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">container</div>
    </div>
  )
}
