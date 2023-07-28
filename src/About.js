import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <center>
        <h3>This is About Page</h3>
        <Link to="/">Home</Link>
        {"    "}
        <Link to="/dashboard">Dashboard</Link>
      </center>
    </div>
  );
};

export default About;
