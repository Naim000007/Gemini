import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Real = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}alt="" />
        </div>
        <div className='main-container'>
          <div className='greet'>
            <p><span>Hello, Dev</span></p>
            <p>How can I Help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful Place to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept : urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brain Strome team bonding activites for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Improve the readability of the followig code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Real