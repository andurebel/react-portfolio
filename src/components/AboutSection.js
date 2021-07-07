import React from "react";
//styled
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>I work to bring</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>message</span> to
            </h2>
          </Hide>
          <Hide>
            <h2>the world</h2>
          </Hide>
        </div>
        <p>
          Contact me to bring your ideas to life.I will make sure you are taking
          the best decision.
        </p>
        <button>Contact me</button>
      </Description>
      <Image>
        <img
          src="https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="me"
        />
      </Image>
    </About>
  );
};

export default AboutSection;
