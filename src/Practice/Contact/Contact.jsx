import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='contact-me' id='contact_me'>
        <img src="../../images/connect.png" className='connect' alt="" />
        <div className="flex">

          <div className="contact-left">
            {/* <h3>Image here</h3> */}
            <img src="../../images/envelopee.png" alt="" />
          </div>

          <div className="contact-right">
            <h1>Get In Touch</h1>
            <form>
              <div className="flex2">

                <div className="fields">
                  <input type="text" placeholder='Firtstname...' />
                  <i className="uil uil-user icon"></i>
                </div>
                <div className="fields">
                  <input type="text" placeholder='Lastname...' />
                  <i className="uil uil-user icon"></i>
                </div>

              </div>

              <div className="flex2">

                <div className="fields">
                  <input type="text" placeholder='Email..' />
                  <i className="uil uil-envelope icon"></i>
                </div>
                <div className="fields">
                  <input type="text" placeholder='Phone No...' />
                  <i className="uil uil-phone icon"></i>
                </div>

              </div>

              <div className="fields">
                <textarea  placeholder='Message' />
                <i className="uil uil-envelope-edit icon"></i>
              </div>
              <button type='submit' className='btn send'>
                  <p>Send</p> 
                  <i class="uil uil-angle-double-right animated-icon"></i>
              </button>
            </form>
          </div>

          {/* <div className="transparent"></div> */}
        </div>
    </div>
  )
}
