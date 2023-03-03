import Card from '../../components/Card/index';
import OPTIONS from '../../OPTIONS';

const Panel = ({ currentFirst, currentSec, setCurrentSec }) => {
  const { children } = OPTIONS[currentFirst];

  return (
    <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
      <div className="space-y-4 mt-3">
        {children.map((info, index) => (
          <Card
            {...info}
            key={index}
            index={index}
            currentSec={currentSec}
            setCurrentSec={setCurrentSec}
          />
        ))}
      </div>
    </div>
  );
};

export default Panel;
