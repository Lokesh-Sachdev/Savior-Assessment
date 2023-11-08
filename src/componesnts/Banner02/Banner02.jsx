import Button from '../Button/Button';
import './Banner02.scss';

const Banner02 = () => {
  return (
    <div className="app__banner02">
      <h1>
        Don't miss out on <br /> <span>this extraordinary event!</span>
      </h1>
      <p>
        Register now to secure your spot at the San Francisco AI Conference.
        Experience the thrill of being part of a groundbreaking conference that
        pushes the boundaries of AI exploration. Together, let's unlock the
        limitless possibilities of artificial intelligence.
      </p>
      <Button title="REGISTER NOW" color="#5603B4" />
    </div>
  );
};

export default Banner02;
