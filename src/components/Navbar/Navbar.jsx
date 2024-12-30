import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from './MenuItems';

export const Navbar = ({theme,setTheme}) => {

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (clicked && !e.target.closest('.navbar') && !e.target.closest('.menu-icons')) {
        setClicked(false);
      }
    };
  
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [clicked]);

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
      <i onClick={toggle_mode} 
           className={`toggle-icon-mobile ${theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}`}
      />

        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
      </div>

      <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <Link 
            key={index} 
            className={item.cName} 
            to={item.url} 
            onClick={() => setClicked(false)}
          >
            <i className={item.icon}></i>
            {item.title}
          </Link>
          )
          })
        }
        <i onClick={toggle_mode} 
           className={`toggle-icon ${theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}`}
        />
      </div>
    </div>
  );
};

export default Navbar
