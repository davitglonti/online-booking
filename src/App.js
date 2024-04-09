import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Pages/LogIn/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Register />} />
      </Routes>
     
    </div>

    <Footer/>
  </Router>
  );
}

export default App;
