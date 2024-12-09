import './App.css';
import Card from './components/Card.jsx';
import {useState, useEffect} from 'react';
function App() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [paginate, setPaginate] = useState(3);
  const paginationAmount = 3;

  const materials = ['wood', 'steel frame', 'cement'];

  function searchItems(){
    return items.filter((item) => {
      return item.materials.includes(filter) &&
      item.name.toLowerCase().includes(search.toLowerCase());
    })
  }

  useEffect(() => {
    fetch('/houses.json')
      .then((res) => res.json())
      .then((data) => {
        setLoaded(true);
        setItems(data);
      },((error) => {
        setLoaded(false);
        setError(error);
        console.log(error);
      }));
  }, []);

  if(error) return <>{error.message}</>
  else if(!loaded) return <>Loading...</>
  else{
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
        <div className="select">
          <select
            className="custom-select"
            onChange = {(e) => setFilter(e.target.value)}
            aria-label = "Filter houses by material">
            <option value="">Filter by material</option>
            {materials.map((material) => (
              <option key={material} value={material}>{material}</option>
            ))}
          </select>
        </div>
        <ul className="card-grid">
          {searchItems().slice(0, paginate).map((item) => (
            <li key={item.id}>
              <Card key={item.id} name={item.name} price={item.price} photo={item.photo}  />
            </li>
          ))}
        </ul>
        <button onClick={() => setPaginate(paginate + paginationAmount)}>Load more</button>
      </div>
    )
  }
}

export default App;
