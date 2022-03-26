import React from 'react'

const NotAvailable = ({text}) => {
  return (
    <div className='notAvailable'>
      <h2>There is no contents for {text}</h2>
    </div>
  )
}

export default NotAvailable