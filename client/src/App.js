import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SlideButton from './components/slideButton';


import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {


  return (
    <>
    
      <Header />

      <div className="flex flex-col items-center min-h-screen bg-slate-800" >



        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <SlideButton />

        <Footer />

      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    </>
  );
}

export default App;
