import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import Alert from "../components/Alert";

export default function Contact(){
    const { theme } = useContext(ThemeContext);
    const [errors, setErrors] = useState({message:[]});
    const { language } = useContext(LanguageContext);
    const [successful, setSuccessful] = useState(false); // Message sent successfully

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/; // Only letters and spaces
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Email format

    function handleContact(event){
        event.preventDefault();

        let errorMessages = [];

        if (event.target.name.value === "" || event.target.email.value === "" || event.target.subject.value === "" || event.target.message.value === "") {
            errorMessages.push("Please fill in all the fields"); // All fields are required
        }
        if (!nameRegex.test(event.target.name.value)) { // Check if the name is valid
            errorMessages.push("Please enter a valid name");
        }
        if (!emailRegex.test(event.target.email.value)) { // Check if the email is valid
            errorMessages.push("Please enter a valid email address");
        }

        if (errorMessages.length > 0) { // If there are errors
            setErrors({ message: errorMessages });
            setSuccessful(false);
        } 
        else { // If there are no errors
            setErrors({ message: [] });
            setSuccessful(true);

            // Reset form fields
            event.target.reset();
        }
    }
    return(
        <div className="flex flex-col justify-center items-center">
            <div className={"w-full sm:w-8/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                <h1 className={"text-center font-bold py-2 text-2xl " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {
                        (language === "CA" ? ("En cas d'emergència pot contactar amb nosaltres a través d'aquest telèfon: ") :
                        language === "ES" ? ("En caso de emergencia puede contactar con nosotros a través de este teléfono: ") :
                        ("In case of emergency you can contact us through this phone: ")) + "971123456"
                    }
                </h1>
                <h1 className={"text-center font-bold py-2 text-2xl " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {
                        (language === "CA" ? ("En cas contrari pot enviar-nos un correu electrònic amb un missatge a través del següent formulari") :
                        language === "ES" ? ("En caso contrario puede enviarnos un correo electrónico con un mensaje a través del siguiente formulario") :
                        ("Otherwise you can send us an email with a message through the following form"))
                    }
                </h1>
            </div>
            <div className={"w-full sm:w-8/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                <form
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleContact}
                >
                    <label htmlFor="name" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        {
                            (language === "CA" ? ("Nom") :
                            language === "ES" ? ("Nombre") :
                            ("Name"))
                        }
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Máximo"
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    <label htmlFor="email" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maximo@protonmail.com"
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    <label htmlFor="subject" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        {
                            (language === "CA" ? ("Assumpte") :
                            language === "ES" ? ("Asunto") :
                            ("Subject"))
                        }
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="..."
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    <label htmlFor="message" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        {
                            (language === "CA" ? ("Missatge") :
                            language === "ES" ? ("Mensaje") :
                            ("Message"))
                        }
                    </label>
                    <textarea
                        name="message"
                        placeholder="..."
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    {errors.message.length > 0 && <Alert type="danger" errors={errors.message}/>}
                    <button
                        id="contact"
                        className={"text-center font-bold w-9/10 sm:w-19/20 py-2 my-6 rounded " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                        type="submit"
                    >
                        {
                            (language === "CA" ? ("Envia el missatge") :
                            language === "ES" ? ("Envía el mensaje") :
                            ("Send the message"))
                        }
                    </button>
                    {successful && errors.message.length === 0 && <Alert type="success" errors={
                        (language === "CA" ? ("L'administrador ha rebut el teu missatge i es posarà en contacte amb tu el més aviat possible") :
                        language === "ES" ? ("El administrador ha recibido tu mensaje y se pondrá en contacto contigo lo antes posible") :
                        ("The administrator has received your message and will contact you as soon as possible"))}
                    />}
                </form>
            </div>
        </div>
    )
}