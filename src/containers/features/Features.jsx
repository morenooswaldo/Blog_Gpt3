import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Building trust takes time and consistent effort, but there are some steps you can take to begin chipping away at distrust instantly.",
  },
  {
    title: "Become the tended active",
    text: "Building trust takes time and consistent effort, but there are some steps you can take to begin chipping away at distrust instantly.",
  },
  {
    title: "Message or am nothing",
    text: "Building trust takes time and consistent effort, but there are some steps you can take to begin chipping away at distrust instantly.",
  },
  {
    title: "Really boy law country",
    text: "Building trust takes time and consistent effort, but there are some steps you can take to begin chipping away at distrust instantly.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="feature">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is Now and you just need to realize it. Step into future
          today & make it happen
        </h1>
        <p>Requeste Early Access to get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
