import Header from '../../components/Header';
import VerticalZebra from '../../components/VerticalZebra';
import Pool from '../../components/Pool/index';

const Home = () => (
  <div className="w-full relative text-center bg-[#131a53]">
    {/* 标题栏 8.5vh*/}
    <Header />
    {/** 纵向斑马线 absolute */}
    <VerticalZebra />
    {/** 泳道架构图 85vh*/}
    <Pool />
  </div>
);

export default Home;
