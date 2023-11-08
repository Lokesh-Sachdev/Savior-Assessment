import Button from '../Button/Button';
import './Ticket.scss';

const Ticket = ({ icon, title, price, heading, description }) => {
  return (
    <div className="app__ticket">
      <div>
        <img src={icon} alt="Icon" />
        <h6>{title}</h6>
      </div>
      <h1>${price}</h1>
      <h3>{heading}</h3>
      <p>{description}</p>
      <Button title={'BUY TICKET NOW'} />
    </div>
  );
};

export default Ticket;
