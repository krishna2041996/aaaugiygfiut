import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <center>
        <h3>This is Home Page</h3>
        <Link to="/dashboard">Dashboard</Link>
        {"                              "}
        <Link to="/about">About</Link>
        <Link to="/Home">Home</Link>
      </center>
    </div>
  );
};

export default Home;
