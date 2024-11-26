import {MdAddCircle} from "react-icons/md"

export default function Container({stars,pegi,year,matching,desc}){
    return(
        <div className="container">
        {matching>60 && <div className="coincidencia">{matching} % de coincidencia</div>}
        <div className="info-card-container">
            <div>
                <span className={'pegi age-'+pegi}>{pegi}+</span>
                <span className="year">{year}</span>
            </div>            
            <div className="tooltip">
                <div className="tooltiptext">Añadir</div>
                <MdAddCircle size="40"/>
            </div>
        </div>        
        {stars>-1 && <div className="score">
                <div className={(stars>0)?"star":"star-off"}></div>
                <div className={(stars>1)?"star":"star-off"}></div>
                <div className={(stars>2)?"star":"star-off"}></div>
                <div className={(stars>3)?"star":"star-off"}></div>
                <div className={(stars>4)?"star":"star-off"}></div>
        </div>}
        <p>{desc}</p>
    </div>
    )
}