import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './signUp'; // Assuming your SignUp component is exported as SignUp
import Login from './login';
import Dashboard from './dashboard';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
