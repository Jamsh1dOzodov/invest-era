import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Russia from './pages/Russia';
import Usa from './pages/Usa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/russia' element={<Russia />} />
        <Route path='/usa' element={<Usa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;