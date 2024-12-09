import { Fragment } from 'react';
import '../assets/css/LandingPage.css';

export default function LandingPage() {
    const foto = "/img/kekw.jpg";
    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <div id="rombo">
                    <img className="img-fluid" src={foto} alt="Foto" />
                </div>
            </div>
            <div className="container my-4">
                <p className="text-center text-lg-start text-white">
                    ¡Bienvenido a mi portfolio, aquí podrás encontrar información sobre mi
                    experiencia laboral en el sector tecnológico, noticias mensuales sobre
                    DigiEvolution S.A y mucho más!
                    Si deseas ponerte en contacto conmigo o con mi equipo, puedes hacerlo a través del apartado
                    "Información de contacto". 
                    <br />
                    <br />
                    Soy Khris, desarrollador backend junior y cabecilla de DigiEvolution S.A, con conocimientos en Java, PHP,
                    Laravel, MySQL, HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, React, Git,
                    GitHub, entre otros. ¡Espero que disfrutes de mi portfolio!
                </p>
                <a className="d-grid btn btn-dark" href="https://khris-cv.netlify.app/">
                    Aqueste mi CV por si necesitas más información y necesitas de mis servicios {/* Aqueste significa "He aquí" y proviene del castellano antiguo */}
                </a>
            </div>
        </Fragment>
    );
}