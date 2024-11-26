import axios from "axios";

  async function getData(){
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      // missing code
    } catch (error) {
      // missing code
    }
  };
