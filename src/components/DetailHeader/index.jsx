import { srcUrlPrefix, pageUrlPrefix } from '../../config/config';
import { HomeOutlined } from '@ant-design/icons';

import { Steps } from 'antd';

import { Breadcrumb } from 'antd';

import { Divider, Popover } from 'antd';
import { Link } from 'react-router-dom';
import OPTIONS from '../../OPTIONS';

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

const content = (
  <div>
    {/* <p className="text-base font-bold mt-2 mb-2">销售</p>
  <p className="font-bold">销售经理: 张慧 </p>
  <p>手机: 181-2117-1364</p>
  <div className="mb-2" style={{ display: 'flex' }}>
    微信:
    <img
      src={srcUrlPrefix + 'hui.jpg'}
      alt=""
      style={{ width: '8vw', marginLeft: '5px' }}
    />
  </div>
  <Divider style={{ margin: '10px 0' }} /> */}
    <p className="text-base font-bold mt-2 mb-2">关于我们</p>
    <p className="font-bold">产品总监: 章洁</p>
    <p>搭建实施：荣冬冬、缪琨、刘俊 </p>
    <p className="mb-2">体验站开发：刘俊 </p>
  </div>
);

const DetailHeader = ({
  handleStepChange,
  currentStep,
  currentFirst,
  currentSec,
}) => {
  const { children } = OPTIONS[currentFirst];
  const { scene } = children[currentSec];

  return (
    <div className="max-w-8xl mx-auto">
      <div className="py-4 border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10 mx-4 lg:mx-0">
        <div className="relative flex items-center">
          <div className="xl:w-72 w-48" style={{ fontSize: '16px' }}>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item
                menu={{
                  items,
                }}
              >
                <a href="">General</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item
                menu={{
                  items,
                }}
              >
                <a href="">General</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <Steps
            className=""
            size="small"
            current={currentStep}
            items={scene}
            onChange={handleStepChange}
            style={{ width: '30vw' }}
          />

          <div className="relative lg:flex items-center ml-auto">
            <div className="flex items-center  border-slate-200 ml-6 pl-6 dark:border-slate-800">
              <a
                className="mr-3 flex overflow-hidden md:w-auto"
                href={pageUrlPrefix}
              >
                <img
                  className="mt-1 mb-1"
                  src={srcUrlPrefix + 'jincengda_normal.png'}
                  alt="今承达Logo"
                  style={{ width: '8vw' }}
                />
              </a>

              <a className="ml-10 mr-8 inline cursor-pointer" title="架构总图">
                <Link to={pageUrlPrefix + `structure`}>
                  <img src={srcUrlPrefix + 'framework.png'} alt="framework" />
                </Link>
              </a>

              <Popover
                className="mr-6"
                content={content}
                title=""
                placement="leftBottom"
              >
                <a className="inline cursor-pointer">
                  <img src={srcUrlPrefix + 'info.png'} alt="Info" />
                </a>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
