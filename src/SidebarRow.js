import React from "react";
import "./SidebarRow.css";


// material components
import { Avatar } from "@material-ui/core";

const SidebarRow = ({src, Icon, title}) => {
    // this Icon is a component itself means we can pass a components through props as well but it has to be in capital letters
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            
            
            {/* alternative */}
            {/* {src? <Avatar src={src} /> :
            <Icon /> */}
            
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;