import React from 'react';
import { HomeIcon, InfoIcon } from 'lucide-react'; 
import { Link } from "react-router-dom";
import "./Navbar.css";
import search_icon_light from '../../assets/search-w.png'
import search_icon_black from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'


export const Navbar = ({theme,setTheme}) => {

  const toggle_mode = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
      <div className="navbar">
        
          <Link to="/"className='title'>
            TOURISM PENANG
          </Link>
{/*
          <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <img src={ theme == 'light' ? search_icon_light : search_icon_black} alt='' />
          </div>
*/}
          <div className='right-section'>
            <div className='symbol-page'>
              <Link to="/"><HomeIcon size={20} /></Link>
              <Link to="/about"><InfoIcon size={20} /></Link>
            </div>            
            <img onClick={()=>{toggle_mode()}} src={ theme == 'light' ? toggle_light : toggle_dark}  alt='' className='toggle-icon' />
          </div>
      </div>
  );
};

export default Navbar
