import {MdAddCircle} from "react-icons/md";
import React from "react";
export default function Container({matching, pegi, year, desc, stars}){
    return(
        <div className="container">
            {matching > 60 && <div className="coincidencia">{matching} % de coincidencia</div>}
            <div className="info-card-container">
                <div>
                    <span className={"pegi age-" + pegi}>{pegi}+</span>
                    <span className="year">{year}</span>
                </div>
                <div className="tooltip">
                    <div className="tooltiptext">Añadir</div>
                    <MdAddCircle size="40"/>
                </div>
            </div>
            {stars && <div className="score">
                <div className={(stars > 0) ? "star" : "star-off"}></div>
                <div className={(stars > 1) ? "star" : "star-off"}></div>
                <div className={(stars > 2) ? "star" : "star-off"}></div>
                <div className={(stars > 3) ? "star" : "star-off"}></div>
                <div className={(stars > 4) ? "star" : "star-off"}></div>
            </div>}
            <p>{desc}</p>
        </div>
    )
}
/*
<div className={"star"+stars < 1 && "-off"}></div>
<div className={"star"+stars < 2 && "-off"}></div>
<div className={"star"+stars < 3 && "-off"}></div>
<div className={"star"+stars < 4 && "-off"}></div>
<div className={"star"+stars < 5 && "-off"}></div>
*/