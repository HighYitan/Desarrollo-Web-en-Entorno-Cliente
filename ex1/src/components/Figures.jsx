import Card from "./Card"
import { useState } from "react";
export default function Figures({figures, pagination}) {
    return(
        <section id="figures-list" className="container py-4">
            {figures.map((figure, index) => {
                console.log(pagination);
                if(index < pagination){
                    return <Card key={index} figure={figure} /*handleFavorite={handleFavorite}*/ />
                }
            })}
        </section>    
    )
}