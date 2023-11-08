import { Button, Ticket } from '../../componesnts';
import { ticketData } from '../../constants/data';
import './Travel.scss';

const Travel = () => {
  return (
    <div className="app__travel" id="travel">
      <div className="app__travel-content">
        <div className="app__travel-heading">
          <div>
            <h1>
              Choose your <span>Ticket</span>
            </h1>
            <Button
              title={'VIEW ALL TICKETS'}
              backgroundColor="#f1f1f1"
              borderRadius="0"
            />
          </div>
          <div className="app__travel-price">
            <span>Pricing Plans</span>
            <div />
          </div>
          <p>
            Attending such an event can expose you to different ways of thinking
            about economic issues and help you broaden your understanding of the
            field.
          </p>
        </div>
        <div className="app__travel-tickets">
          {ticketData.map((ticket, index) => (
            <Ticket key={index} {...ticket} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travel;
