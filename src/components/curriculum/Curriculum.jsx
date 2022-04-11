import React from 'react';
import './curriculum.css';
import Photo from '../../assets/photo.jpg';
import CurriculumList from '../curriculumList/CurriculumList';
import { habilidades } from '../../dataHabilidades';

const Curriculum = () => {
  return (
     <div className='curr'>
      <div className='curr-container'>
        <div className='curr-top'>
            <div className='curr-left'>
                <img src={Photo} alt='' className='curr-img'/>
            </div>
            <div className='curr-right'>
                <h1 className='curr-title'>Andrea Reyes</h1>

                <p className='curr-desc'>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Temporibus totam, 
                    dignissimos odit dolores excepturi corrupti 
                    iusto quibusdam laborum natus omnis expedita 
                    cum repudiandae aut molestias?
                    Corrupti id quod optio distinctio.
                </p>

                <p className='curr-sub'>yuriramirez5800@gmail.com</p>

            </div> 
        </div>

        <div className='curr-bottom'>
            
            <div className='curr-skills'>
                <h1 className='curr-title'>Mis habilidades</h1>

            </div> 

            <div className='pl-list'>

                {habilidades.map((item) => (
                    <CurriculumList
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}

                    />

                ))}
            
            </div>
        </div>


      </div>
    </div>
  )
}

export default Curriculum