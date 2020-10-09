import React from "react";
import "./Heading.scss";


const Heading = ( props ) => {
    return (
<div id={props.id} className="text-center mt5 mb2"><h1><span className="text-bold">{props.first} </span><span className="services">Services</span></h1></div>


    )
}


export default Heading;
