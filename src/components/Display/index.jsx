const Display = ({ children, currentSec, currentStep = 0 }) => {
  console.log(children[currentSec]['scene'], currentStep);
  return (
    <div className="space-y-10" style={{ width: '100%' }}>
      <iframe
        src={children[currentSec]['scene'][currentStep]['url']}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default Display;
