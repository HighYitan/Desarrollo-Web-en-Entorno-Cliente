import './App.css';
import Card from './components/Card';
import {useState, useEffect} from 'react';
function App() {
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState('');
  const [paginate, setPaginate] = useState(3);

  const materials = ['wood', 'steel frame', 'cement'];

  useEffect(() => {
    fetch('/houses.json')
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  
  function filterHouses(house) {
    return house.name.toLowerCase().includes(search.toLowerCase)
  }
  return (
    <div className="wrapper">
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="sr-only">Search houses</span>
        </label>
      </div>
      <ul className="card-grid">
        {houses
          .filter((house) => house.name.toLowerCase().includes(search.toLowerCase()))
          .map((house) => (
            <li key={house.id}>
              <Card key={house.id} {...house} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
