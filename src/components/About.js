import React from "react";
// import user from "../data/user";
import Links from "./links";



function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      { props.bio && props.bio.lenght > 1 ? <p>props.bio</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links = {props.links} />
    </div>
  );
}

export default About;
