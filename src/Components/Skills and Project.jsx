import React from "react";
import Data from "../Data";
import Card from "./Card";
import {ProjectData} from "../Data"
import SkillsTitle from "./Skills header";
import ProjectTitle from "./Project header";
import Project from "./Project";
import "./Skills.css";


function entry(skillSet) {
    return (
         <Card 
            key={skillSet.id}
            icon={skillSet.icon}
            name={skillSet.name}
            example={skillSet.example}
            info={skillSet.info}
         />
    )
}

function projectEntry (project) {
    return (
        <Project 
            key={project.id}
            img={project.img_URL}
            projectName={project.name}
            prjectInfo={project.info}
            codeLink={project.link[0]}
            demoLink={project.link[1]}
            demoBtn={"fa-solid fa-arrow-up-right-from-square"}
            codeBtn={"fa-brands fa-square-github"}
        />
    )
}

function Skills() {
    return (
        <div className="skill-container">
            <SkillsTitle />
            <dl className="card-container">{Data.map(entry)}</dl><hr />
            <ProjectTitle />
            <dl className="project-container">{ProjectData.map(projectEntry)}</dl><hr className="project-cardbase"/>
        </div>
    )
}

export default Skills;