import blackSun from "../assets/img/Black_Sun.svg.png";
export default function Loading(){
    return (
        <div className="flex justify-center items-center w-full h-screen bg-violet-950">
            <img className="w-1/2 animate-spin" src={blackSun} alt="Loading"/>
        </div>
    )
}

/*export default function App() {
    return (
      <Router>
        <DataContextProvider>
          <TokenContextProvider>
            <ThemeContextProvider>
              <Header />
              <MainContent />
              <Footer />
            </ThemeContextProvider>
          </TokenContextProvider>
        </DataContextProvider>
      </Router>
    );
  }
  
  function MainContent() {
    const { loading } = useContext(DataContext);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-violet-950">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      );
    }
  
    return (
      <main className="bg-violet-950 min-h-screen pt-2 pb-20 mb-20">
        <Customization />
        <Title />
        <Routes>
          <Route path="/" element={<Highlights />} />
          <Route path="/Nosaltres" element={<About />} />
          <Route path="/Contacte" element={<Contact />} />
          <Route path="/Registre" element={<Register />} />
          <Route path="/Autenticar" element={<Login />} />
          <Route path="/Espais" element={<Spaces />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    );
  }*/