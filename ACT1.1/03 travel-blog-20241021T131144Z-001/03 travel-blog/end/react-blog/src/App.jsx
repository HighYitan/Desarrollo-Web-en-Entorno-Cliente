import './App.css';
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
