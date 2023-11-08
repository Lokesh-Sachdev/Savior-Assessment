import { FiArrowUpRight } from 'react-icons/fi';

const Button = ({ title, backgroundColor, color, iconColor, borderRadius }) => {
  const btnStyle = {
    backgroundColor: backgroundColor || '#fff',
    color: color || '#000014',
    borderRadius: borderRadius || '50px',
  };

  const iconStyle = {
    color: iconColor || '#8D36DF',
  };
  return (
    <button className="app__btn" style={btnStyle}>
      <FiArrowUpRight size={15} style={iconStyle} /> {title}
    </button>
  );
};

export default Button;
