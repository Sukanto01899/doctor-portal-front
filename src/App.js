import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './pages/about/About';
import Appointment from './pages/appointment/Appointment';
import Dashboard from './pages/dashboard/Dashboard';
import MyAppointment from './pages/dashboard/MyAppointment';
import MyHistory from './pages/dashboard/MyHistory';
import MyReview from './pages/dashboard/MyReview';
import Users from './pages/dashboard/Users';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import RequirAuth from './pages/Login/RequirAuth';
import RequirAdmin from './pages/Login/RequireAdmin';
import Signup from './pages/Login/Signup';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <>
    <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={<RequirAuth><Appointment/></RequirAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<RequirAuth><Dashboard/></RequirAuth>}>
          <Route index element={<MyAppointment/>}></Route>
          <Route path='review' element={<MyReview/>}></Route>
          <Route path='history' element={<MyHistory/>}></Route>
          <Route path='users' element={<RequirAdmin><Users/></RequirAdmin>}></Route>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
