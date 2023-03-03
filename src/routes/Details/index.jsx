import React, { useState, useEffect } from 'react';

import { getURLParams, changeURLArg } from '../../utils/parseUrl';
import { HomeOutlined } from '@ant-design/icons';

import OPTIONS from '../../OPTIONS';

import Card from '../../components/Card/index';
import Display from '../../components/Display/index';

import Hint from '../../components/Hint';

import { Steps } from 'antd';

import { Breadcrumb } from 'antd';

import 'antd/dist/reset.css';

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

const Details = () => {
  const paramObj = getURLParams(document.URL);
  const { firstClass, secondClass } = paramObj;
  const first = parseInt(firstClass),
    second = parseInt(secondClass);
  const [currentSec, setCurrentSec] = useState(second);
  const [currentStep, setCurrentStep] = useState(0);
  const { children } = OPTIONS[first];
  const { scene } = children[second];

  const handleStepChange = (index) => {
    setCurrentStep(index);
  };

  useEffect(() => {
    changeURLArg(document.URL, 'secondClass', currentSec);
  }, [currentSec]);

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
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
            <Hint />
          </div>
        </div>
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
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
        <Display
          currentSec={currentSec}
          children={children}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default Details;


          // <div className="flex">
          //   {/* <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
          //     <button
          //       type="button"
          //       className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          //     >
          //       <span className="sr-only">Navigation</span>
          //       <svg width="24" height="24">
          //         <path
          //           d="M5 6h14M5 12h14M5 18h14"
          //           fill="none"
          //           stroke="currentColor"
          //           stroke-width="2"
          //           stroke-linecap="round"
          //         ></path>
          //       </svg>
          //     </button>
          //     <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
          //       <li className="flex items-center">
          //         Backgrounds
          //         <svg
          //           width="3"
          //           height="6"
          //           aria-hidden="true"
          //           className="mx-3 overflow-visible text-slate-400"
          //         >
          //           <path
          //             d="M0 0L3 3L0 6"
          //             fill="none"
          //             stroke="currentColor"
          //             stroke-width="1.5"
          //             stroke-linecap="round"
          //           ></path>
          //         </svg>
          //       </li>
          //     </ol> 
          //   </div> */}
          // </div>;
