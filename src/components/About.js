import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <div>{user.bio}</div>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <div>{user.links}</div>
    </div>
  );
}

export default About;
