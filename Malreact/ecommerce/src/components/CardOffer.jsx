import "../css/cardOffer.css";

export default function CardOffer({name, description, price, stars, image}) {
    return(
        <div className="card-offer">
            <div className="image-box">
                <img src={"./images/products/" + image} alt={name}/>
            </div>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stars}</p>
        </div>
    )
}