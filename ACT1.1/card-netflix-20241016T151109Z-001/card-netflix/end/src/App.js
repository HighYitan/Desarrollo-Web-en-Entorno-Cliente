
import './App.css';
import Card from './components/Card';
import {seriesList} from "./data/series-static.js"

function App() {
  return (
    <div id="grid-series">
      {
        seriesList.map(e=>
            <Card key={e.id} {...e}/>
          )
      }
   
    </div>
  );
}

export default App;
