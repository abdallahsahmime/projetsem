import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import './app.css'  
import logreg from './logreg';
import Home from './home';
import Login from './login';
import Register from './register';
import { Link } from 'react-router-dom';
import Italy from './italy/italy';
import Korea from './korea/korea';
import Pizza from './italy/pizza/pizza';


ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>,
  document.getElementById('root') 
);
