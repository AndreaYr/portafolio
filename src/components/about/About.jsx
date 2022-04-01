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
                <img src={Photo} alt='' className=''/>
            </div>
        </div>
        <div className='a-right'>

        </div>
    </div>
  )
}

export default About