import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Deneme2 from './Components/Pages/Deneme2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/deneme2" element={<Deneme2/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
