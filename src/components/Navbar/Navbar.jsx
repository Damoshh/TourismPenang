import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { MenuItems } from './MenuItems';

export const Navbar = ({theme,setTheme}) => {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }
  
  const toggle_mode = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className="navbar">
        
      <Link to="/"className='title'>
        TOURISM PENANG.
      </Link>

      <div className='menu-mobile'>
        <img onClick={()=>{toggle_mode()}} src={ theme == 'light' ? toggle_light : toggle_dark}  alt='' className='toggle-icon-mobile' />

        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
      </div>
      <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <Link className = {item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          )
          })
        }
        <img onClick={()=>{toggle_mode()}} src={ theme == 'light' ? toggle_light : toggle_dark}  alt='' className='toggle-icon' />
      </div>
    </div>
  );
};

export default Navbar
