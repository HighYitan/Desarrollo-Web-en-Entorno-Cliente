import '../assets/css/Project.css';
import Card from '../components/Card';

export default function Project({proyectos}) {
    return (
        <div className="container-sm mt-2 d-flex flex-column min-vh-100">
            {proyectos.map((proyecto) => (
                <Card key={proyecto.id} proyecto={proyecto} />
            ))}
        </div>
    );
}