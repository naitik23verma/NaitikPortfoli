// import React, { useRef } from 'react';
// import ContactForm from './ContactForm.jsx';
// import "./Contact.css"
// import AvatarComponent from "./AvatarComponent.jsx"




// function Contact() {
//     return (
//         <div id="contact">
//             <div className="leftContact">
//                 <AvatarComponent />
//             </div>
//             <div className="rightContact">
//             <ContactForm />
//             </div>
//         </div>
//     )
// }

// export default Contact
import React from 'react';
import './Contact.css';
import SocialLinks from "./SocialLinks.jsx"
import AvatarComponent from './AvatarComponent.jsx';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div id="contact" className="contact-wrapper">
      <div className="leftContact">
        <AvatarComponent className="avatar-animation" />
        <SocialLinks className="social" />
      </div>
      <div className="rightContact">
        <ContactForm />
        <div className="map-container" style={{ marginTop: '2rem', borderRadius: '1rem', overflow: 'hidden' }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.143826946515!2d77.40370917526691!3d22.60378013372271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c427ab32a48b1%3A0x82e46592c144aa7c!2sMANIT%20Bhopal!5e0!3m2!1sen!2sin!4v1682526917427!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>

    </div>
    
    
  );
}

export default Contact;
