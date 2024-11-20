import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {

  async function getData(){
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      console.log(res.data);
    } 
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return(
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
        />
      </div>
    </div>
  )
}