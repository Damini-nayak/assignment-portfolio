import React, { useState, useEffect } from 'react';
import './style/App.css';
import './style/var.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './Routes'

function App() {
  useEffect(() => {
    window.particlesJS("particles-container", {
      particles: {
        number: { value: 50 },
        size: { value: 3 },
        move: { speed: 2 },
        color: { value: "#ffffff" },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
      },
    });
  }, []);

  useEffect(() => {
    window.AOS.init(); // Initialize AOS
  }, []);
  
  return (
    <>
    <div
        id="particles-container"
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      ></div>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
