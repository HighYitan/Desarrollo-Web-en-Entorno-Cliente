import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import LandingPage from './pages/LandingPage';
import MovieDetails from './pages/MovieDetails';

export default function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}