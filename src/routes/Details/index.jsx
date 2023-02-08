import { useContext } from 'react';

import Island from '../../components/Island';

import { NodeContext } from '../../context/Node';

import OPTIONS from '../../OPTIONS';

const Details = () => {
  const { firstClass, secondClass } = useContext(NodeContext);
  console.log('firstClass', firstClass, 'secondClass', secondClass);
  const { children } = OPTIONS[firstClass];
  const { URL } = children[secondClass];
  return (
    <div style={{ height: '100vh' }}>
      <div
        className="mt-4 position-sticky top-0 d-none d-md-block color-bg-default width-full border-bottom
      color-border-muted detail-header"
        style={{
          height: '10vh',
          position: 'absolute',
          zIndex: 6,
          background: 'white',
          width: '100%',
        }}
      >
        这里logo <br />
        今承达合同管理演示演示明细
      </div>
      <iframe
        id="detail-iframe"
        key={firstClass * 10 + secondClass}
        title="title"
        height="100%"
        width="100%"
        src={URL}
        frameborder="0"
      />
      <Island />
    </div>
  );
};

export default Details;
