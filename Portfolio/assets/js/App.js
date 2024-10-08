import Experiencia from "./Experiencia.js"
import Contacto from "./Contacto.js"
import News from "./News.js"
export default function Inicio(){
    const name = "";
    const image = "";
    return(
        <body>
            <header>
                <h1>Welcome</h1>
                <img src={image} alt="Mi foto" className="photo"></img>
            </header>
            <section>
                <div>
                    <h1>Lorem Ipsum</h1>
                </div>
                <div>
                    
                </div>
            </section>
        </body>
    );
}