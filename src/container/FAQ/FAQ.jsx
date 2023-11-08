import { OfferCard } from '../../componesnts';
import { offerData } from '../../constants/data';
import './FAQ.scss';

const FAQ = () => {
  return (
    <div className="app__faq" id="faq">
      <div className="app__faq-heading">
        <h6>what we offer</h6>
        <h1>
          Why Attend the San Francisco <br /> <span>AI Conference?</span>
        </h1>
      </div>
      <div className="app__faq-container">
        {offerData.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
