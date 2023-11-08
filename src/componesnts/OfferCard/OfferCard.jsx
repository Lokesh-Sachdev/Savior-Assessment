import './OfferCard.scss';

const OfferCard = ({ offerImg, offerIcon, title, description }) => {
  return (
    <div className="app__offercard">
      <div className="app__offercard-img">
        <img src={offerImg} alt="Offer" />
        <div className="app__offercard-icon">
          <img src={offerIcon} alt="Icon" />
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default OfferCard;
