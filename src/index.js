import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
import Rental from './pages/Rental/Rental.js'
import NotFound from './pages/404/404.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="*" element={<NotFound />} ></Route>
      <Route index element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Rental/:id' element={<Rental />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);


reportWebVitals();
