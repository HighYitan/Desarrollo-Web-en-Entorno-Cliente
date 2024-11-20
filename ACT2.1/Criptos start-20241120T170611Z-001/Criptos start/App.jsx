import axios from "axios";

function App() {

  async function getData(){
    try {
      const res = await axios.get(
        "your api link"
      );
      // missing code
    } catch (error) {
      // missing code
    }
  };
