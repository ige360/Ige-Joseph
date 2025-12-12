import React from "react";
import "./Header.css";

function Header() {
    return (
           <header>
               <img src="/Portfolio_image.jpg"/>
               <h2>Ige Joseph Oluwatobiloba</h2>
               <h4>FullStack Developer <span><i class="fa-solid fa-location-dot"></i>Ibadan, Nigeria</span></h4>
               <div>
                <h3>Quick Info About Me</h3>
                <p>Hello, I'm Ige Joseph, an aspiring <span>FullStack Web Developer</span> and a final-year Petroleum Engineering student at the University of Ibadan. I am actively seeking opportunities in the tech industry where I can contribute my skills and drive to the growth of a project, team, or organization.</p>
               </div>
               <hr />
           </header>
    )
}

export default Header;