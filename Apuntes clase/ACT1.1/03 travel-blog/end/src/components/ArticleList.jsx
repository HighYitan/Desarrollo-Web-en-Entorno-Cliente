import Article from "./Article.jsx";
import NotFound from "./NotFound.jsx";

export default function ArticleList({articles}){
    if(articles.length==0) return (<NotFound/>)
    return(
        <section className="articulos">
            {articles.map(article=>
                <Article
                key={article.id}
                desc={article.desc}
                img={article.img}
                title={article.title}
                />
            )}
        </section>
    )
}