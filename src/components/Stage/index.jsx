import './styles.css';

// 阶段泳道
function Stage({ title = '阶段', children = 'bala bala' }) {
  return (
    <div className="w-1/5" style={{ padding: '0 0.36vw' }}>
      <div className="wea-stage-bg">
        <div
          className="w-full flex justify-center items-center font-semibold text-base"
          style={{
            padding: '1.24vh 0',
            background: 'linear-gradient(0deg, rgba(5, 110, 249, 0), #056DF9)',
          }}
        >
          <span
            className="items-center"
            style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}
          >
            {title}
          </span>
        </div>
        <div
          className="relative flex flex-col justify-center items-center swimming-pool"
          style={{
            background:
              'linear-gradient(179deg, rgba(0, 38, 159, 0.2), rgba(5, 109, 249, 0))',
            marginTop: '1.65vh',
            padding: '1.65vh 0 3.3vh 0',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Stage;
