import './Node.styles.css';

let Node = (nodeProps) => {
  /**
   * {
  stage = 0,
  index = 0,
  className = '',
  url = '',
  icon = './img/sc01_b.png',
  loginid = 'wxc',
  userpassword = 'Weaver@2022',
  desc = '',
  //   isBlock = false,
  isAnalysis = false,
  secondStep = false,
  detailedMenu = false,
  children = '章节',
  name,
  buttons = [],
}
  */
  // console.log('nodeProps', nodeProps);
  const onClick = () => {};
  const isBlock = true;
  const isActive = false;
  return <div></div>;
  // return (
  //   <div
  //     className={`w-16 cursor-pointer text-center flex flex-col justify-center items-center relative rounded-full`}
  //     onClick={onClick}
  //   >
  //     {isBlock ? (
  //       <div
  //         className="rounded-full shadow-xl flex flex-col justify-center items-center z-50 | circle"
  //         style={{
  //           width: '6.7vh',
  //           height: '6.7vh',
  //           background:
  //             'linear-gradient(230deg, rgba(0, 255, 226, 0.3), rgba(0, 255, 226, 0.3))',
  //         }}
  //       >
  //         {/* <img src={icon} style={{ width: "6.7vh" }} /> */}
  //         <div
  //           className="w-28 p-1 absolute py text-center rounded-full text-xs z-50 font-medium transition duration-100"
  //           style={{
  //             width: '5.1vw',
  //             top: '5.29vh',
  //             background: '#082772',
  //             border: '1px solid rgba(5, 92, 226, 1)',
  //             color: ' #FFFFFF',
  //             whiteSpace: 'nowrap',
  //             overflow: 'hidden',
  //             textOverflow: 'ellipsis',
  //           }}
  //         >
  //           {children}
  //         </div>
  //       </div>
  //     ) : (
  //       <div
  //         className={`rounded-full shadow-xl flex flex-col justify-center items-center z-50 | circle`}
  //         style={{
  //           width: '6.7vh',
  //           height: '6.7vh',
  //           background:
  //             'linear-gradient(230deg, rgba(0, 255, 226, 0.3), rgba(0, 255, 226, 0.3))',
  //         }}
  //       >
  //         <img src={icon} style={{ width: '2.6vh' }} />
  //         <div
  //           className="p-1 absolute py text-center rounded-full text-xs z-50 font-medium transition duration-100"
  //           style={{
  //             width: '5.1vw',
  //             top: '5.29vh',
  //             background: '#082772',
  //             border: '1px solid rgba(5, 92, 226, 1)',
  //             color: ' #FFFFFF',
  //             whiteSpace: 'nowrap',
  //             overflow: 'hidden',
  //             textOverflow: 'ellipsis',
  //           }}
  //         >
  //           {children}
  //         </div>
  //       </div>
  //     )}
  //     {isActive && (
  //       <div
  //         className="absolute right-0 z-50 leading-none transform"
  //         style={{ transform: 'translateX(50%)', top: 'calc(50% - 11px)' }}
  //       >
  //         <img src="./img/right.png" />
  //       </div>
  //     )}
  //   </div>
  // );
};

Node = () => <div></div>;

export default Node;
