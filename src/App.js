import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compponents/nav/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Order from './pages/order/Order';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;


