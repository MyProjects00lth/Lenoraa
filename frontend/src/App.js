import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
      </Routes>
    </Router>
  );
}

export default App;