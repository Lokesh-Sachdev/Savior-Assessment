import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import './SpeakerCard.scss';

const SpeakerCard = ({ imageUrl }) => {
  return (
    <div className="app__speakerCard">
      <img src={imageUrl} alt="Title" />
      <h3>Lorem Ipsum</h3>
      <p>Creative Designer</p>
      <div>
        <BiLogoFacebook />
        <BiLogoLinkedin />
        <BiLogoTwitter />
      </div>
    </div>
  );
};

export default SpeakerCard;
