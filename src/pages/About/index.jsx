import React from "react";
import Introduce from "../../components/Introduce";
import { INTRODUCE_DATA } from "../../data";
import { Content, Wrapper } from "./About.style";

const About = () => {
  return (
    <Wrapper>
      <Content>
        <h2>What is The Movie Database?</h2>

        <div className="flex">
          <div className="height">
            {INTRODUCE_DATA.map((item) => (
              <Introduce
                key={item.id}
                title={item.title}
                src={item.src}
                p1={item.p1}
                p2={item.p2}
                p3={item.p3}
                p4={item.p4}
                p5={item.p5}
                p6={item.p6}
              />
            ))}
          </div>

          <div className="sidebar">
            <h4>Suggested Articles</h4>
            <ul>
              <li>
                <span>Getting started with Netflix</span>
              </li>
              <li>
                <span>Billing and Payments</span>
              </li>
              <li>
                <span>Netflix Gift Cards</span>
              </li>
              <li>
                <span>Can't sign in to Netflix</span>
              </li>
              <li>
                <span>How to create and edit profiles</span>
              </li>
            </ul>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default About;
