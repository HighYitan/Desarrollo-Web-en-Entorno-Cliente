import './App.css';
import {data} from './data/data.js';
import Card  from './components/Card.jsx';
import Container  from './components/Container.jsx';
import {Header}  from './components/Header.jsx';

export default function App(){
    return (
        <div className="App">
            <Header>
                <div className='grid-similares'>
                    {data.map((serie) => (
                        <Card key={serie.id}>
                            <div class="season">
                                {(serie.seasons)?(serie.seasons>1)?serie.seasons+" temporadas":serie.seasons+" temporada":
                                 (serie.episodes)?(serie.episodes>1)?serie.episodes+" episodios":serie.episodes+" episodios":
                                 (serie.type)?(serie.type==="miniserie")?"Miniserie":"":""}
                            </div>
                            <img src={"/assets/img/"+serie.img} alt={serie.title}/>                            
                            <Container
                             matching={serie.matching}
                             pegi={serie.pegi}
                             year={serie.year}
                             desc={serie.desc}
                             stars={serie.stars}
                            />
                        </Card>
                    ))}
                </div>
            </Header>
        </div>
    );
}