import React from "react";
import Card from "./Card";

const CardList = function ({robots}){
    const CardArray = robots.map(function (user,i){
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
    })
    return (
        <div className="main">
            {CardArray}
        </div>
    );
};

export default CardList;