import { useState, useEffect } from 'react';
import { Steps, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import { HomeOutlined } from '@ant-design/icons';

import './Details.styles.css';

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + 'header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const Details = () => {
  const [index, setIndex] = useState(0);
  const [url, setUrl] = useState('');
  const next = () => {
    setIndex(index + 1);
    setUrl('http://www.bing.com');

    if (index > 2) {
      setUrl('http://localhost:5173');
    }
  };
  const description = '';

  const before = () => {
    setIndex(index - 1);
    setUrl('https://www.jincenda.com');
  };

  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };

  useEffect(() => {
    // Make the DIV element draggable:
    dragElement(document.getElementById('mydiv'));
    setUrl('https://www.jincenda.com');
  }, []);

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
        key={index}
        title="title"
        height="100%"
        width="100%"
        src={url}
        frameborder="0"
      />
      <div id="mydiv">
        <div id="mydivheader">Click here to move</div>
        <div className="relative">
          <br />
          <div style={{ display: 'inline' }}>
            您当前的位置：
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">
                  <HomeOutlined />
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item menu={{ items }}>
                <a href="">General</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Button</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <br />
          <br />
          <Steps
            // direction="vertical"
            size="small"
            current={1}
            items={[
              { title: '模板建立', description },
              {
                title: '合同发起',
                description,
              },
              {
                title: '业务审批',
                description,
              },
            ]}
            onChange={onChange}
          />
          <br />
          <button onClick={before}>上一步</button>
          <br />
          <button onClick={next}>下一步</button>
          <p>功能介绍：</p>
          <p style={{ maxWidth: '10vw' }}>
            今承达作为上海泛微网络科技股份有限公司旗下专注于合同管理的品牌，通过强大的低代码平台、
            流程引擎与丰富组件，落地合同审批规则，构建全程数字化的合同管理平台，让合同管理更加高效、合规、安全、协同。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
