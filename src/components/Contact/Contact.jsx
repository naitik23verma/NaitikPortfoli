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
import GradientCountUp from './GradientCountUp'
function Contact() {
  return (
    <div id="contact" className="contact-wrapper">
      <div className="leftContact">
        <AvatarComponent className="avatar-animation" />
        <SocialLinks className="social" />
        
      </div>
      <div className="rightContact">
        <ContactForm />
        

      </div>
      
    </div>


  );
}

export default Contact;
