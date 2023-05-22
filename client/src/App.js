import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// import 'tailwindcss';


function App() {


  return (
    <>
      <body className="flex flex-col min-h-screen">
          <Header />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>


        <Footer />
      </body>
    </>
  );
}

export default App;
