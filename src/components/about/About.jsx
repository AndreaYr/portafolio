import React from 'react';
import './about.css';
import Photo from '../../assets/photo.jpg';

const About = () => {
  return (
    <div className='a'>
      <div className='a-container'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img src={Photo} alt='' className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
          <h1 className='a-title'>Acerca de mi</h1>
          <p className='a-sub'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritt asperior</p>

          <p className='a-desc'>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Temporibus totam, 
            dignissimos odit dolores excepturi corrupti 
            iusto quibusdam laborum natus omnis expedita 
            cum repudiandae aut molestias?
            Corrupti id quod optio distinctio.
          </p>

          <button className='a-button'>Más acerca de mi  </button>
        
        </div>
      </div>
    </div>
  )
}

export default About;