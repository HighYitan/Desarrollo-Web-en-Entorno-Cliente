import ArticleList from "./ArticleList.jsx";
import Aside from "./Aside.jsx";

export default function Main({articles}){
  return (
    <main className="main-container">
        <ArticleList articles={articles}/>
        <Aside/>
    </main>
  )
}