import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='h'>
        <div className='h-container'>
            <div className='h-left'>
               <h3 className='h-title'>Mi Portafolio</h3>
            </div>

            <div className='h-right'>
                <li>
                    <h3 className='h-title'>inicio</h3>
                </li>
                <li>
                    <h3 className='h-title'>Acerca de mi</h3>
                </li>
                <li>
                    <h3 className='h-title'>Proyectos</h3>
                </li>
                <li>
                    <h3 className='h-title'>Contáctame</h3>
                </li>

            </div>


        </div>
    </div>
  )
}

export default Navbar