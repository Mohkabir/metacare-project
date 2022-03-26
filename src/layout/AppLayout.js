
import React from 'react'
import Header from '../components/Header'

import SideNav from "../components/SideNav"

const AppLayout = (props) => {

  return (
    <div className='applayout'>
      <SideNav />
      <div className='children'>
        <Header />
        {props.children}
      </div>
      {/* <Nav landingPage={landingPage} setModalShow={openAuth}/> */}
  
      {/* <AuthModal 
      show={modalShow}
      onHide={() => setModalShow(false)}
      setModalShow={setModalShow}
      /> */}
    </div>
  )
}

export default AppLayout