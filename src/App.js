import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/style.css';

function App() {
    return (
        <Router>
          <Header />
          <Home />
          <Footer />
        </Router>
      );
}

export default App