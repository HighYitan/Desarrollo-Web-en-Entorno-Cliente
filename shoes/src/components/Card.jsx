import React from "react";
import "./Card.css";

export default function Card({name, price, description, stock, newCollection, imgs}){
    let imageProduct = (stock < 45) ? `assets/images/${imgs.imgProduct}`:
                                      `assets/images/${imgs.imgSoldOut}`;
    return(
        <article className="card">
            <section className="card-container-img">
                {(newCollection) ? (<span className="new">
                    <img className='star' src="assets/images/star.png" alt=""/>
                    New
                </span>) : ""}
                <img className="img-product" src={imageProduct} alt={name}/>
            </section>
            <section>
                <h2>{name}</h2>
                <h2>
                    {price}€
                    {price < 200 && <span style={{marginLeft:"10px"}}>30% off</span>}
                </h2>
                <h2>{description}</h2>
            </section>
        </article>
    );
}