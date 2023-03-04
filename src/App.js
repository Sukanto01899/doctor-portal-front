import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default App;
