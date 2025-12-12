import React from "react";
import "./Skills.css";

function Card(props) {
    return (
        <div className="card">
            <i class={props.icon}/>
            <h2>{props.name}</h2>
            <h4>{props.example}</h4>
            <p>{props.info}</p>
        </div>
    )
}

export default Card;