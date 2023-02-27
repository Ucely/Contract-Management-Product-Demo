import { srcUrlPrefix, pageUrlPrefix } from '../../config/config.js';
import { getURLParams } from '../../utils/parseUrl';
import OPTIONS from '../../OPTIONS';

const Logo = () => {
  const paramObj = getURLParams(document.URL);
  const { firstClass, secondClass } = paramObj;
  const first = parseInt(firstClass);
  const { name } = OPTIONS[first];

  return (
    <a
      className="mr-3 flex w-[2.0625rem] overflow-hidden md:w-auto"
      href={pageUrlPrefix + 'home'}
    >
      <img
        className="mt-1 mb-1"
        src={srcUrlPrefix + 'jincengda_normal.png'}
        alt="今承达Logo"
        style={{ width: '40%' }}
      />
      <h5 className="card-header ml-3 mt-3">{name}</h5>
    </a>
  );
};

export default Logo;
