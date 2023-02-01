import Stage from '../Stage/Stage.component';
import Zebra from '../Zebra/Zebra.component';
import Item from '../Item/Item.component';

const Chapter = ({ name, children }) => {
  return (
    <Stage title={name}>
      <Item {...children[0]} />
      <Zebra />
      <Item {...children[1]} />
      <Zebra />
      <Item {...children[2]} />
      <Zebra />
      <Item {...children[3]} />
      <Zebra />
      <Item {...children[4]} />
      <div
        className="absolute line-x"
        style={{
          width: '38%',
          left: '64%',
          top: '62.9vh',
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
