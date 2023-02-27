import './styles.css';
import { getURLParams } from '../../utils/parseUrl';

const Card = ({
  name = '',
  URL = 'https://weapp.eteams.cn/ebdapp/view/825551168963428356',
  desc = '',
  index,
  currentSec,
  setCurrentSec,
}) => {
  const paramObj = getURLParams(document.URL);
  const { firstClass, secondClass } = paramObj;
  const first = parseInt(firstClass),
    second = parseInt(secondClass);
  const selected = currentSec === index;
  return (
    <div
      className={`card ${selected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={() => {
        setCurrentSec(index);
      }}
    >
      <h5 className="card-header" style={{ marginTop: selected ? 0 : '0.5em' }}>
        {name}
      </h5>
      {selected && <div className="card-body">{desc}</div>}
    </div>
    // hover
  );
};

export default Card;
