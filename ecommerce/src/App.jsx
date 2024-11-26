import "./components/css/styles.css";
import Header from "./components/Header";
import TopInfo from "./components/TopInfo";
import Main from "./components/Main";
import Footer from "./components/Footer";
import articles from "./components/data/articles.json";
import {useState} from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const[filteredArticles, setFilteredArticles] = useState(articles);

  function handleSearch(valor){
      setSearch(valor);
      handleFilter(valor);
  };

  function handleFilter(search){
      setFilteredArticles(
        articles.filter((article) => 
          article.nom.toLowerCase().includes(search.toLowerCase())
      ));
  };

  /*useEffect(() => {
    setFilteredArticles(
      ...filteredArticles,
      filteredArticles.filter((article) => 
        article.nom.toLowerCase().includes(search.toLowerCase())
    ));
  }, [search]);*/

  return (
    <div id="page">
      {/* Top information and language **************************/}
      <TopInfo/>
      {/* Header **************************/}
      <Header onSearch={handleSearch}/>
      {/* Main page **************************/}
      <Main filteredArticles={filteredArticles}/>
      {/* Footer **************************/}
      <Footer/>
    </div>
  );
}

export default App;
