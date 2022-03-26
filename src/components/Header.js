import React from 'react'

import iconSearch from "../assets/images/icon-search 1.png"
import notification from "../assets/images/notification.png"
import round from "../assets/images/round.png"
import three from "../assets/images/3.png"


const Header = () => {
  return (
    <header>
      <div>
        <input type="text" placeholder='Ask us any question'/>
        <img src={iconSearch} alt="iconSearch" />
      </div>
      <div>
        <span>
          <img src={notification} alt="notification logo" />
          <img src={three} alt="three icon" />
        </span>
        <div>
          <img src={round} alt="round icon" />
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header