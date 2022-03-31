import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Yuri Andrea</h1>
                <div className='i-title'>
                  <div className='i-title-wrapper'>
                    <div className='i-title-item '>Web Developer</div>
                    <div className='i-title-item '>UI/UX Designer</div>
                    <div className='i-title-item '>Photographer</div>
                    <div className='i-title-item '>Writer</div>
                    <div className='i-title-item '>Content Creator</div>
                      
                  </div>
                </div>

              <div className='i-desc'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Animi incidunt reprehenderit odit laudantium quis, harum autem deserunt 
                  repellendus accusantium sit sed illo laborum dolore voluptas! Iste rerum 
                  unde deserunt ipsam.</p>

              </div>
            </div>
        </div>

        <div className='i-right'></div>
          <img src='' alt='' ></img>

    </div>
  )
}

export default Intro;