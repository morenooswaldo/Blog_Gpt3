import React from "react";
import possibility from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Requeste Early Access to get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyon your imagination
        </h1>
        <p>
          These are just a few of the many ways AI is being used today. As AI
          technology continues to develop, we can expect to see even more
          innovative applications in the years to come.
        </p>
        <h4>Requeste Early Access to get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
