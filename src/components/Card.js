import React from "react";
import "../Card.css"

const Card = function (props){
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3">
            <img className="robot" src={`https://robohash.org/${props.id}`} alt={"robotImage"}/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;