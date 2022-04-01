import React from 'react';
import './about.css';
import Photo from '../../assets/photo.jpg';

const About = () => {
  return (
    <div className='a'>

        <div className='a-left'>
            <div className='a-card bg'>

            </div>
            <div className='a-card'>
                <img src={Photo} alt='' className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
          <h1 className='a-title'>About Me</h1>
          <p className='a-sub'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritt asperior</p>

          <p className='a-desc'>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Temporibus totam, 
            dignissimos odit dolores excepturi corrupti 
            iusto quibusdam laborum natus omnis expedita 
            cum repudiandae aut molestias?
            Corrupti id quod optio distinctio.
          </p>
          <div className='a-award'>
              <img src='' alt='' className='a-award-img' />
              <div  className='a-award-texts'>
                <h4 className='a-award-title'>Programate</h4>
                <p className='a-award-desc'>Lorem ipsum dolor, assumenda fugiat.</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About