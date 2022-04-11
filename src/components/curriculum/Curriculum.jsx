import React from 'react';
import './curriculum.css';
import Photo from '../../assets/photo.jpg';
import CurriculumList from '../curriculumList/CurriculumList';
import { habilidades } from '../../dataHabilidades';
import darkMode from '../toggle/Toggle';

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
                Estudiante FullStack de EducaMás con amplios conocimientos en front-end, 
                desarrollados a través de proyectos propios. Busco desarrollar mi carrera, contribuyendo con mis habilidades 
                en JavaScript, React, PHP y MySql para lograr diseños finales que satisfagan las necesidades 
                y preferencias de los clientes.<br/><br/>

                Mi objetivo principal es desarrollarme profesionalmente y evolucionar en el sector de la tecnólogia,
                de modo que busco oportunidades que me permitan hacerlo, al tiempo que trataré de alinearme 
                completamente con los objetivos de la empresa.
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