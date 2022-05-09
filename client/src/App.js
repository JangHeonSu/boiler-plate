import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/login" />
          <Route exact path="/register" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;