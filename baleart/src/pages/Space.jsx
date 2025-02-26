import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";
import {NavLink} from "react-router-dom";
import Card from '../components/Card';

export default function Space(){
    const { registre } = useParams();
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const { spaces } = useContext(DataContext);
    const { spacesImages, setSpacesImages } = useContext(DataContext);
    const [space, setSpace] = useState();
    const [spaceImage, setSpaceImage] = useState();
    
    console.log(registre);

    function findImage(space){
        console.log(space);
        for(let sImage of spacesImages){
            //console.log(sImage);
            if(space.registre === sImage.registre){
                console.log(sImage.image);
                setSpaceImage(sImage.image);
                break;
            }
        }
    };

    useEffect(() => {
        const foundSpace = spaces.find(s => s.registre === registre);
        setSpace(foundSpace);
        console.log(foundSpace);
        // Assuming you have a way to get the image for the space
        findImage(foundSpace);
        //setSpaceImage(foundSpaceImage);
    }, []);

    return(

        <div className="flex justify-center">
            <div className={"w-full sm:w-4/6 border rounded-lg shadow-sm mt-4 " + ((theme === "dark") ? "text-white bg-gray-900 border-white" : "text-gray-900 bg-white border-gray-900")}>
                {space && (
                    <>
                        <img
                            className="p-3 w-full object-cover rounded-lg"
                            src={spaceImage}
                            alt={space.nom}
                        />
                        {/*<h2 className="text-2xl font-bold mb-2">{space.adreça}</h2>*/}
                        <div className={"px-6 pb-6 mb-1 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                            
                            {/*<h5 className="text-xl text-center font-semibold tracking-tight mb-1">
                                {space.registre}
                            </h5>*/}
                            <div className="font-bold text-justify mb-2">
                                {"Nº de registre: " + space.registre}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {"Accesible: " + space.accessibilitat}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {"Email: " + space.email}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {"Telèfon: " + space.telèfon}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {<NavLink to={{pathname: space.www}} target="_blank">{space.www}</NavLink>}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {"Descripció: " + space.observacions_CA}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {"Adreça: " + space.adreça.carrer + ", " + space.adreça.zona + ", " + space.adreça.municipi + ", " + space.adreça.illa + "."}
                            </div>
                            <p><strong>Website:</strong> <a href={space.www} target="_blank" rel="noopener noreferrer">{space.www}</a></p>
                            <p><strong>Accessibilitat:</strong> {space.accessibilitat}</p>
                            <p><strong>Puntuació Mitjana:</strong> {space.puntuacióMitjana}</p>
                        </div>
                        {/*<p><strong>Modalitats:</strong> {space.modalitats}</p>
                        <p><strong>Serveis:</strong> {space.serveis}</p>*/}
                        {/*space.comentaris && space.comentaris.length > 0 && (
                            <div>
                                <h3 className="text-xl font-bold mt-4">Comentaris:</h3>
                                {space.comentaris.map((comentari, index) => (
                                    <p key={index}>{comentari}</p>
                                ))}
                            </div>
                        )*/}
                    </>
                )}
            </div>
        </div>
    )
}