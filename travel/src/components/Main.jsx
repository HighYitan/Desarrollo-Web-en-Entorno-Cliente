import Aside from "./Aside.jsx";
import ArticleList from "./ArticleList.jsx";

export default function Main({articles}){
    return (
        <main className="main-container">
            <ArticleList articles={articles}/>
            <Aside/>
        </main>
    )
}