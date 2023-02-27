import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Details from './routes/Details';
import Structure from './routes/Structure';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/structure" element={<Structure />} />
    </Routes>
  );
};

export default App;
