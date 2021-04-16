import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Welcome />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
