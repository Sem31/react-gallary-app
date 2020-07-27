import React from 'react';
import {BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import Login from './login/Login';
import Gallary from './gallary/Gallary'

function App() {
  return (
      <div className="App">
        <Router>
          <Route path='/gallary'>
            <Gallary />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Router>
    </div>
  );
}

export default App;
