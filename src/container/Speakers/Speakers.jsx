import { SpeakerCard } from '../../componesnts';
import { speakerCardsData } from '../../constants/data';
import './Speakers.scss';

const Speakers = () => {
  return (
    <div className="app__speakers" id="speakers">
      <div className="app__speakers-heading">
        <div>
          <h6>leaders and experts</h6>
          <h1>
            Featured <span>Speakers</span>
          </h1>
          <p>
            Anticipate a dynamic assembly of visionary thinkers and seasoned
            specialists, who will generously impart their wisdom, perspectives,
            and prognostications in the field.
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,320L60,282.7C120,245,240,171,360,149.3C480,128,600,160,720,170.7C840,181,960,171,1080,149.3C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="app__speakers-container">
        {speakerCardsData.map((card) => (
          <SpeakerCard key={card.id} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
