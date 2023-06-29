import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
// import Contact from './pages/Contact';


function App() {


  return (
    <>

      <Header />

      <div className="flex flex-col items-center min-h-screen bg-slate-800" >



        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>


        {/* <SlideButton /> */}
        <span className="h-1 w-full bg-emerald-600 lg:w-full"></span>

        <Footer />

      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    </>
  );
}

export default App;
