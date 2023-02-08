import { useEffect } from 'react';

import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

import Header from '../../components/Header';
import VerticalZebra from '../../components/VerticalZebra';
import Zebra from '../../components/Zebra';
import Chapter from '../../components/Chapter';
import Item from '../../components/Item';

import OPTIONS from '../../OPTIONS';

const Home = () => {
  const { children } = OPTIONS[5];

  useEffect(() => {
    const driver = new Driver();
    driver.defineSteps([
      {
        element: '.first-element-introduction',
        popover: {
          title: 'Title on Popover',
          description: 'Body of the popover',
          position: 'bottom',
        },
      },
      {
        element: '.third-element-introduction',
        popover: {
          title: 'Title on Popover',
          description: 'Body of the popover',
          position: 'top',
        },
      },
    ]);
    // 开始页面介绍
    // driver.start();
  }, []);

  return (
    <div
      className="w-full relative text-center"
      style={{ background: '#131a53' }}
    >
      {/* 标题栏 8.5vh*/}
      <Header />
      {/** 纵向斑马线 absolute */}
      <VerticalZebra />
      {/** 泳道架构图 85vh*/}
      <div
        className="sp"
        style={{
          backgroundImage: '',
          backgroundSize: '100% auto',
          backgroundPositionY: '70%',
        }}
      >
        <div
          className="flex z-50"
          style={{ height: '80vh', padding: '1.65vh 1.46vw' }}
        >
          {[...Array(5).keys()].map((index) => (
            <Chapter {...OPTIONS[index]} key={index} index={index} />
          ))}
        </div>
        <div
          className="w-full	flex justify-between items-center relative third-element-introduction"
          style={{
            height: '5vh',
            paddingLeft: '6vw',
            paddingRight: '6vw',
          }}
        >
          <Item {...children[0]} isBrick={true} />
          <Zebra rotate={-90} size="25vh" />
          <Item {...children[1]} isBrick={true} />
          <Zebra rotate={-90} size="25vh" />
          <Item {...children[2]} isBrick={true} />
          <Zebra rotate={-90} size="25vh" />
          <Item {...children[3]} isBrick={true} />
          <Zebra rotate={-90} size="25vh" />
          <Item {...children[4]} isBrick={true} />
        </div>
      </div>
      <div style={{ height: '6.5vh' }}></div>
    </div>
  );
};

export default Home;
