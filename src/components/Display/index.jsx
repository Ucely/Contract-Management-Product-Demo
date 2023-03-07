import { useContext } from 'react';

import { DetailContext } from '../../context/Details';

import OPTIONS from '../../OPTIONS';

const Display = () => {
  const { currentFirst, currentSec, currentStep, currentFp } =
    useContext(DetailContext);
  const { children } = OPTIONS[currentFirst];
  const { scene } = children[currentSec];
  const { fp } = scene[currentStep];
  const { URL } = fp[currentFp];

  return (
    <div className="space-y-10" style={{ width: '100%' }}>
      <iframe src={URL} width="100%" height="100%"></iframe>
    </div>
  );
};

export default Display;
