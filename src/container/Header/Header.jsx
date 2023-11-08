import React from 'react';
import { sponserData } from '../../constants/data';
import { Button, CountdownTimer, Navbar, SponsorCard } from '../../componesnts';
import {
  headerIcon01,
  headerIcon02,
  headerIcon03,
} from '../../constants/images';
import { FiArrowUpRight } from 'react-icons/fi';
import './Header.scss';

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-main">
        <Navbar />
        <div className="app__header-content">
          <h1>San Francisco</h1>
          <h1>AI Conference!</h1>
          <p>
            Join us for an extraordinary event at the forefront of <br />
            artificial intelligence innovation.
          </p>
          <div className="app__header-speakers">
            <img src={headerIcon01} alt="Icon" />
            <img src={headerIcon02} alt="Icon" />
            <img src={headerIcon03} alt="Icon" />
            <p>Skilled Speakers</p>
            <span>
              <FiArrowUpRight />
            </span>
          </div>
          <CountdownTimer />
          <div className="app__header-actions">
            <Button title="BUY TICKETS" />
            <Button title="READ MORE" color="#fff" iconColor="#fff" />
          </div>
          <div className="app__header-footer">
            <h2>Join us at 7th San Francisco AI Conference! July 5-9 2018.</h2>
            <Button title="REGISTER NOW" color="#fff" iconColor="#fff" />
          </div>
        </div>
      </div>
      <div className="app__header-sponsers" id="sponsor">
        <div>
          {sponserData.map((sponser, index) => (
            <SponsorCard key={index} imgUrl={sponser.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
