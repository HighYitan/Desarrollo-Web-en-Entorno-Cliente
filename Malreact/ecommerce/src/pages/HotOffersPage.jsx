import {useState, useEffect} from "react";
import Header from "../components/Header";
import CardOffer from "../components/CardOffer";

export default function HotOffersPage() {
    const [search, setSearch] = useState("");
    const [offers, setOffers] = useState([]);
    return(
        <>
            <Header search={search} setSearch={setSearch} page="hot-offers"/>
            <main>
                <h1>Hot Offers</h1>
                <section className="cards">
                    {offers.map((offer) => (
                        <CardOffer
                            key={offer.id}
                            name={offer.name}
                            description={offer.description}
                            price={offer.price}
                            stars={offer.stars}
                            image={offer.image}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}