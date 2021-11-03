import './Header.css';
import React, { useState} from 'react';
import witcherLogo from "../../images/image24.png"
import {NavLink, useHistory } from "react-router-dom";


export default function Header(props) {
 const history = useHistory();
 const [visibility, setVisibility] = useState({visibility: 'visible'})



const changeVisibilityHidden = () => {
  setVisibility({visibility: 'hidden'})
}
const changeVisibilityVisible = () => {
  setVisibility({visibility: 'visible'})
}


  

  return (
      
          <header className='header'>
          <div className='header_wrapper'>
            
        <div className = 'header_icon'>
        <NavLink to={"/home"} onClick={changeVisibilityVisible}>
          <img src={witcherLogo}  alt='Сериал Ведьмак' className='header_icon_pic'/>
          </NavLink>

            </div>


            <div  style={{ visibility: (history.location.pathname === "/home" ? 'visible' : 'hidden') }}>
            <NavLink to={"/request"}>
        <button onClick={changeVisibilityHidden}> Подключить подписку </button>
      </NavLink>
      </div>
      </div>
         
          </header>
      
  );
}



