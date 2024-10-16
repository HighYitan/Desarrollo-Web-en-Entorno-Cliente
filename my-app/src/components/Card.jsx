import "./Card.css";

export default function Card(){
    



    return(
        <article class="card">
            <div class="season">2 temporadas</div>
            <img src="./img/similar-timeless.jpg" alt=""/>
            <div class="container">
                <div class="coincidencia">86% de coincidencia</div>
                <div class="info-card-container">
                    <div>
                        <span class="pegi age-16">16+</span>
                        <span class="year">2018</span>
                    </div>
                    <div class="tooltip">
                        <div class="tooltiptext">Añadir</div>
                        <span class="material-icons btn-icon">add</span>
                    </div>
                </div>
                <p>Una historiadora, un soldado y un programador viajan en el tiempo para perseguir a
                    criminales que amenazan con perturbar el espacio-tiempo.</p>
            </div>
        </article>
    );
}