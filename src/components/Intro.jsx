import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
              <div className='i-presentacion'>
                <h2 className='i-intro'>Yuri Andrea</h2>
                <h3 className='i-profesion'>Desarrolladora FullStack</h3>
              </div>
              <div className='i-title'>
                <div className='i-title-wrapper'>
                  <div className='i-title-item '>Web Developer</div>
                  <div className='i-title-item '>React</div>
                  <div className='i-title-item '>JavaScript</div>
                  <div className='i-title-item '>PhP</div>
                  <div className='i-title-item '>MongoDB</div>
                    
                </div>
              </div>

              <div className='i-info'>
                <p className='i-desc'>Este es mi portafolio web!</p>
                <button className='i-button'>Ver Proyectos</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Intro;