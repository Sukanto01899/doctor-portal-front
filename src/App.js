import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Appointment from './pages/appointment/Appointment';
import Home from './pages/home/Home';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
