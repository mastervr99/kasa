import './App.scss'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import About from './pages/about/about';
import Logement from './pages/logement/logement';
import Error_Page from './pages/error_page/error_page';

function App() {
    return (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Error_Page />} />
          </Routes>
          <Footer />
        </Router>
      );
}

export default App