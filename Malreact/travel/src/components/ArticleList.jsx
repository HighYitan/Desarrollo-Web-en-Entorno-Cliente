import Article from "./Article.jsx";
import NotFound from "./NotFound.jsx";
import "./Article.css";

export default function ArticleList({articles}){
    if(articles.length == 0){
        return (<NotFound/>)
    }
    return (
        <section className="articles">
            {articles.map(article =>
                <Article 
                    key={article.id}
                    img={article.img}
                    title={article.title}
                    desc={article.desc}
                />
            )}
        </section>
    )
}