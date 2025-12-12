import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
       <div className="base">
          <div className="first">
            <h2>PORTFOLIO.IGE</h2>
            <p>Full-stack developer passionate about creating digital experiences that bridge creativity and functionality.</p>
          </div>
          <div className="second">
            <h4>CONNECT</h4>
            <div>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/ige360?tab=repositories"><i class="fa-brands fa-github"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
       </div> <hr/>
       <div className="third">
         <h2>Designed by Ige Joseph</h2>
         <p>CopyRight @{year}</p>
         <p>Built with React and css</p>
       </div>
      
    </footer>
  );
}

export default Footer;