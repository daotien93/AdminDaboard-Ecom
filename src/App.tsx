import React from 'react';
import './styles/sb-admin-2.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Acconut/Login';
import Admin from './pages/Admin/Admin';

const App = () => {
  return (
    <div className='App' id='wrapper'>
      <Router>
        <Routes>
          <Route path='' element={<Admin />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
