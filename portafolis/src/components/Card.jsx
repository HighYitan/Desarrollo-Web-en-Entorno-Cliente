export default function Card({ proyecto }) {
    const github = "https://github.com/";
    const rutaImagen = "/img/";
    return(
        <div className="card bg-dark col-sm mx-2 my-2">
            <h5 className="card-header text-white text-center">
                {proyecto.titulo}
            </h5>
            <a
                className="px-0"
                href={proyecto.url ? proyecto.url : github + proyecto.github} //Si tiene url se redirige a la url, si no, se redirige al repositorio de GitHub para ver el código fuente directamente.
            >
                <img
                    src={rutaImagen + proyecto.imagen}
                    className="card-img-top px-3"
                    alt={proyecto.titulo}
                />
            </a>
            <div className="card-body">
                <p className="card-text text-white text-center">
                    {proyecto.descripcion}
                </p>
                <p className="card-text text-white text-center">
                    Tecnologías utilizadas: {/*proyecto.tecnologias.join(", ")*/ /*Si se quiere mostrar las tecnologías sin estilos como texto plano separado por comas*/}
                    {proyecto.tecnologias.map((tecnologia, index) => (
                        <span key={index} className="badge bg-dark mx-1">
                            {tecnologia}
                        </span>
                    ))}
                </p>
                <a href={github + proyecto.github} className="btn btn-dark mt-3 d-flex justify-content-center"><span class="bi-github me-1"/>Código Fuente<span class="bi-github ms-1"/></a>
            </div>
        </div>
    )
}