import Banner from './Banner';
import Card from './Card';

export default function Main({filteredArticles}) {
    return(
        <main>
            {/* Banner */}
            <Banner />
            <h2>New Products</h2>
            {/* Grid */}
            <section className="product-grid">
                {filteredArticles.map((article) => (
                    <Card 
                        key={article.id}
                        article={article}
                    />   
                ))}
            </section>
        </main>
    )
}