import './Item.styles.css';
import { Link } from 'react-router-dom';

const Item = ({
  name,
  firstClass,
  secondClass,
  isBrick = false,
  isBlock = false,
  isActive = false,
}) => {
  const brick = (
    <div className="z-10 relative" style={{ width: '11%' }}>
      <Link
        to={`/details?firstClass=${firstClass}&secondClass=${secondClass}$thirdClass=0`}
      >
        <div
          className="w-full pt-2 pb-3 flex justify-center relative items-center cursor-pointer analysis transition duration-100"
          style={{
            background:
              'linear-gradient(230deg, rgba(5,109,208,0.6), rgba(5,109,208,0.6))',
            border: '1px solid #6094E3',
          }}
        >
          <i className="icon_leftTopRadius"></i>
          <span
            className="icon_leftTopLine line"
            style={{ background: '#6094E3' }}
          ></span>
          <img
            className="icon"
            src={`./img/${firstClass}-${secondClass}.png`}
          />
          <div
            className="text-cente ml-5 rounded-full text-xs"
            style={{ color: '#FFFFFF' }}
          >
            {name}
          </div>
          <div
            className="absolute w-full"
            style={{
              height: '0.42rem',
              bottom: '0',
              left: '0',
              background: '#055CE2',
              opacity: '0.4',
            }}
          ></div>
        </div>
      </Link>
    </div>
  );

  if (isBrick) {
    return brick;
  }

  const round = (
    <div
      className="rounded-full shadow-xl flex flex-col justify-center items-center z-50 | circle icon-circle"
      style={{
        width: '6.7vh',
        height: '6.7vh',
        background:
          'linear-gradient(230deg, rgba(0, 255, 226, 0.3), rgba(0, 255, 226, 0.3))',
      }}
    >
      <img className="icon" src={`./img/${firstClass}-${secondClass}.png`} />
      <div
        className="w-28 p-1 absolute py text-center rounded-full text-xs z-50 font-normal transition duration-100"
        style={{
          width: '5.1vw',
          top: '5.29vh',
          background: '#082772',
          border: '1px solid rgba(5, 92, 226, 1)',
          color: ' #FFFFFF',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </div>
    </div>
  );
  const roundPro = (
    <div
      className={`rounded-full shadow-xl flex flex-col justify-center items-center z-50 | circle`}
      style={{
        width: '6.7vh',
        height: '6.7vh',
        background:
          'linear-gradient(230deg, rgba(0, 255, 226, 0.3), rgba(0, 255, 226, 0.3))',
      }}
    >
      <img className="icon" src={`./img/${firstClass}-${secondClass}.png`} />
      <div
        className="p-1 absolute py text-center rounded-full text-xs z-50 font-medium transition duration-100"
        style={{
          width: '5.1vw',
          top: '5.29vh',
          background: '#082772',
          border: '1px solid rgba(5, 92, 226, 1)',
          color: ' #FFFFFF',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </div>
    </div>
  );

  const tick = (
    <div
      className="absolute right-0 z-50 leading-none transform"
      style={{ transform: 'translateX(50%)', top: 'calc(50% - 11px)' }}
    >
      <img src="./img/right.png" />
    </div>
  );

  return (
    <Link
      to={`/details?firstClass=${firstClass}&secondClass=${secondClass}&thirdClass=0`}
    >
      <div
        className={`w-16 cursor-pointer text-center flex flex-col justify-center items-center relative rounded-full`}
      >
        {isBlock ? round : roundPro}
        {isActive && tick}
      </div>
    </Link>
  );
};

export default Item;
