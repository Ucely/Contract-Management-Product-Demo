import { useContext } from 'react';

import { DetailContext } from '../../context/Details';

import OPTIONS from '../../OPTIONS';

const Display = () => {
  const { currentFirst, currentSec, currentStep } = useContext(DetailContext);
  const { children } = OPTIONS[currentFirst];
  const { scene } = children[currentSec];

  return (
    <div className="space-y-10" style={{ width: '100%' }}>
      <iframe
        src={scene[currentStep]['url']}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default Display;
