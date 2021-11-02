import React from "react";
import Links from "./Links";

function About(props) {

  function renderBio(){
  if(typeof props.bio === "undefined" || props.bio === "" ){
    return null;
  }else {
  return (
    <p>{props.bio}</p>
  );
  }
}

return <div id="about">
  <h2>About Me</h2>
  {renderBio()}
  <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  <Links linkedin = {props.linkedin} github = {props.github}/>
</div>

}

export default About;
