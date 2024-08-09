import React from 'react';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Home from './pages/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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