import { useContext } from 'react';
import { Steps, Breadcrumb, Divider, Popover, Select } from 'antd';
import { Link } from 'react-router-dom';

import { DetailContext } from '../../context/Details';

import { srcUrlPrefix, pageUrlPrefix } from '../../config/config';

import OPTIONS from '../../OPTIONS';

import './styles.css';

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

const DetailHeader = () => {
  const {
    currentStep,
    currentFirst,
    currentSec,
    setCurrentFirst,
    setCurrentSec,
    setCurrentStep,
    setCurrentFp,
  } = useContext(DetailContext);
  const { children } = OPTIONS[currentFirst];
  const { scene } = children[currentSec];
  const firstClassList = OPTIONS.map(({ name }, index) => {
    return { value: index, label: name };
  });

  return (
    <div className="max-w-8xl mx-auto">
      <div className="py-4 border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10 mx-4 lg:mx-0">
        <div className="relative flex items-center">
          <div className="xl:w-72 w-48 flex" style={{ fontSize: '16px' }}>
            <a
              className="ml-1 mr-2 mt-2 inline cursor-pointer"
              title="回到首页"
            >
              <Link to={pageUrlPrefix}>
                <img
                  src={srcUrlPrefix + 'back.png'}
                  alt="back"
                  style={{ width: '21.33px' }}
                />
              </Link>
            </a>
            <Select
              defaultValue={firstClassList[currentFirst]}
              style={{ width: 115 }}
              bordered={false}
              options={firstClassList}
              size="large"
              onChange={(v) => {
                setCurrentFirst(v);
                setCurrentSec(0);
                setCurrentStep(0);
                setCurrentFp(0);
              }}
            />
          </div>

          <Steps
            className=""
            size="small"
            current={currentStep}
            items={scene}
            onChange={(v) => {
              setCurrentStep(v);
              setCurrentFp(0);
            }}
            style={{ width: '50vw' }}
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
                  style={{ width: '100px' }}
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
