import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Pages/LogIn/Login';
import Register from './Pages/Register/Register';
import ServicePage from './Pages/Service/ServicePage';
import StaysDetal from './Pages/StaysDetals/StaysDetal';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
console.log(isLoggedIn)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <Router>
    <div>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
       
      {isLoggedIn ? <>
      <Route path="/Service" element={<ServicePage />} />
      <Route path="/StayDetal" element={<StaysDetal />} />
      </>  : 
      <>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} onLogin={handleLogin()}/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Register />} />
      </>
      }
       
      </Routes>
     
    </div>

    <Footer/>
  </Router>
  );
}

export default App;
