import React from 'react';
import './about.css';
import Photo from '../../assets/photo.jpg';

const About = ({id}) => {
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
          
          <p className='a-desc'>
          Estudiante FullStack de EducaMás con amplios conocimientos en front-end, 
          desarrollados a través de proyectos propios. Busco desarrollar mi carrera, contribuyendo con mis habilidades 
          en JavaScript, React, PHP y MySql para lograr diseños finales que satisfagan las necesidades 
          y preferencias de los clientes.
          </p>

          <button className='a-button'>Más acerca de mi  </button>
        
        </div>
      </div>
    </div>
  )
}

export default About;