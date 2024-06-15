import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/Admin/LoginPage';
import AdminRegisterPage from './Components/Admin/AdminRegisterPage';
import AdminDashboard from './Components/Admin/AdminDashboard';
import ViewAllWeddings from './Components/Admin/WddingPost/ViewAllWeddings';
import LandingPage from './Components/LandingPage';
import Packages from './Components/Packages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/pkgs' element={<Packages/>}/>

        {/* Admin side */}
        <Route path='/admin' element={<LoginPage/>}/>
        <Route path='/adminreg' element={<AdminRegisterPage/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/wedding' element={<ViewAllWeddings/>}/>
      </Routes>
    </Router>
  );
}

export default App;