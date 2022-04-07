import React from 'react';
import './footer.css';

const Footer = () => {
  return (


    <div className='f'>
        <div className='f-info'>
            <div className='f-info-item'>
                <h5>Inicio</h5>
                <p>Acerca de mi</p>
                <p>Proyectos</p>
                
            </div>

            <div className='f-info-item'>
                <h6>Contáctame</h6>
                <p>Correo</p>
            </div>

            <div className='f-info-item'>
                <h6>Social</h6>
                    <img 
                        src=''
                        alt=''
                        className='c-icon'
                    />
            </div>
            <hr/>
        </div>
       
    </div>
  )
}

export default Footer