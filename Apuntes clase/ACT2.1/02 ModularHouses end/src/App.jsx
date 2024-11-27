import { useState, useEffect } from "react";
import {Card} from "./component/Card";
import "./App.css";

export default function App() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [paginate, setpaginate] = useState(3);

  const data = items;
  const materials = ["wood", "steel frame", "cement"];

  function search() {
    return items.filter(item =>
      item.material.includes(filter) &&
      item.name.toString().toLowerCase().includes(query)
    );
  }

  const loadNextPage = (event) => {
    setpaginate((prevValue) => prevValue + 3);
  };

  useEffect(() => {

    fetch("/houses.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setItems(result);
          console.log("resultados:", result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);

  if (error) {
    return <>{error.message}</>;
  } else if (!loaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">

        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="sr-only">Search houses here</span>
          </label>
        </div>

        <div className="select">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="custom-select"
            aria-label="Filter cases By material">
            <option value="">All</option>
            {materials.map((item) => (
              <option value={item}>Filter By {item}</option>
            ))}
          </select>
        </div>

        <ul className="card-grid">
          {search(data).slice(0, paginate).map((item) => (
            <li key={item.id}>
              <Card key={item.id} house={item}/>
            </li>
          ))}
        </ul>
        <button onClick={loadNextPage}>Load More</button>
      </div>
    );
  }
}