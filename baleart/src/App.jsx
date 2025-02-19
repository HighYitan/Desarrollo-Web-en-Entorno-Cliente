import { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/App.css'
import { DataContext, DataContextProvider } from './context/DataContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { TokenContextProvider } from './context/TokenContext';
import Content from './components/Content';

export default function App() {
  //const token = useContext(TokenContext); // Redirect to Highlights if the user is not logged.c
  //console.log(token);
  //const { loading } = useContext(DataContext);
  //console.log(loading);

  return (
    <Router>
      <DataContextProvider>
        <TokenContextProvider>
          <ThemeContextProvider>
            {/*isLoading() ? <Loading /> :
            <>
              <Header />
              <main className="bg-violet-950 min-h-screen pt-2 pb-20 mb-20">
                <Customization />
                <Title />
                <Routes>
                  <Route path="/" element={<Highlights />} />
                  <Route path="/Nosaltres" element={<About />} />
                  <Route path="/Contacte" element={<Contact />} />
                  <Route path="/Registre" element={<Register />} />
                  <Route path="/Autenticar" element={<Login />} />
                  <Route path="/Espais" element={<Spaces />}/>
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
              <Footer />
            </>*/}
            <Content />
          </ThemeContextProvider>
        </TokenContextProvider>
      </DataContextProvider>
    </Router>
  )
  function isLoading(){
    const loading = useContext(DataContext)
    console.log(loading);
    return loading;
  }
}