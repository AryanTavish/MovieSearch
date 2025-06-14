
import './App.css';
import Home from './pages/Home';
import MoviesCategory from './pages/CategoryMovies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { rout_paths   } from './components/Routes';
import MovieDetails from './pages/MovieDetails';
import Liked from './pages/Liked';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path= {rout_paths.home} element={<Home />} />
        <Route path= {rout_paths.moviesCategory} element={<MoviesCategory />} />
        <Route path= {rout_paths.MovieDetails} element={<MovieDetails />} />
        <Route path={rout_paths.Liked} element={<Liked />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
