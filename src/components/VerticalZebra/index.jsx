import { useId } from 'react';

import Zebra from '../Zebra';

const VerticalZebra = () => {
  return (
    <div className="w-full" style={{ padding: '0 1.65vh' }}>
      <div
        className="absolute w-full top-0 left-0 flex text-white"
        style={{ padding: '24vh 1.62vw 1.65vh' }}
      >
        {/* 页面中间四条竖着垂直的斑马线 */}
        {[0, 1, 2, 3].map((_) => {
          return (
            <div
              className="w-1/5 relative first-element-introduction"
              key={useId()}
            >
              <div className="absolute" style={{ right: 0, top: 0 }}>
                <Zebra size="55vh" rotate={-180} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalZebra;
