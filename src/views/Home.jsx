import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to RevenueHunt Test</h1>
      <div className="flexbtn">
        <Link to="/withcssgrid">
          <button className="btn-css">View with css grid layout</button>
        </Link>
        <Link to="withpolarisgridcss">
          <button className="btn-polaris">View with polaris grid layout</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
