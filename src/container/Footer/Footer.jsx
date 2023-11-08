import { CountdownTimer } from '../../componesnts';
import { atRateIcon, logo } from '../../constants/images';
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer" id="contact">
      <div className="app__footer-count">
        <h2>
          Count Every <br /> <span>Second Until Event</span>
        </h2>
        <CountdownTimer />
      </div>
      <div className="app__footer-main">
        <div>
          <div className="app__footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <h4>quick links</h4>
          <ul>
            <li>Home</li>
            <li>Speakers</li>
            <li>Sponsorship</li>
            <li>Travel</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="app__footer-contact">
          <h4>Contact Us</h4>
          <p>
            27 Division St, San Francisco,
            <br /> SF 94016, USA
          </p>
          <p>+1 800 123 456 789</p>
          <div>
            <BiLogoFacebook />
            <BiLogoLinkedin />
            <BiLogoTwitter />
          </div>
        </div>
        <div>
          <h4>Subscribe</h4>
          <div>
            <p>Get news & updates</p>
            <img src={atRateIcon} alt="@" />
          </div>
          <p>
            Our expertise, as well as our passion for web design, sets us apart
            from other agencies.
          </p>
        </div>
      </div>

      <div className="app__footer-trademark">
        <p>© 2023 San Francisco AI Conference LLC. All Rights Reserved.</p>
        <p>
          Made w/
          <span>
            <FaHeart />
          </span>
          Savior
        </p>
        <p>
          Terms of Use <span>|</span> Proposal Terms
        </p>
      </div>
    </div>
  );
};

export default Footer;
