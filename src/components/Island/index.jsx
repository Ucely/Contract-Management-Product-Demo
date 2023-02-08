import { useState, useEffect } from 'react';

import './styles.css';
import { Steps, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import dragElement from '../../utils/drag';

import { HomeOutlined } from '@ant-design/icons';

const breadcrumbItems = [
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

const description = '';
const nodeList = [
  { title: '模板建立', description, url: 'https://www.bing.com' },
  {
    title: '合同发起',
    description,
    url: 'https://www.jincenda.com',
  },
  {
    title: '业务审批',
    description,
    url: 'https://mail.qq.com',
  },
];

const Island = () => {
  const [index, setIndex] = useState(1);

  const onChange = (value) => {
    if (value > 2 || value < 0) return;
    console.log('onChange:', value);
    setIndex(value);
  };

  useEffect(() => {
    // Make the DIV element draggable:
    dragElement(document.getElementById('mydiv'));
    // setUrl('https://www.jincenda.com');
  }, []);

  const { url: nodeURL, title } = nodeList[index];

  return (
    <div id="mydiv">
      <div id="mydivheader">点击这里移动我</div>
      <div className="relative">
        {/* 这个页签组件待重写 */}
        {/* <div style={{ display: 'inline' }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item menu={{ breadcrumbItems }}>
              <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </div> */}
        {/* <Steps
          size="small"
          current={index}
          items={nodeList}
          onChange={onChange}
        /> */}
        <h4></h4>
        <p>功能介绍：</p>
        <p className="mt-1 text-slate-700" style={{ maxWidth: '20vw' }}>
          今承达作为上海泛微网络科技股份有限公司旗下专注于合同管理的品牌，通过强大的低代码平台、
          流程引擎与丰富组件，落地合同审批规则，构建全程数字化的合同管理平台，让合同管理更加高效、合规、安全、协同。
        </p>
      </div>
    </div>
  );
};

export default Island;
