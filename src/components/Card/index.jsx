import { useContext } from 'react';

import { DetailContext } from '../../context/Details';

import './styles.css';

const Card = ({ name = '', desc = '', index, currentFp, setCurrentFp }) => {
  const selected = currentFp === index;
  return (
    <div
      className={`jcd-card ${selected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={() => {
        setCurrentFp(index);
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
