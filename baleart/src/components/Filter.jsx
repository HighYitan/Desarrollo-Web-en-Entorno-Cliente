import {useContext, useState, useEffect} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import { LanguageContext } from "../context/LanguageContext";
import { FilterContext } from "../context/FilterContext";
export default function Filter(){
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { spaces } = useContext(DataContext);
    const [types, setTypes] = useState([]);
    const [modalities, setModalities] = useState([]);
    const [services, setServices] = useState([]);
    const [islands, setIslands] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const { filter, setFilter, order, setOrder, typeOrder, setTypeOrder } = useContext(FilterContext);

    useEffect(() => {
        findOptions(); // Find all the different options for the filters with select
    }, []);

    function findOptions(){
        const listTypes = [];
        const listModalities = [];
        const listServices = [];
        const listIslands = [];
        const listMunicipalities = [];

        spaces.forEach((space) => {
            if (!listTypes.some(type => JSON.stringify(type) === JSON.stringify(space.tipus))) { // Check if the type is already in the list
                listTypes.push(space.tipus);
            }
            // Split the modalitats string into an array of words
            const modalitiesArray = space.modalitats.split(',').map(modality => modality.trim()); // Remove spaces from the words and split with each comma
            modalitiesArray.forEach((modality) => {
                if (modality && !listModalities.includes(modality)) { // Check if the modality is already in the list
                    listModalities.push(modality);
                }
            });

            // Split the serveis string into an array of words
            const servicesArray = space.serveis.split(',').map(service => service.trim()); // Remove spaces from the words and split with each comma
            servicesArray.forEach((service) => {
                if (service && !listServices.includes(service)) { // Check if the service is already in the list
                    listServices.push(service);
                }
            });
            if(!listIslands.includes(space.adreça.illa)){ // Check if the island is already in the list
                listIslands.push(space.adreça.illa);
            }
            if(!listMunicipalities.includes(space.adreça.municipi)){ // Check if the municipality is already in the list
                listMunicipalities.push(space.adreça.municipi);
            }
        });
        setTypes(listTypes);
        setModalities(listModalities);
        setServices(listServices);
        setIslands(listIslands);
        setMunicipalities(listMunicipalities);
    }

    function handleFilter(event){ // Update the filter state with the new value maintaining the previous ones
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        });
    }

    function handleOrder(type) { // Set the order of the spaces list
        if (typeOrder === type) { // If the type of the order is ordered, change the order
            if (order === "") { // If the order is normal, change it to asc
                setOrder("asc");
            } 
            else if (order === "asc") { // If the order is asc, change it to desc
                setOrder("desc");
            } 
            else { // If the order is desc, change it to normal order
                setOrder("");
            }
        } 
        else { // If the type of the order is different, change the type and set the order to asc
            setTypeOrder(type);
            setOrder("asc");
        }
    }

    return(
        <div className="flex flex-wrap justify-center items-center mx-1 sm:mx-4">
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="name" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Nom")}
                    {language === "ES" && ("Nombre")}
                    {language === "EN" && ("Name")}
                </label>
                <input
                    name="name"
                    placeholder="Es Baluart"
                    className="p-1 bg-white"
                    style={{ width: "190px" }}
                    defaultValue={filter.name}
                    onChange={handleFilter}
                />
            </div>
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="type" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Tipus")}
                    {language === "ES" && ("Tipo")}
                    {language === "EN" && ("Type")}
                </label>
                <select
                    name="type"
                    className="p-1 bg-white text-center"
                    style={{ width: "190px" }}
                    value={filter.type}
                    onChange={handleFilter}
                >
                    <option value="">{language === "CA" ? "Selecciona un tipus" : language === "ES" ? "Selecciona un tipo" : "Select a type"}</option>
                    {types.map((type, index) => (
                        <option key={index} value={type.tipusNom}>{language === "CA" ? type.descripció_CA : language === "ES" ? type.descripció_ES : type.descripció_EN}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="modality" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Modalitat")}
                    {language === "ES" && ("Modalidad")}
                    {language === "EN" && ("Modality")}
                </label>
                <select
                    name="modality"
                    className="p-1 bg-white text-center"
                    style={{ width: "190px" }}
                    value={filter.modality}
                    onChange={handleFilter}
                >
                    <option value="">{language === "CA" ? "Selecciona modalitat" : language === "ES" ? "Selecciona modalidad" : "Select modality"}</option>
                    {modalities.map((modality, index) => (
                        <option key={index} value={modality}>{modality}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="service" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Serveis")}
                    {language === "ES" && ("Servicios")}
                    {language === "EN" && ("Services")}
                </label>
                <select
                    name="service"
                    className="p-1 bg-white text-center"
                    style={{ width: "190px" }}
                    value={filter.service}
                    onChange={handleFilter}
                >
                    <option value="">{language === "CA" ? "Selecciona un servei" : language === "ES" ? "Selecciona un servicio" : "Select a service"}</option>
                    {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="comments" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Nº Comentaris")}
                    {language === "ES" && ("Nº Comentarios")}
                    {language === "EN" && ("Nº Comments")}
                </label>
                <input
                    name="comments"
                    placeholder="1"
                    className="p-1 bg-white"
                    style={{ width: "190px" }}
                    defaultValue={filter.comments}
                    onChange={handleFilter}
                />
            </div>
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="score" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Puntuació")}
                    {language === "ES" && ("Puntuación")}
                    {language === "EN" && ("Score")}
                </label>
                <select
                    name="score"
                    className="p-1 bg-white text-center"
                    style={{ width: "190px" }}
                    value={filter.score}
                    onChange={handleFilter}
                >
                    <option value="">{language === "CA" ? "Selecciona puntuació" : language === "ES" ? "Selecciona puntuación" : "Select a score"}</option>
                    <option value="0">0.00 - 0.49</option>
                    <option value="1">0.50 - 1.49</option>
                    <option value="2">1.50 - 2.49</option>
                    <option value="3">2.50 - 3.49</option>
                    <option value="4">3.50 - 4.49</option>
                    <option value="5">4.50 - 5.00</option>
                </select>
            </div>
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="island" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Illa")}
                    {language === "ES" && ("Isla")}
                    {language === "EN" && ("Island")}
                </label>
                <select
                    name="island"
                    className="p-1 bg-white text-center"
                    style={{ width: "190px" }}
                    value={filter.island}
                    onChange={handleFilter}
                >
                    <option value="">{language === "CA" ? "Selecciona illa" : language === "ES" ? "Selecciona la isla" : "Select an island"}</option>
                    {islands.map((island, index) => (
                        <option key={index} value={island}>{island}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="municipality" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Municipi")}
                    {language === "ES" && ("Municipio")}
                    {language === "EN" && ("Municipality")}
                </label>
                <select
                    name="municipality"
                    className="p-1 bg-white text-center"
                    style={{ width: "190px" }}
                    value={filter.municipality}
                    onChange={handleFilter}
                >
                    <option value="">{language === "CA" ? "Selecciona municipi" : language === "ES" ? "Selecciona municipio" : "Select a municipality"}</option>
                    {municipalities.map((municipality, index) => (
                        <option key={index} value={municipality}>{municipality}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-grow justify-between sm:justify-center items-center">
                <label htmlFor="address" className={"my-4 mx-2 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {language === "CA" && ("Adreça")}
                    {language === "ES" && ("Dirección")}
                    {language === "EN" && ("Address")}
                </label>
                <input
                    name="address"
                    placeholder="Plaça de la Porta de Santa Catalina, 10"
                    className="p-1 bg-white"
                    style={{ width: "190px" }}
                    defaultValue={filter.address}
                    onChange={handleFilter}
                />
            </div>
            <div className="flex flex-grow justify-center items-center">
                <button
                    name="alphabetically"
                    className={"p-1 my-1 font-bold " + ((theme === "dark") ? "bg-violet-300 text-gray-900" : "bg-violet-950 text-white")}
                    style={{ width: "150px" }}
                    onClick={() => handleOrder("alphabetically")}
                >
                    {(language === "CA" && ("Alfabèticament") || language === "ES" && ("Alfabéticamente") || language === "EN" && ("Alphabetically")) +
                        (typeOrder === "alphabetically" ? (order === "asc" && " ↑" || order === "desc" && " ↓" || "") : "")
                    }
                </button>
            </div>
            <div className="flex flex-grow justify-center items-center">
                <button
                    name="typewise"
                    className={"p-1 my-1 font-bold " + ((theme === "dark") ? "bg-violet-300 text-gray-900" : "bg-violet-950 text-white")}
                    style={{ width: "150px" }}
                    onClick={() => handleOrder("typewise")}
                >
                    {(language === "CA" && ("Per tipus") || language === "ES" && ("Por tipo") || language === "EN" && ("By type")) +
                        (typeOrder === "typewise" ? (order === "asc" && " ↑" || order === "desc" && " ↓" || "") : "")
                    }
                </button>
            </div>
            <div className="flex flex-grow justify-center items-center">
                <button
                    name="municipalitywise"
                    className={"p-1 my-1 font-bold " + ((theme === "dark") ? "bg-violet-300 text-gray-900" : "bg-violet-950 text-white")}
                    style={{ width: "150px" }}
                    onClick={() => handleOrder("municipalitywise")}
                >
                    {(language === "CA" && ("Per municipi") || language === "ES" && ("Por municipio") || language === "EN" && ("By municipality")) +
                        (typeOrder === "municipalitywise" ? (order === "asc" && " ↑" || order === "desc" && " ↓" || "") : "")
                    }
                </button>
            </div>
            <div className="flex flex-grow justify-center items-center">
                <button
                    name="ncomments"
                    className={"p-1 my-1 font-bold " + ((theme === "dark") ? "bg-violet-300 text-gray-900" : "bg-violet-950 text-white")}
                    style={{ width: "150px" }}
                    onClick={() => handleOrder("ncomments")}
                >
                    {(language === "CA" && ("Nº comentaris") || language === "ES" && ("Nº comentarios") || language === "EN" && ("Nº comments")) +
                        (typeOrder === "ncomments" ? (order === "asc" && " ↑" || order === "desc" && " ↓" || "") : "")
                    }
                </button>
            </div>
            <div className="flex flex-grow justify-center items-center">
                <button
                    name="scorewise"
                    className={"p-1 my-1 font-bold " + ((theme === "dark") ? "bg-violet-300 text-gray-900" : "bg-violet-950 text-white")}
                    style={{ width: "150px" }}
                    onClick={() => handleOrder("scorewise")}
                >
                    {(language === "CA" && ("Per puntuació") || language === "ES" && ("Por puntuación") || language === "EN" && ("By score")) +
                        (typeOrder === "scorewise" ? (order === "asc" && " ↑" || order === "desc" && " ↓" || "") : "")
                    }
                </button>
            </div>
        </div>
    )
}