import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// import 'tailwindcss';
// import 'flowbite';


function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen bg-emerald-600">
          <Header />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>


        <Footer />
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}

      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    </>    
  );
}

export default App;
