import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

    const formRef = useRef();

    const handleSubmit = (e) =>{
       e.preventDefault();

       emailjs.sendForm(
        'service_28tr9qt', 
        'template_xfom3wk',
        formRef.current, 
        'v19y4yH88OtADkVR9'
        )

       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
    }

  return (
    <div className='c'>
        <div className='c-bg'>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>¡Hablemos!</h1>
                    <p className='c-desc'>Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme </p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label>Tu nombre</label><br/>
                        <input type="text" placeholder='Nombre' name='user_name'/>
                        <br/>
                        <label>Tema</label><br/>
                        <input type="text" placeholder='Tema' name='user_subject'/>
                        <br/>

                        <label>Tu correo</label><br/>
                        <input type="text" placeholder='Correo' name='user_email'/>
                        <br/>

                        <label>Tu mensaje</label><br/>
                        <textarea rows="5" placeholder='Mensaje' name='message'/>
                        <button className='c-button'>Enviar</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact