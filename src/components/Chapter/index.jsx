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
      <Item {...children[0]} firstClass={index} secondClass={0} />
      <Zebra />
      <Item {...children[1]} firstClass={index} secondClass={1} />
      <Zebra />
      <Item {...children[2]} firstClass={index} secondClass={2} />
      <Zebra />
      <Item {...children[3]} firstClass={index} secondClass={3} />
      <Zebra />
      <Item {...children[4]} firstClass={index} secondClass={4} />
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
      <div className="w-1/5 flex absolute" style={{ bottom: '-5.96vh' }}>
        <div className="relative left-1/2 h-36">
          <div className="arrow-up arrow-up-first"></div>
          <div className="arrow-up arrow-up-second"></div>
        </div>
      </div>
    </Stage>
  );
};

export default Chapter;
