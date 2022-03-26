import React from 'react'
import iconSearch from "../assets/images/icon-search 1.png"
import GraphSection from './GraphSection'

const Analytics = () => {
  return (
    <>
      <div className='analytics'>
        <h1>Efficiency Analytics</h1>
        <div>
          <div className='input'>
            <input type="text" placeholder='Search' />
            <img src={iconSearch} alt="iconSearch" />
          </div>
          <select name="" id="">
            <option value="Filter Options">Filter Options</option>
          </select>
          <button>Export </button>
        </div>
      </div>
      <GraphSection />
    </>
  )
}

export default Analytics