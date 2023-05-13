import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';

import Landing from './pages/Landing';


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>

    </>
  );
}

export default App;
