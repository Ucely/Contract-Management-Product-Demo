import './styles.css';

const Card = ({
  name = '',
  desc = '',
  index,
  currentSec,
  setCurrentSec,
  setCurrentStep,
}) => {
  const selected = currentSec === index;
  return (
    <div
      className={`jcd-card ${selected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={() => {
        setCurrentSec(index);
        setCurrentStep(0);
      }}
    >
      <h5
        className="jcd-card-header"
        style={{ marginTop: selected ? 0 : '0.5em' }}
      >
        {name}
      </h5>
      {selected && <div className="jcd-card-body">{desc}</div>}
    </div>
  );
};

export default Card;
