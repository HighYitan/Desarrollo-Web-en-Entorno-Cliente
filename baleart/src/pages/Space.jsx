import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
import { LanguageContext } from "../context/LanguageContext";
import { useParams } from "react-router-dom";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Alert from "../components/Alert";
import Comment from '../components/Comment';

export default function Space(){
    const { registre } = useParams();
    const { theme } = useContext(ThemeContext);
    const { token, login } = useContext(TokenContext);
    const { spaces } = useContext(DataContext);
    const { spacesImages } = useContext(DataContext);
    const { language } = useContext(LanguageContext);
    const [space, setSpace] = useState();
    const [spaceImage, setSpaceImage] = useState();
    const [rating, setRating] = useState(0); // State for the selected rating
    const [errors, setErrors] = useState({message:[]});
    const [newComment, setNewComment] = useState([{ // State for the new comment
        comentari: "",
        puntuació: 0,
        imatges: []
    }]);
    const [newImages, setNewImages] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [submitted, setSubmitted] = useState(false); // State to check if the form has been submitted
    const [successful, setSuccessful] = useState(false); // State to check if the form has been submitted successfully
    
    console.log(registre);

    function findImage(space){
        console.log(space);
        for(let sImage of spacesImages){
            if(space.registre === sImage.registre){ // Find the image that matches the space
                setSpaceImage(sImage.image);
                break;
            }
        }
    };

    useEffect(() => {
        const foundSpace = spaces.find(s => s.registre === registre);
        setSpace(foundSpace);
        findImage(foundSpace); // Assuming you have a way to get the image for the space
    }, []);

    useEffect(() => {
        console.log(newComment);
        submitted && axios.post("http://baleart.test/api/comment/" + space.registre, { // Send the comment to the API
            email: login.email,
            comentaris: [newComment]
        },
        {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            console.log("Comment successful:", response.data);
            setSubmitted(false);
            setSuccessful(true);
            setNewImages([]);
            setRating(0);
            setErrors({message:[]});
            console.log("Formulario enviado");
        })
        .catch(error => {
            console.error("Error logging:", error);
            setErrors({
                message: [error.response.data.message],
            });
            setSuccessful(false);
            setSubmitted(false);
            setNewComment({
                comentari: "",
                puntuació: 0,
                imatges: []
            });
            setNewImages([]);
            setRating(0);
        });
    }, [newComment]);

    useEffect(() => {
        if (successful) {
            setNewComment({
                comentari: "",
                puntuació: 0,
                imatges: []
            });
        }
    }, [successful]);

    function handleComment(event) {
        event.preventDefault();

        const formData = new FormData(event.target); // Create a new FormData object
        const formJson = Object.fromEntries(formData.entries()); // Convert the FormData object to a JSON object

        setSubmitted(true);
        setNewComment({
            comentari: formJson.comment, // Get the value of the comment textarea
            puntuació: rating,
            imatges: newImages.length > 0 ? newImages : [] // If there are images, add them to the comment
        });
    }

    function handleImageChange(event) {
        setImageUrl(event.target.value);
    }

    function validateImageUrl(url, callback) {
        const img = new Image(); // Create a new Image element
        img.onload = () => callback(true); // If the image loads successfully, return true
        img.onerror = () => callback(false); // If the image fails to load, return false
        img.src = url; // Set the image source to the URL
    }

    function addImage() {
        if (imageUrl.trim() !== "") { // Check if the input is not empty
            validateImageUrl(imageUrl.trim(), (isValid) => {
                if (isValid) {
                    setNewImages(prevImages => [...prevImages, { imatge_url: imageUrl.trim() }]); // Add the new image as an object
                    setImageUrl(""); // Clear the input field
                } else {
                    alert("Invalid image URL. Please enter a valid URL.");
                }
            });
        }
    }

    return(
        <div className="flex flex-col justify-center items-center">
            {space && (
                <>
                    <div className={"w-full sm:w-4/6 border rounded-lg shadow-sm mt-4 " + ((theme === "dark") ? "text-white bg-gray-900 border-white" : "text-gray-900 bg-gray-300 border-gray-900")}> 
                        <img
                            className="p-3 w-full object-cover rounded-lg"
                            src={spaceImage}
                            alt={space.nom}
                        />
                        <div className={"px-6 pb-6 mb-1 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                            <div className="font-bold text-justify mb-2">
                                {(language === "CA" ? "Nº de registre: " : language === "ES" ? "Nº de registro: " : "Register number: ") + space.registre}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {(language === "CA" ? "Tipus d'espai: " + space.tipus.descripció_CA : language === "ES" ? "Tipo de espacio: "  + space.tipus.descripció_ES : "Space type: "  + space.tipus.descripció_EN)}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {(language === "CA" ? "Modalitats: " : language === "ES" ? "Modalidades: " : "Modalities: ") + space.modalitats}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {(language === "CA" ? "Serveis: " : language === "ES" ? "Servicios: " : "Services: ") + space.serveis}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {(language === "CA" ? "Descripció: " + space.observacions_CA : language === "ES" ? "Descripción: "  + space.observacions_ES : "Description: "  + space.observacions_EN)}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {(language === "CA" ? "Accessible: " : language === "ES" ? "Accesible: " : "Access: ") + space.accessibilitat}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {
                                    (language === "CA" ? "Adreça: " : language === "ES" ? "Dirección: " : "Address: ") + space.adreça.carrer + ", " + space.adreça.zona + ", " + space.adreça.municipi + ", " + space.adreça.illa + "."
                                }
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {"Email: " + space.email}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {(language === "CA" ? "Telèfon: " : language === "ES" ? "Teléfono: " : "Phone: ") + space.telèfon}
                            </div>
                            <div className="font-bold text-justify mb-2">
                                <NavLink to={"https://" + space.www} target="_blank">Web: {space.www}</NavLink>
                            </div>
                            <div className="font-bold text-justify mb-2">
                                {(language === "CA" ? "Nº de comentaris: " : language === "ES" ? "Nº de comentarios: " : "Nº of comments: ") + (space.comentaris ? space.comentaris.length : 0)}
                            </div>
                            <div className="flex justify-center mt-2 sm:mt-0 mb-4">
                                {space.puntuacióMitjana && [...Array(Math.round(space.puntuacióMitjana))].map((_, index) => ( // Create an array of stars based on the average rating
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                ))}
                                {((Math.round(space.puntuacióMitjana)) < 5) && [...Array(Math.round(5 - (space.puntuacióMitjana)))].map((_, index) => ( // Create an array of empty stars based on the average rating to complete the 5 stars
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                ))}
                                {space.puntuacióMitjana &&
                                    <span className={"text-xs font-bold px-2.5 py-0.5 rounded-sm ms-3 " + ((theme === "dark") ? "bg-red-300 text-gray-900" : "bg-red-950 text-gray-300")}>
                                        {space.puntuacióMitjana ? space.puntuacióMitjana.toFixed(2) : null}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"w-full sm:w-4/6 border rounded-lg shadow-sm mt-4 " + ((theme === "dark") ? "text-white bg-gray-900 border-white" : "text-gray-900 bg-gray-300 border-gray-900")}>
                        <div className="w-full rounded-lg mt-4">
                            <h3 className="text-xl font-bold text-center my-4">
                                {
                                    (language === "CA" ? ("Fes un Comentari") :
                                    language === "ES" ? ("Haz un Comentario") :
                                    ("Make a Comment"))
                                }
                            </h3>
                            <form
                                id="commentForm"
                                className="flex flex-col justify-center items-center"
                                onSubmit={handleComment}
                            >
                                <label htmlFor="comment" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                                    {
                                        (language === "CA" ? ("Comentari") :
                                        language === "ES" ? ("Comentario") :
                                        ("Comment"))
                                    }
                                </label>
                                {console.log(successful)}
                                <textarea
                                    name="comment"
                                    placeholder="..."
                                    className="w-9/10 sm:w-19/20 p-1 bg-white text-black"
                                    value={newComment.comentari}
                                    onChange={(e) => setNewComment({ ...newComment, comentari: e.target.value })}
                                />
                                <label htmlFor="image" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                                    {
                                        (language === "CA" ? ("Afegir imatge") :
                                        language === "ES" ? ("Añadir imagen") :
                                        ("Add image"))
                                    }
                                </label>
                                <div className="flex flex-wrap justify-center items-center w-9/10 sm:w-19/20">
                                    {newImages && newImages.map((url, index) => (
                                        <img key={index} src={url.imatge_url} alt={"Image " + (index + 1)} className="w-22 h-22 object-cover mb-2 mr-2" />
                                    ))}
                                    <div className="flex items-center w-full">
                                        <input
                                            type="text"
                                            id="image"
                                            name="image"
                                            placeholder="https://example.com/image1.jpg"
                                            className="w-8/10 sm:w-17/20 p-1 bg-white text-black"
                                            value={imageUrl}
                                            onChange={handleImageChange}
                                        />
                                        <button
                                            id="image"
                                            className={"text-center font-bold w-2/10 sm:w-3/20 py-2 my-6 rounded " + ((theme === "dark") ? "bg-violet-950 text-white" : "bg-violet-300 text-gray-900")}
                                            type="button"
                                            onClick={addImage}
                                        >
                                            {
                                                (language === "CA" ? ("Afegir") :
                                                language === "ES" ? ("Añadir") :
                                                ("Add"))
                                            }
                                        </button>
                                    </div>
                                </div>
                                <label htmlFor="puntuació" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                                    {
                                        (language === "CA" ? ("Valora l'espai") :
                                        language === "ES" ? ("Valora el espacio") :
                                        ("Rate the space"))
                                    }
                                </label>
                                <div id="puntuació" className="flex justify-center mt-2 sm:mt-0 mb-4">
                                    {[...Array(5)].map((_, index) => ( // Create an array of 5 stars
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={index < rating ? "currentColor" : "none"}
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke={index < rating ? "none" : "currentColor"}
                                            className="size-6 text-yellow-500"
                                            onClick={() => setRating(index + 1 === rating ? 0 : index + 1)} // If you click again on the same star it changes the rating to 0.
                                        >
                                            <path
                                                fillRule={index < rating ? "evenodd" : ""}
                                                clipRule={index < rating ? "evenodd" : ""}
                                                strokeLinecap={index > rating ? "round" : ""}
                                                strokeLinejoin={index > rating ? "round" : ""}
                                                d={index < rating ? 
                                                    "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" :
                                                    "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                                }
                                            />
                                        </svg>
                                    ))}
                                </div>
                                {errors.message.length > 0 && <Alert type="danger" errors={errors.message}/>}
                                <button
                                    id="comment"
                                    className={"text-center font-bold w-9/10 sm:w-19/20 py-2 my-6 rounded " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                                    type="submit"
                                >
                                    {
                                        (language === "CA" ? ("Enviar Comentari") :
                                        language === "ES" ? ("Enviar Comentario") :
                                        ("Send Comment"))
                                    }
                                </button>
                                {(successful && errors.message && errors.message.length === 0) && <Alert type="success" errors={language === "CA" ? ["Comentari enviat per revisió"] : language === "ES" ? ["Comentario enviado para revisión"] : ["Sent comment for review"]}/>}
                            </form>
                        </div>
                    </div>
                    <div className={"w-full sm:w-4/6 border rounded-lg shadow-sm mt-4 " + ((theme === "dark") ? "text-white bg-gray-900 border-white" : "text-gray-900 bg-gray-300 border-gray-900")}>
                        {space.comentaris && space.comentaris.length > 0 && (
                            <div className="w-full rounded-lg mt-4">
                                <h3 className="text-xl font-bold text-center my-4">
                                    {
                                        (language === "CA" ? ("Comentaris") :
                                        language === "ES" ? ("Comentarios") :
                                        ("Comments"))
                                    }
                                </h3>
                                {space.comentaris.map((comentari, index) => (
                                    <Comment key={index} index={0} comment={comentari} spaceComments={[space]}/>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}