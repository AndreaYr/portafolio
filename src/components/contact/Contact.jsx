import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)

    

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
           setDone(true)
       }, (error) => {
           console.log(error.text);
       });
    }

  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-left'>
                <h1 className='c-title'>¡Hablemos!</h1>
                <p className='c-desc'>Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme </p>
                <div className='c-form'>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label>Tu nombre</label><br/>
                        <input type="text" placeholder='Nombre' name='user_name'/>
                        <br/>
                        <label>Tema</label><br/>
                        <input type="text" placeholder='Tema' name='user_subject'/>
                        <br/>

                        <label>Tu correo</label><br/>
                        <input type="text" placeholder='ejemplo@gmail.com' name='user_email'/>
                        <br/>

                        <label>Tu mensaje</label><br/>
                        <textarea rows="5" placeholder='Hey...' name='message'/>
                        <button className='c-button'>Enviar</button>
                        {done && "Mensaje Enviado"}
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Contact;