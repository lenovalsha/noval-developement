import React from "react";
import Navbar from "../components/navbar";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="center-absolute">
        <h1>We design and develop for you</h1>
        <div className="logo">ND</div>
      </div>
      <h2>
        Have a website that instantly sets you apart as the top choice for your
        target audience
      </h2>
    </div>
  );
};

export default home;
