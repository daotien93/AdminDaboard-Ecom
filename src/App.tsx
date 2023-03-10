import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import { PrivateRoute } from './components';
import React from 'react';
import { AcconutRoute } from './components/AccountRoute';
import { Login } from './pages/Acconut/Login';

function App() {
  return (
    <div className='App' id='wrapper'>
      <Router>
        <Switch>
          <AcconutRoute path='/login'>
            <Login />
          </AcconutRoute>
          <PrivateRoute path='/'>
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;