import React from 'react';
import { welcome } from '../../constants/images';
import './About.scss';

const About = () => {
  return (
    <div className="app__about">
      <div>
        <h6>Welcome to</h6>
        <h1>
          San Francisco <br /> <span>AI Conference!</span>
        </h1>
        <div className="app__about-img">
          <img src={welcome} alt="Welcome" />
        </div>
      </div>
      <div>
        <p>
          Join us for an extraordinary event at the forefront of artificial
          intelligence innovation. Founded by a passionate group of
          technologists and engineers, the San Francisco AI Conference is the
          ultimate gathering for those eager to explore the limitless potential
          of AI. Prepare to be captivated by thought-provoking discussions,
          enlightening presentations, and unrivaled networking opportunities.
        </p>
        <p>
          At the San Francisco AI Conference, we go beyond the ordinary. Our
          mission is to delve into AI topics that have yet to be thoroughly
          explored. Join us as we uncover the groundbreaking impacts of AI
          across various industries and sectors. From technical innovation to
          the realms of art, music, criminal justice, immigration, and countless
          others, we'll shed light on the limitless possibilities that AI holds
          for the future.
        </p>
        <p>
          What sets us apart are the prestigious and world-renowned speakers who
          will grace our stage. These luminaries, experts in their respective
          fields, will share their insights, experiences, and visions for the
          future of AI. Be prepared to be inspired, challenged, and enlightened
          as they take you on an extraordinary journey.
        </p>
      </div>
    </div>
  );
};

export default About;
