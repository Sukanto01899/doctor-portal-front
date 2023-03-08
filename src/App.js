import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Appointment from './pages/appointment/Appointment';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import RequirAuth from './pages/Login/RequirAuth';
import Signup from './pages/Login/Signup';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={<RequirAuth><Appointment/></RequirAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
