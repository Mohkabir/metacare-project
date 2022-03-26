import React, { useEffect } from 'react'

import {
  Link
} from "react-router-dom";

import admin from "../assets/images/admin.png"
import helpCenter from "../assets/images/help-center.png"
import agentInbox from "../assets/images/agent-inbox.png"
import analytics from "../assets/images/analytics.png"
import marked from "../assets/images/marked.png"
import menuBar from "../assets/images/menu-bar.png"
import cancel from "../assets/images/cancel-admin.png"


const SideNav = () => {

  const [menuStatus, setMenuStatus] = React.useState(false)

  useEffect(() => {
    if(menuStatus){
      navOpened()
    }else{
      navClosed()
    }
  }, [menuStatus])

  const navOpened = () => {
    document.body.style.overflow = 'hidden';
  }
  const navClosed = () => {
    document.body.style.overflow = 'unset';
  }

  return (
    <aside className="sideNav">
        <div className="logo">
          <div>
            <h3>Metacare</h3>
            <p>adeyinka@metacare.app</p>
          </div>
        </div>  

        <img className='menuBar' onClick={() => setMenuStatus(!menuStatus)} src={ menuStatus?cancel:menuBar } 
        alt="menu" />
        <div className='sideNav_contents'>
          <ul className={ menuStatus?'open':'close' }>
            <li><Link to="/admin" onClick={() => setMenuStatus(false)}><img src={admin} alt="admin logo" /> Admin</Link></li>
            <li><Link to="/knowledge-base" onClick={() => setMenuStatus(false)}><img src={marked} alt="icon" /> Knowledge Base</Link></li>
            <li><Link to="/train-sam" onClick={() => setMenuStatus(false)}><img src={marked} alt="icon" /> Train SAM</Link></li>
            <li><Link to="/agent-inbox" onClick={() => setMenuStatus(false)}><img src={agentInbox} alt="agentInbox logo" /> Agent Inbox</Link></li>
            <li><Link to="/help-center" onClick={() => setMenuStatus(false)}><img src={helpCenter} alt="helpCenter logo" /> Help Center</Link></li>
            <li>
              <span>
                <img src={analytics} alt="analytics logo" /> Analytics
              </span>
              <ul>
                <li><Link to="/" onClick={() => setMenuStatus(false)}>Teams</Link></li>
                <li><Link to="/knowledge-base" onClick={() => setMenuStatus(false)}>Knowledge Base</Link></li>
                <li><Link to="/training-sam" onClick={() => setMenuStatus(false)}>Training SAM</Link></li>
                <li><Link to="/help-center" onClick={() => setMenuStatus(false)}>Help Center</Link></li>
              </ul>
            </li>
          </ul>
        </div>
    </aside>
  )
}

export default SideNav