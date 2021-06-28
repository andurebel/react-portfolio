import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>I work to bring</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>message</span> to
            </h2>
          </div>
          <div className="hide">
            <h2>the world</h2>
          </div>
        </div>
        <p>Contact me to bring your ideas to life</p>
        <button>Contact me</button>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="me"
        />
      </div>
    </div>
  );
};

export default AboutSection;
