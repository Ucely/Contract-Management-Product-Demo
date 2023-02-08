import Stage from '../Stage/Stage.component';
import Zebra from '../Zebra';
import Item from '../Item';

const Chapter = ({ name, children, index }) => {
  return (
    <Stage title={name}>
      <div
        className="absolute line-x"
        style={{
          display: index === 0 ? 'none' : undefined,
          width: '40%',
          left: '-5px',
          top: '7.75vh',
          backgroundImage: 'url(./img/trajectory.gif)',
        }}
      ></div>
      <Item {...children[0]} imgSrc={`./img/${index}-0.png`} />
      <Zebra />
      <Item {...children[1]} imgSrc={`./img/${index}-1.png`} />
      <Zebra />
      <Item {...children[2]} imgSrc={`./img/${index}-2.png`} />
      <Zebra />
      <Item {...children[3]} imgSrc={`./img/${index}-3.png`} />
      <Zebra />
      <Item {...children[4]} imgSrc={`./img/${index}-4.png`} />
      <div
        className="absolute line-x"
        style={{
          display: index === 4 ? 'none' : undefined,
          width: '38%',
          left: '64%',
          top: '62.5vh',
          backgroundImage: 'url(./img/trajectory.gif)',
        }}
      ></div>
      <div className="w-1/5 flex absolute" style={{ bottom: '-12vh' }}>
        <div className="relative h-36" style={{ left: '37%' }}>
          <div className="arrow-up arrow-up-first"></div>
          <div className="arrow-up arrow-up-second"></div>
        </div>
      </div>
    </Stage>
  );
};

export default Chapter;
