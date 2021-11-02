import './Header.css';
import React, { useState} from 'react';
import witcherLogo from "../../images/image24.png"
import {NavLink, useHistory } from "react-router-dom";


export default function Header(props) {
 const history = useHistory();
 const [visibility, setVisibility] = useState({visibility: 'visible'})



const changeVisibility = () => {
  setVisibility({visibility: 'hidden'})
}

  

  return (
      
          <header className='header'>
          <div className='header_wrapper'>
            
        <div className = 'header_icon'>
                <a href='/' className='header_icon_link'>
          <img src={witcherLogo}  alt='Сериал Ведьмак' className='header_icon_pic'/>
          </a>
            </div>
            <div  style={{ visibility: (history.location.pathname !== "/request" ? 'visible' : 'hidden') }}>
            {/* <NavLink to={"/request"}> */}
        <button onClick={changeVisibility}> Подключить подписку </button>
      {/* </NavLink> */}
      </div>
      </div>
         
          </header>
      
  );
}



