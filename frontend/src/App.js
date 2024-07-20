import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/Admin/LoginPage';
import AdminRegisterPage from './Components/Admin/AdminRegisterPage';
import AdminDashboard from './Components/Admin/AdminDashboard';
import ViewAllWeddings from './Components/Admin/WddingPost/ViewAllWeddings';
import LandingPage from './Components/LandingPage';
import Packages from './Components/Packages';
// import Allpackage from './Components/Admin/Package/Allpackage';
import UpdateWeddingDetails from './Components/Admin/WddingPost/UpdateWeddingDetails';
import Gallery from './Components/Gallery';
import ForgotPassword from './Components/Admin/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/pkgs' element={<Packages/>}/>
        <Route path='/gallery' element={<Gallery/>} />

        {/* Admin side */}
        <Route path='/admin' element={<LoginPage/>}/>
        <Route path='/adminreg' element={<AdminRegisterPage/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/resetpwd' element={<ForgotPassword/>} />
        <Route path='/wedding' element={<ViewAllWeddings/>}/>
        <Route path='/editwedding/:id' element={<UpdateWeddingDetails/>} />
        {/* <Route path='/allPkg' element={<Allpackage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;