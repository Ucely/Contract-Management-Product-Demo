import Zebra from '../Zebra/index';
import Chapter from '../Chapter/index';
import Item from '../Item/index';

import OPTIONS from '../../OPTIONS';

const Pool = () => {
  const { children } = OPTIONS[5];

  return (
    <div
      style={{
        backgroundSize: '100% auto',
        backgroundPositionY: '70%',
        paddingBottom: '6.5vh',
      }}
    >
      <div
        className="flex z-50"
        style={{ height: '80vh', padding: '1.65vh 1.46vw' }}
      >
        {[...Array(5).keys()].map((index) => (
          <Chapter {...OPTIONS[index]} key={index} index={index} />
        ))}
      </div>
      <div
        className="w-full	flex justify-between items-center relative"
        style={{
          height: '5vh',
          paddingLeft: '6vw',
          paddingRight: '6vw',
        }}
      >
        <Item {...children[0]} isBrick={true} firstClass={5} secondClass={0} />
        <Zebra rotate={-90} size="25vh" />
        <Item {...children[1]} isBrick={true} firstClass={5} secondClass={1} />
        <Zebra rotate={-90} size="25vh" />
        <Item {...children[2]} isBrick={true} firstClass={5} secondClass={2} />
        <Zebra rotate={-90} size="25vh" />
        <Item {...children[3]} isBrick={true} firstClass={5} secondClass={3} />
        <Zebra rotate={-90} size="25vh" />
        <Item {...children[4]} isBrick={true} firstClass={5} secondClass={4} />
      </div>
    </div>
  );
};

export default Pool;
