import React from "react";
import avatar from "./../../../img/photo-cover.svg";
import './../Working'

const Card = (props) => {
    return (
        <div className="item">
            <div className="card">
                <img src={props.photo===''?`${avatar}`:props.photo} alt="avatar" />
                <h3>{props.name}</h3>
                <p>
                    {props.position} <br />{props.email} <br /> {props.phone}
                </p>
            </div>
        </div>
    );
};

export default Card;
