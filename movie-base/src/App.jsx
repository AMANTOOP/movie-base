// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/search" element={<Search />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
