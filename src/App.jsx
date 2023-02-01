import './App.css';

function Zebra({
  // size = 55,
  size = '7vh',
  speed = 200,
  rotate = 0,
  stroke = 3,
  color = '#38b2ac',
}) {
  return (
    <div
      style={{
        width: '3px',
        height: `${size}`,
        backgroundImage: 'url(./img/lineY1.gif)',
        transform: `rotate(${rotate}deg)`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'repeat',
      }}
    ></div>
  );
}

const BackGround = () => {
  return (
    <div
      className="w-full h-full relative"
      style={{ background: '#131a53', 'text-align': 'center' }}
    >
      <div style={{ height: '2.2vh' }}>
        {/* <img
          className="absolute"
          style={{ top: '3vh', width: '8vh', left: '3.2vh' }}
          src="${appRes}/weaver.png"
        /> */}
        {/* <img
          className="absolute"
          style={{ top: '4.3vh', width: '6.8vh', left: '13vh' }}
          src="${appRes}/jincengda.png"
        /> */}
      </div>
      <h1 className="text-white" style={{ 'font-family': 'Microsoft YaHei' }}>
        全程数字化合同管理业务体验站点
      </h1>
      <p
        className="text-white"
        style={{ textTransform: 'uppercase', 'letter-spacing': '2px' }}
      >
        Full-process digital contract management platform trial site
      </p>
      {/** 纵向斑马线 */}
      <div className="w-full" style={{ padding: '0 1.65vh' }}>
        <div
          className="absolute w-full top-0 left-0 flex text-white"
          style={{ padding: '26.8vh 1.62vw 1.65vh' }}
        >
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: '0px', top: '0' }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: '0px', top: '0' }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: '0px', top: '0' }}>
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
      ></div>
      <div style={{ height: '5vh' }}></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BackGround />
      <div></div>
      <div></div>
    </div>
  );
}

export default App;

//     <div
//       className="flex z-50"
//       style={{ height: '79.8vh', padding: '1.65vh 1.46vw' }}
//     >
//       <Stage title="起草审批">
//         <Node {...OPTIONS[0]} />
//         <Zebra />
//         <Node {...OPTIONS[1]} />
//         <Zebra />
//         <Node {...OPTIONS[2]} />
//         <Zebra />
//         <Node {...OPTIONS[3]} />
//         <Zebra />
//         <Node {...OPTIONS[4]} />
//         <div
//           className="absolute line-x"
//           style={{
//             width: '38%',
//             left: '64%',
//             top: '62.9vh',
//             backgroundImage: 'url(${appRes}/trajectory.gif)',
//           }}
//         ></div>
//         <div class="w-1/5 flex absolute" style={{ bottom: '-5.96vh' }}>
//           <div class="relative left-1/2 h-36">
//             <div class="arrow-up arrow-up-first"></div>
//             <div class="arrow-up arrow-up-second"></div>
//           </div>
//         </div>
//       </Stage>
//       <Stage title="电子签署">
//         <div
//           className="absolute line-x"
//           style={{
//             width: '40%',
//             left: '-5px',
//             top: '8.26vh',
//             backgroundImage: 'url(${appRes}/trajectory.gif)',
//           }}
//         ></div>
//         <Node {...OPTIONS[5]} />
//         <Zebra />
//         <Node {...OPTIONS[6]} />
//         <Zebra />
//         <Node {...OPTIONS[7]} />
//         <Zebra />
//         <Node {...OPTIONS[8]} />
//         <Zebra />
//         <Node {...OPTIONS[9]} />
//         <div
//           className="absolute line-x"
//           style={{
//             width: '38%',
//             left: '64%',
//             top: '62.9vh',
//             backgroundImage: 'url(${appRes}/trajectory.gif)',
//           }}
//         ></div>
//         <div class="w-1/5 flex absolute" style={{ bottom: '-5.96vh' }}>
//           <div class="relative left-1/2 h-36">
//             <div class="arrow-up arrow-up-first"></div>
//             <div class="arrow-up arrow-up-second"></div>
//           </div>
//         </div>
//       </Stage>
//       <Stage title="电子台账">
//         <div
//           className="absolute line-x"
//           style={{
//             width: '40%',
//             left: '-5px',
//             top: '8.26vh',
//             backgroundImage: 'url(${appRes}/trajectory.gif)',
//           }}
//         ></div>
//         <Node {...OPTIONS[10]} />
//         <Zebra />
//         <Node {...OPTIONS[11]} />
//         <Zebra />
//         <Node {...OPTIONS[12]} />
//         <Zebra />
//         <Node {...OPTIONS[13]} />
//         <Zebra />
//         <Node {...OPTIONS[14]} />
//         <div
//           className="absolute line-x"
//           style={{
//             width: '38%',
//             left: '64%',
//             top: '62.9vh',
//             backgroundImage: 'url(${appRes}/trajectory.gif)',
//           }}
//         ></div>
//         <div class="w-1/5 flex absolute" style={{ bottom: '-5.96vh' }}>
//           <div class="relative left-1/2 h-36">
//             <div class="arrow-up arrow-up-first"></div>
//             <div class="arrow-up arrow-up-second"></div>
//           </div>
//         </div>
//       </Stage>
//       <Stage title="合同履约">
//         <div
//           className="absolute line-x"
//           style={{
//             width: '40%',
//             left: '-5px',
//             top: '8.26vh',
//             backgroundImage: 'url(${appRes}/trajectory.gif)',
//           }}
//         ></div>
//         <Node {...OPTIONS[15]} />
//         <Zebra />
//         <Node {...OPTIONS[16]} />
//         <Zebra />
//         <Node {...OPTIONS[17]} />
//         <Zebra />
//         <Node {...OPTIONS[18]} />
//         <Zebra />
//         <Node {...OPTIONS[19]} />
//         <div
//           className="absolute line-x"
//           style={{
//             width: '38%',
//             left: '64%',
//             top: '62.9vh',
//             backgroundImage: 'url(${appRes}/trajectory.gif)',
//           }}
//         ></div>
//         {/**
//          * <div className="absolute line-x" style={{width:'135%',left: '70%',top: '58vh', backgroundImage: "url(${appRes}/trajectory.gif)"}}></div>
//          */}
//         <div class="w-1/5 flex absolute" style={{ bottom: '-5.96vh' }}>
//           <div class="relative left-1/2 h-36">
//             <div class="arrow-up arrow-up-first"></div>
//             <div class="arrow-up arrow-up-second"></div>
//           </div>
//         </div>
//       </Stage>
//       <Stage title="合同归档">
//         {/**<Stage title="全数字化归档" hideArrow>*/}
//         <div
//           className="absolute line-x"
//           style={{
//             width: '40%',
//             left: '0',
//             top: '8.26vh',
//             backgroundImage: 'url(${appRes}/trajectory.gif)',
//           }}
//         ></div>
//         <Node {...OPTIONS[20]} />
//         <Zebra />
//         <Node {...OPTIONS[21]} />
//         <Zebra />
//         <Node {...OPTIONS[22]} />
//         <Zebra />
//         <Node {...OPTIONS[23]} />
//         <Zebra />
//         <Node {...OPTIONS[24]} />
//         <div class="w-1/5 flex absolute" style={{ bottom: '-5.96vh' }}>
//           <div class="relative left-1/2 h-36">
//             <div class="arrow-up arrow-up-first"></div>
//             <div class="arrow-up arrow-up-second"></div>
//           </div>
//         </div>
//         {/**
//              * <div class="w-1/5 flex absolute" style={{ bottom: '-5.96vh' }}>
//                 <div class="relative left-1/2 h-36">
//                   <div class="arrow-up arrow-up-first"></div>
//                   <div class="arrow-up arrow-up-second"></div>
//                 </div>
//               </div>
//              * */}
//       </Stage>
// -->
//     </div>
//     <div
//       className="w-full px-24	flex justify-between items-center relative"
//       style={{
//         height: '5vh',
//         'padding-left': '9rem',
//         'padding-right': '9rem',
//       }}
//     >
//       <Node {...OPTIONS[34]} />
//       <Zebra rotate={-90} size={'25vh'} />
//       <Node {...OPTIONS[35]} />
//       <Zebra rotate={-90} size={'25vh'} />
//       <Node {...OPTIONS[36]} />
//       <Zebra rotate={-90} size={'25vh'} />
//       <Node {...OPTIONS[37]} />
//       <Zebra rotate={-90} size={'25vh'} />
//       <Node {...OPTIONS[38]} />
//     </div>
