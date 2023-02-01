import "./App.css";
import Zebra from "../components/Zebra/Zebra.component";
import Node from "../components/Node/Node.component";
import Stage from "../components/Stage/Stage.component";
import OPTIONS from "../OPTIONS";

const BackGround = () => {
  return (
    <div
      className="w-full h-full relative"
      style={{ background: "#131a53", "text-align": "center" }}
    >
      <div style={{ height: "2.2vh" }}>
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
      <h1 className="text-white" style={{ "font-family": "Microsoft YaHei" }}>
        全程数字化合同管理业务体验站点
      </h1>
      <p
        className="text-white"
        style={{ textTransform: "uppercase", "letter-spacing": "2px" }}
      >
        Full-process digital contract management platform trial site
      </p>
      {/** 纵向斑马线 */}
      <div className="w-full" style={{ padding: "0 1.65vh" }}>
        <div
          className="absolute w-full top-0 left-0 flex text-white"
          style={{ padding: "26.8vh 1.62vw 1.65vh" }}
        >
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: "0px", top: "0" }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: "0px", top: "0" }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: "0px", top: "0" }}>
              <Zebra size={`55vh`} rotate={-180} />
            </div>
          </div>
          <div className="w-1/5 relative">
            <div className="absolute" style={{ right: "0px", top: "0" }}>
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
          backgroundImage: "",
          backgroundSize: "100% auto",
          backgroundPositionY: "70%",
        }}
      >
        <div
          className="flex z-50"
          style={{ height: "79.8vh", padding: "1.65vh 1.46vw" }}
        >
          <Stage title="起草审批">
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <div
              className="absolute line-x"
              style={{
                width: "38%",
                left: "64%",
                top: "62.9vh",
                backgroundImage: "url(${appRes}/trajectory.gif)",
              }}
            ></div>
            <div class="w-1/5 flex absolute" style={{ bottom: "-5.96vh" }}>
              <div class="relative left-1/2 h-36">
                <div class="arrow-up arrow-up-first"></div>
                <div class="arrow-up arrow-up-second"></div>
              </div>
            </div>
          </Stage>
          <Stage title="电子签署">
            <div
              className="absolute line-x"
              style={{
                width: "40%",
                left: "-5px",
                top: "8.26vh",
                backgroundImage: "url(${appRes}/trajectory.gif)",
              }}
            ></div>
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <div
              className="absolute line-x"
              style={{
                width: "38%",
                left: "64%",
                top: "62.9vh",
                backgroundImage: "url(${appRes}/trajectory.gif)",
              }}
            ></div>
            <div class="w-1/5 flex absolute" style={{ bottom: "-5.96vh" }}>
              <div class="relative left-1/2 h-36">
                <div class="arrow-up arrow-up-first"></div>
                <div class="arrow-up arrow-up-second"></div>
              </div>
            </div>
          </Stage>
          <Stage title="电子台账">
            <div
              className="absolute line-x"
              style={{
                width: "40%",
                left: "-5px",
                top: "8.26vh",
                backgroundImage: "url(${appRes}/trajectory.gif)",
              }}
            ></div>
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <div
              className="absolute line-x"
              style={{
                width: "38%",
                left: "64%",
                top: "62.9vh",
                backgroundImage: "url(${appRes}/trajectory.gif)",
              }}
            ></div>
            <div class="w-1/5 flex absolute" style={{ bottom: "-5.96vh" }}>
              <div class="relative left-1/2 h-36">
                <div class="arrow-up arrow-up-first"></div>
                <div class="arrow-up arrow-up-second"></div>
              </div>
            </div>
          </Stage>
          <Stage title="合同履约">
            <div
              className="absolute line-x"
              style={{
                width: "40%",
                left: "-5px",
                top: "8.26vh",
                backgroundImage: "url(${appRes}/trajectory.gif)",
              }}
            ></div>
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <div
              className="absolute line-x"
              style={{
                width: "38%",
                left: "64%",
                top: "62.9vh",
                backgroundImage: "url(${appRes}/trajectory.gif)",
              }}
            ></div>
            {/**
             * <div className="absolute line-x" style={{width:'135%',left: '70%',top: '58vh', backgroundImage: "url(${appRes}/trajectory.gif)"}}></div>
             */}
            <div class="w-1/5 flex absolute" style={{ bottom: "-5.96vh" }}>
              <div class="relative left-1/2 h-36">
                <div class="arrow-up arrow-up-first"></div>
                <div class="arrow-up arrow-up-second"></div>
              </div>
            </div>
          </Stage>
          <Stage title="合同归档">
            {/**<Stage title="全数字化归档" hideArrow>*/}
            <div
              className="absolute line-x"
              style={{
                width: "40%",
                left: "0",
                top: "8.26vh",
                backgroundImage: "url(${appRes}/trajectory.gif)",
              }}
            ></div>
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <Zebra />
            <Node {...OPTIONS} />
            <div class="w-1/5 flex absolute" style={{ bottom: "-5.96vh" }}>
              <div class="relative left-1/2 h-36">
                <div class="arrow-up arrow-up-first"></div>
                <div class="arrow-up arrow-up-second"></div>
              </div>
            </div>
            {/** 
                 * <div class="w-1/5 flex absolute" style={{ bottom: '-5.96vh' }}>
                    <div class="relative left-1/2 h-36">
                      <div class="arrow-up arrow-up-first"></div>
                      <div class="arrow-up arrow-up-second"></div>
                    </div>
                  </div>
                 * */}
          </Stage>
        </div>
        <div
          className="w-full px-24	flex justify-between items-center relative"
          style={{
            height: "5vh",
            "padding-left": "9rem",
            "padding-right": "9rem",
          }}
        >
          <Node {...OPTIONS} />
          <Zebra rotate={-90} size={"25vh"} />
          <Node {...OPTIONS} />
          <Zebra rotate={-90} size={"25vh"} />
          <Node {...OPTIONS} />
          <Zebra rotate={-90} size={"25vh"} />
          <Node {...OPTIONS} />
          <Zebra rotate={-90} size={"25vh"} />
          <Node {...OPTIONS} />
        </div>
      </div>
      <div style={{ height: "5vh" }}></div>
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
