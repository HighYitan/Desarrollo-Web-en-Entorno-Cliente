import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";

import ContactPage from "./pages/ContactPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import UsPage from "./pages/UsPage.jsx";
import StorePage from "./pages/StorePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
export default function App(){
  return(
    <Router>
      <Header/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/nosotros" element={<UsPage/>}/>
        <Route path="/store" element={<StorePage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}