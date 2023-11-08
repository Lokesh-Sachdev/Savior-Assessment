import { BannerImg } from '../../constants/images';
import './Banner01.scss';

const Banner01 = () => {
  return (
    <div className="app__banner01">
      <div className="app__banner01-container">
        <div>
          <img src={BannerImg} alt="Location" />
          <h1>
            San Francisco <br /> <span>AI Conference!</span>
          </h1>
        </div>
        <div className="app__banner01-content">
          <div>
            <BannerCard title={'30'} subHeading={'Skilled Speakers'} />
            <BannerCard
              title={'4'}
              subHeading={'Days Full of Inspiration'}
              backgroundColor={'#5603B4'}
              color={'#fff'}
            />
          </div>
          <div>
            <BannerCard
              title={'2X'}
              subHeading={'Networking with Industry'}
              backgroundColor={'#5603B4'}
              color={'#fff'}
            />
            <BannerCard title={'15'} subHeading={'Unique Workshops'} />
          </div>
        </div>
      </div>
    </div>
  );
};

const BannerCard = ({ title, subHeading, backgroundColor, color }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || '#FFF',
    color: color || '#5603B4',
  };
  return (
    <div className="app__banner01-card" style={cardStyle}>
      <h3>{title}</h3>
      <p>{subHeading}</p>
    </div>
  );
};

export default Banner01;
