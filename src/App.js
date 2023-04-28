import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/services' element={< Services />}></Route>
        <Route exact path='/portfolio' element={< Portfolio />}></Route>
        <Route exact path='/contact' element={< Contact  />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
