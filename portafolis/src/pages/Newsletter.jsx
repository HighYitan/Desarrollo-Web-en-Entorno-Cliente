import {useState, useEffect} from 'react';
import '../assets/css/Newsletter.css';
import Alert from '../components/Alert';

export default function Newsletter({noticias}) {
    const registrado = sessionStorage.getItem('registrado'); // Obtiene el estado de registro del usuario de sessionStorage
    const regTexto = sessionStorage.getItem('texto');
    const [email, setEmail] = useState(''); // Estado para almacenar el email del usuario
    const [emailError, setEmailError] = useState(false); // Estado para verificar si el email es válido
    const [registro, setRegistro] = useState(registrado !== null ? JSON.parse(registrado) : false); // Estado para verificar si el usuario está registrado
    const [texto, setTexto] = useState(regTexto !== null ? JSON.parse(regTexto) : ""); // Estado para el mensaje de confirmación
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Patrón para validar el email
    const rutaImagen = "/img/";
    useEffect(() => {
        // sessionStorage guarda los datos en el navegador del usuario hasta que la sesión expire (Cuando se cierra la página), localStorage los guarda hasta que el usuario los borre (No expira).
        // Cuando cambia el estado de registro, se guarda en sessionStorage (Cuando se registra el nuevo usuario)
        sessionStorage.setItem('registrado', JSON.stringify(registro));
        sessionStorage.setItem('texto', JSON.stringify(texto));
      }, [registro]);

    function handleChange(event) {
        setEmail(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();// Evita el comportamiento por defecto del formulario al hacer submit (Recargar la página y borrar los datos de los inputs)
        if(!emailPattern.test(email)){ // Si el email no cumple con el patrón
            setEmailError(true); // Cambia el estado de emailError a true
            setTexto("Por favor, introduce una dirección de correo electrónico válida.");
        }
        else{
            setEmailError(false); // Cambia el estado de emailError a false
            setRegistro(true); // Cambia el estado de registro a true
            setTexto("Gracias por registrarte a nuestras noticias semanales, ¡Cada lunes te llegará a " + email + " las noticias más frescas de DigiEvolution S.A!");
        }
    }

    return (
        <div className="container-sm mt-2 d-flex flex-column min-vh-100">
            {noticias.map((noticia) => (
                <div key={noticia.id} className="card bg-dark col-sm mx-2 my-2">
                    <h5 className="card-header text-white text-center">
                        {noticia.titulo}
                    </h5>
                    <img
                        src={rutaImagen + noticia.imagen}
                        className="card-img-top px-3"
                        alt={noticia.titulo}
                    />
                    <div className="card-body">
                        <p className="card-text text-white text-center">
                            {noticia.descripcion}
                        </p>
                        <p className="text-white text-center">Autor: {noticia.autor}</p>
                    </div>
                </div>
            ))}
            {registro ? (
                <Alert 
                    type="success"
                    text={texto}
                />
            ) : 
            (     
                <form onSubmit={handleSubmit}>
                    <div className="row text-white text-center mt-4 mb-3">
                        <h3>
                            ¡Registrate para recibir noticias semanales por correo electrónico de DigiEvolution!
                        </h3>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white">
                            Correo electrónico
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="ejemplo@protonmail.com"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-grid mb-3">
                        <button
                            type="submit"
                            className="btn btn-dark"
                        >
                            Registrarse al boletín de noticias
                        </button>
                    </div>
                    {emailError && <Alert type="danger" text={texto} />}
                </form>
            )}
        </div>
    );
};