import './Header.styles.css';

const Header = () => {
  return (
    <div style={{ height: '8.5vh' }}>
      {/* logo */}
      <div style={{ height: '2.2vh' }}>
        <img
          className="absolute logo-weaver"
          style={{ top: '3vh', width: '8vh', left: '3.2vh' }}
          src="./img/weaver.png"
        />
        <img
          className="absolute logo-jincengda"
          style={{ top: '4.3vh', width: '6.8vh', left: '13vh' }}
          src="./img/jincengda.png"
        />
      </div>
      {/* title */}
      <h3 className="header-title text-white first-element-introduction">
        泛微 · 今承达 全程数字化合同管理业务体验站
      </h3>
      <p className="header-desc">
        Full-process digital contract management platform trial site
      </p>
    </div>
  );
};

export default Header;
