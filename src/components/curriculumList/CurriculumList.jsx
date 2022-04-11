import React from 'react';
import './curriculumList.css';

const CurriculumList = ({title, img, desc}) => {
  return (
    <div className='cv'>
      <div className='cv-browser'>
        <div className='cv-circle'></div>
        <div className='cv-circle'></div>
        <div className='cv-circle'></div>
     
      </div>

      <img src={img} alt='' className='cv-img'/>
      <h4 className='cv-title'>{title}</h4>
      <p className='cv-desc'>{desc}</p>
      
    </div>
  )
}

export default CurriculumList
  