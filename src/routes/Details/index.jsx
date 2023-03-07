import { DetailProvider } from '../../context/Details';

import DetailHeader from '../../components/DetailHeader/index';
import Display from '../../components/Display/index';
import Panel from '../../components/Panel/index';

import 'antd/dist/reset.css';

const Details = () => {
  return (
    <DetailProvider>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <DetailHeader />
        <div className="flex" style={{ height: '92.5vh' }}>
          <Panel />
          <Display />
        </div>
      </div>
    </DetailProvider>
  );
};

export default Details;
