import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Soy Yuri Andrea</h2>
                <h2 className='i-profesion'>Desarrolladora FullStack</h2>
                <div className='i-title'>
                  <div className='i-title-wrapper'>
                    <div className='i-title-item '>Web Developer</div>
                    <div className='i-title-item '>UI/UX Designer</div>
                    <div className='i-title-item '>Photographer</div>
                    <div className='i-title-item '>Writer</div>
                    <div className='i-title-item '>Content Creator</div>
                      
                  </div>
                </div>

         
                <p className='i-desc'>Este es mi portafolio web!</p>
                <button className='i-button'>Ver Proyectos</button>

            </div>
        </div>
    </div>
  )
}

export default Intro;