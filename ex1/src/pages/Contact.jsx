import { useState } from 'react';
import '../assets/css/Contact.css';
import Alert from '../components/Alert';

export default function Contact() {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        asunto: '',
        mensaje: ''
    });
    const [texto, setTexto] = useState({show:false, type: "success"});
    const [alert, setAlert] = useState({show:false, type: "danger"});
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Patrón para validar el email
    const nombrePattern = /^[a-zA-ZÀ-ÿ\s]{2,30}$/; // Patrón para validar el nombre

    function handleChange(event){ // Función para manejar el cambio en los campos del formulario
        const { name, value } = event.target; // Obtiene el nombre y el valor del campo que han triggereado el evento
        setDatos({ ...datos, [name]: value }); // Actualiza el estado del campo correspondiente, creando el nuevo objeto (Shallow copy) con los datos anteriores y el campo actualizado
    };

    function handleSubmit(event){
        event.preventDefault();// Evita el comportamiento por defecto del formulario al hacer submit (Recargar la página y borrar los datos de los inputs)
        const errors = [];
        if(!nombrePattern.test(datos.nombre)){ // Si el nombre no cumple con el patrón
            errors.push("Por favor, introduce un nombre válido (Mínimo 2 caracteres, solo letras)");
        }
        if(!nombrePattern.test(datos.apellido)){ // Si el apellido no cumple con el patrón
            errors.push("Por favor, introduce un apellido válido (Mínimo 2 caracteres, solo letras)");
        }
        if(!emailPattern.test(datos.email)){ // Si el email no cumple con el patrón
            errors.push("Por favor, introduce un email válido");
        }
        if(datos.asunto.length < 5){ // Si el asunto no tiene al menos 5 caracteres
            errors.push("Por favor, introduce un asunto válido (Mínimo 5 caracteres)");
        }
        if(datos.mensaje.length < 10){ // Si el mensaje no tiene al menos 10 caracteres
            errors.push("Por favor, introduce un mensaje válido (Mínimo 10 caracteres)");
        }
        if(errors.length > 0){
            setAlert({...alert, show:true, text: errors});
        }
        else{
            setAlert({...alert, show:false, text: []});
            handleTexto({text: "Gracias por contactarnos, te responderemos lo antes posible"});
        }
    }

    function handleTexto({text}){
        setTexto({...texto, show:true, text});
        setTimeout(() => {
          setTexto({show:false});
        }, 5000)
      }
    return (
        <div className="container-sm mt-2 d-flex flex-column min-vh-100">
            <form onSubmit={handleSubmit}>
                <div className="row text-white text-center mt-4 mb-3">
                    <h3>
                        ¡Puedes contactarnos por medio del siguiente cuestionario y te responderemos lo antes posible!
                    </h3>
                </div>
                <div className="my-3">
                    <label htmlFor="nombre" className="form-label text-white">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        required
                        placeholder="Máximo"
                        value={datos.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="apellido" className="form-label text-white">
                        Apellido o apellidos
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        name="apellido"
                        required
                        placeholder="Tribal Red"
                        value={datos.apellido}
                        onChange={handleChange}
                    />
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
                        value={datos.email}
                        onChange={handleChange}
                    />

                </div>
                <div className="my-3">
                    <label htmlFor="asunto" className="form-label text-white">
                        Asunto
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="asunto"
                        name="asunto"
                        required
                        placeholder="Duda sobre..."
                        value={datos.asunto}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label text-white">
                        Mensaje
                    </label>
                    <textarea
                        className="form-control"
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        placeholder="Hola, quería contactaros porque..."
                        defaultValue={""}
                        value={datos.mensaje}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-grid mb-3">
                    <button
                        type="submit"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#rickrolled"
                    >
                        Enviar mensaje
                    </button>
                </div>
                {alert.show && alert.text.map((error, index) => (
                    console.log(alert.type),
                    <Alert key={index} type={alert.type} text={error}/>
                ))}
                {texto.show && <Alert type={texto.type} text={texto.text}/>}
            </form>
            <div className="row text-white text-center my-2">
                <h3>¡También puedes contactarnos a través de los siguientes medios!</h3>
            </div>
            <div className="d-grid row gap-2 d-md-flex my-3 mx-1">
                <a
                    href="mailto:cfl01@iesemilidarder.com"
                    className="btn btn-dark col d-flex align-items-center justify-content-center"
                >
                    Envíanos un correo electrónico con la aplicación
                </a>
                <a
                    className="btn btn-dark col d-flex align-items-center justify-content-center"
                    href="tel:713-992-0916"
                >
                    Llamar
                    <span
                        className="bi bi-telephone-inbound-fill"
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                    +34 666 333 999
                </a>
                <a className="btn btn-dark col" href="https://www.linkedin.com/">
                    <img
                        src="./img/linkedin.png"
                        className="img-fluid px-2"
                        alt="Mi LinkedIn"
                    />
                </a>
            </div>
        </div>
    );
}