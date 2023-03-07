import { srcUrlPrefix } from '../../config/config';

function Zebra({
  // size = 55,
  size = '7vh',
  speed = 200,
  rotate = 0,
  stroke = 3,
  color = '#38b2ac',
}) {
  return (
    <div
      style={{
        width: '3px',
        height: `${size}`,
        backgroundImage: `url(${srcUrlPrefix}lineY1.gif)`,
        transform: `rotate(${rotate}deg)`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'repeat',
      }}
    ></div>
  );
}

export default Zebra;
