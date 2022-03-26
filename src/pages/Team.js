import React, { useState } from 'react'
import Analytics from '../components/Analytics'
import NotAvailable from '../components/NotAvailable'

const Team = () => {
const [ active , setActive ] = useState(1)

  const activate = (val) => {
    if(val === active){
      return 'active'
    }
  }

  return (
    <div className='team'>
      <div className='efficiancy_nav'>
        <ul>
          <li onClick={() => setActive(1)} className={activate(1)}>Efficiency</li>
          <li onClick={() => setActive(2)} className={activate(2)}>Volume</li>
          <li onClick={() => setActive(3)} className={activate(3)}>Customer Satisfaction</li>
          <li onClick={() => setActive(4)} className={activate(4)}>Backlog</li>
        </ul>
      </div>
      {
        active === 1?<Analytics />:
        active === 2?<NotAvailable text="Volume"/>:
        active === 3?<NotAvailable text="Customer Satisfaction"/>:
        active === 4? <NotAvailable text="Backlog"/>:""
      }
      
    </div>
  )
}

export default Team