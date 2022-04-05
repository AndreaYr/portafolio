import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='c'>
        <div className='c-bg'>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Contáctame</h1>
                    <p className='c-desc'>Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme </p>
                    <form>
                        <input type="text" placeholder='Name' name='user_name'/>
                        <input type="text" placeholder='Subject' name='user_subject'/>
                        <input type="text" placeholder='Email' name='user_Email'/>
                        <textarea rows="5" placeholder='Message' name='message'/>
                        <button>Enviar</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact