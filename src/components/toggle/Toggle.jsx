import React, { useContext } from 'react';
import './toggle.css';
import {ThemeContext} from "../../context";
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'

const Toggle = () => {

  const theme = useContext(ThemeContext)
  const handleClick = () =>{
    theme.dispatch({type: "TOGGLE"})
  }
  
  return (
    <div className='t-container'>
      <div className='t'>
          <img src={moon} alt='' className='t-icon' />
          <img src={sun} alt='' className='t-icon' />
          <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
      </div>
    </div>
  )
}

export default Toggle;