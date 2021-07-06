import React from "react";
//styled
import styled from "styled-components";

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

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
