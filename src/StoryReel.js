import { requirePropFactory } from "@material-ui/core";
import React from "react";

// importing styles
import "./StoryReel.css";

// importing other components
import Story from "./Story";

// importing images
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

const StoryReel = () => {
  return (
    <div className="storyreel">
      <Story image={img2} profileSrc={img1} title="Howard Wollowitz" />
      <Story image={img2} profileSrc={img1} title="Howard Wollowitz" />
      <Story image={img2} profileSrc={img1} title="Howard Wollowitz" />
      <Story image={img2} profileSrc={img1} title="Howard Wollowitz" />
      <Story image={img2} profileSrc={img1} title="Howard Wollowitz" />
    </div>
  );
};

export default StoryReel;
