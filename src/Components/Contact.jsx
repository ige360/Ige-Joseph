import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <div className="contact-page">
            <h2>Get In Touch</h2>
            <div className="contact-info">
                <div>
                  <i class="fa-regular fa-envelope"></i>
                  <h3>Email <span>josephige365@gmail.com</span></h3>
                </div>
                <div>
                   <i class="fa-solid fa-phone"></i>
                   <h3>Phone <span>(+234) 7060768548</span></h3>
                </div>
                <div>
                   <i class="fa-solid fa-location-dot"></i>
                   <h3>Location <span>Ibadan, Nigeria</span></h3>
                </div>
            </div>
            <h2>Social Links</h2>
            <div className="links">
               <h3><a href=""><i class="fa-brands fa-linkedin"/></a><span>Linkedin</span></h3>
               <h3><a href="https://github.com/ige360?tab=repositories"><i class="fa-brands fa-github"/></a><span>Github</span></h3>
               <h3><a href=""><i class="fa-brands fa-instagram"/></a><span>Instagram</span></h3>
            </div>
            
        </div>
    )
}

export default Contact;
