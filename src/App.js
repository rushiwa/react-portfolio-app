import React from 'react';
import{BrowserRouter as Router,Route,} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar />
      <Route exact path ="/">
        <Home />
      </Route>
      <Route path = "/about">
        <About />
      </Route>
      <Route path = "/education">
        <Education />
      </Route>
      <Route path = "/skills">
        <Skills />
      </Route>
      <Route path = "/contact">
        <Contact />
      </Route>
    </div>
  </Router>
  );
}

export default App;
