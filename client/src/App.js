import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {


  return (
    <>
      <div id='page-container'>
        <div id='content-wrap'>
          <Header />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/resume" element={}/> */}
          </Routes>

        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
