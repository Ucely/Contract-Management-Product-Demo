import { useContext } from 'react';

import { DetailContext } from '../../context/Details';

import Card from '../../components/Card/index';
import OPTIONS from '../../OPTIONS';

const Panel = () => {
  const {
    currentFirst,
    currentSec,
    setCurrentSec,
    setCurrentStep,
    currentFp,
    setCurrentFp,
  } = useContext(DetailContext);

  const { children } = OPTIONS[currentFirst];
  const { scene } = children[currentSec];
  const { fp } = scene[currentFp];

  return (
    <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
      <div className="space-y-4 mt-3">
        {fp.map((info, index) => (
          <Card
            {...info}
            key={index}
            index={index}
            currentFp={currentFp}
            setCurrentSec={setCurrentSec}
            setCurrentStep={setCurrentStep}
            setCurrentFp={setCurrentFp}
          />
        ))}
      </div>
    </div>
  );
};

export default Panel;
