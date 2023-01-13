import React from "react";
import profileImage from "../../assets/img/profile/profile.jpg";
function About() {
  return (
    <section id="about-me" className="">
      <div className="">
        <h1 id="about" className="">
          About Me
        </h1>
      </div>
      <div className="">
        <img src={profileImage} style={{ width: "100%" }} alt="profile" />
      </div>
      <p>
        Hello, my name is Kyle. I'm a full stack web developer. I'm currently seeking my first full time position 
        as a web developer.   I recently completed a six month coding bootcamp at UNC learning a verity of front
        and back end technologies.  I've also worked as an engineer for power and communications, working with 
        electrical and structural engineering.  Please take a look at my resume if you would like to learn more.  
      </p>
    </section >
  );
}

export default About;