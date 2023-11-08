import { logo } from '../../constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from '../Button/Button';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="app logo" />
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#speakers">Speakers</a>
        </li>
        <li>
          <a href="#sponsor">Sponsorship</a>
        </li>
        <li>
          <a href="#travel">Travel</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <Button title="BUY TICKETS" />

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} />
      </div>
    </nav>
  );
};

export default Navbar;
