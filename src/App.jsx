import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

import Zebra from '../components/Zebra/Zebra.component';
import Chapter from '../components/Chapter/Chapter.component';
import Item from '../components/Item/Item.component';
import Details from '../routes/Details/Details.component';

import OPTIONS from '../OPTIONS';

import './App.css';

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
    // Start the introduction
    driver.start();
  }, []);
  return (
    <div
      className="w-full relative"
      style={{ background: '#131a53', textAlign: 'center' }}
    >
      <div style={{ height: '2.2vh' }}>
        <img
          className="absolute"
          style={{ top: '3vh', width: '8vh', left: '3.2vh' }}
          src="./img/weaver.png"
        />

        <img
          className="absolute"
          style={{ top: '4.3vh', width: '6.8vh', left: '13vh' }}
          src="./img/jincengda.png"
        />
      </div>
      <h1
        className="text-white first-element-introduction"
        style={{ fontFamily: 'Microsoft YaHei' }}
      >
        全程数字化合同管理业务体验站点
      </h1>
      <p
        className="text-white"
        style={{ textTransform: 'uppercase', letterSpacing: '2px' }}
      >
        Full-process digital contract management platform trial site
      </p>
      {/** 纵向斑马线 */}
      <div className="w-full" style={{ padding: '0 1.65vh' }}>
        <div
          className="absolute w-full top-0 left-0 flex text-white"
          style={{ padding: '26.8vh 1.62vw 1.65vh' }}
        >
          <div className="w-1/5 relative first-element-introduction">
            <div className="absolute" style={{ right: 0, top: 0 }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: 0, top: 0 }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: 0, top: 0 }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: '0px', top: '0' }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          {/**<div className="w-1/5 relative"><div className="absolute" style={{ right: '0px', top:'0'}}><Zebra size={`62.45vh`} rotate={-180} /></div></div>*/}
        </div>
      </div>
      {/** 泳道架构图 */}
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
          style={{ height: '79.8vh', padding: '1.65vh 1.46vw' }}
        >
          {[...Array(5).keys()].map((index) => (
            <Chapter {...OPTIONS[index]} key={index} />
          ))}
        </div>
        <div
          className="w-full px-24	flex justify-between items-center relative third-element-introduction"
          style={{
            height: '5vh',
            paddingLeft: '9rem',
            paddingRight: '9rem',
          }}
        >
          <Link to="/details">
            <Item {...children[0]} />
          </Link>

          <Zebra rotate={-90} size="25vh" />
          <Item {...children[1]} />
          <Zebra rotate={-90} size="25vh" />
          <Item {...children[2]} />
          <Zebra rotate={-90} size="25vh" />
          <Item {...children[3]} />
          <Zebra rotate={-90} size="25vh" />
          <Item {...children[4]} />
        </div>
      </div>
      <div style={{ height: '5vh' }}></div>
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default App;
