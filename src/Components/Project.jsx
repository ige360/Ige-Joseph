import React from "react";
import "./Skills.css";

function Project(props) {
    return (
        <div className="project-card">
            <img src={props.img} />
            <h3>{props.projectName}</h3>
            <h4>{props.prjectInfo}</h4>
            <span className="project-span">
            <button className="btn1"><a href={props.codeLink}><i class={props.codeBtn}/></a>Code</button>
            <button className="btn2"><a href={props.demoLink}><i class={props.demoBtn}/></a>Demo</button>
            </span>
        </div>
    )
}

export default Project;