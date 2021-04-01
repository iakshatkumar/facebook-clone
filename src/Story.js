import React from "react";

// import Styles
import "./Story.css";

// importing material components
import { Avatar } from "@material-ui/core";

const Story = ({ image, profileSrc, title }) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story" >
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story;