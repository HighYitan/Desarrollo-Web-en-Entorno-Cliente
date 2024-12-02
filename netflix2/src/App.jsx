
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost key="1" url="sd" fetchUrl={requests.fetchNetflixOriginals} isSmall/>
    </div>
  );
}

export default App;
