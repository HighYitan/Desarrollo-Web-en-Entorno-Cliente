import './App.css';
import {data} from './data/data.js';
import Card from './components/Card.jsx';
import Container from './components/Container.jsx';

export default function App(){
  return(
    <div className="grid-similares">
      {data.map((serie)=> (
        <Card key={serie.id}>
          <div className="season">
            {(serie.seasons)?(serie.seasons>1)?serie.seasons+ " temporadas":serie.seasons+ " temporada":
             (serie.episodes)?(serie.episodes>1)?serie.episodes+ " episodios":serie.episodes+ " episodio":
             (serie.type)?(serie.type==="miniserie")?"Miniserie":serie.type:""}
          </div>
          <img src={"/assets/img/"+serie.img} alt={serie.title}/>
          <Container
            stars={serie.stars}
            year={serie.year}
            pegi={serie.pegi}
            matching={serie.matching}
            desc={serie.desc}
          />
        </Card>        
        ))}
    </div>
  )
}