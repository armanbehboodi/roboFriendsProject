import React from "react";

const Scroll = (props) => {
    console.log(props);
    return (
        <div style={{overflowY : "scroll",border : "3px solid white", height: "650px"}}>
            {props.children}
        </div>
    );
};

export default Scroll;