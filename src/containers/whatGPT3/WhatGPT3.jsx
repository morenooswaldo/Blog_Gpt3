import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-features">
        <Feature
          title="What is GPT-3"
          text="Which stands for Generative Pre-trained Transformer 3, is a large language model created by OpenAI in 2020. It's known for its ability to generate realistic and creative text formats, like poems, code, scripts, musical pieces, email, letters, etc."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Are computer programs that simulate conversation with human users. They are often used in customer service applications to provide automated support and answer frequently asked questions. Chatbots can also be used for entertainment purposes, such as playing games or telling stories."
        />
        <Feature
          title="Knowledgebase"
          text="Is a collection of information stored in a specific format that a computer system can understand and use. This information is typically represented in a way that allows the system to reason about it and draw conclusions."
        />
        <Feature
          title="Education"
          text="Is a broad term encompassing the process of learning and teaching knowledge, skills, and values. It can take place in formal settings like schools and universities, or informally through life experiences and self-directed learning"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
