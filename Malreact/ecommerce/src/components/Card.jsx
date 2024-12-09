import articles from "./data/articles.json";
export default function Card({article}) {
    return(
        <article className="card" key={article.id}>
            {article.descompte == 50 && <div className="offer">{article.descompte}%</div>}
            <div className="info-1">
                <img src={article.imatge} alt={article.nom} />
                <h3>{article.nom}</h3>
                <h4>{article.descripcio}</h4>
            </div>
            <div className="info2">
                <div className="showcase-rating">
                    {[...Array(5)].map((star, index) => (
                        <i key={index} className={"fa-solid fa-star " + (index < article.puntuacio ? "" : "grey-star")}/>
                    ))}
                </div>
                <div className="price-box">
                    <p className="price">
                        {(article.preu * (1 - article.descompte / 100)).toFixed(2)}€ {article.descompte > 0 && <del>{article.preu.toFixed(2)}€</del>}{" "}
                    </p>
                    <button>Add</button>
                </div>
            </div>
        </article>
    )
}