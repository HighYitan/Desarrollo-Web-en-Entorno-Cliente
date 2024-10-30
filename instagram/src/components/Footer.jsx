import { useState } from "react";
export default function Footer(){
    const [likes, setLikes] = useState("corazon");
    const [numero, setNumero] = useState(0);
    
    function handleLikes(){
        if(likes === "corazon"){
            setLikes("corazon_active");
            setNumero(numero + 1);
        }
        else{
            setLikes("corazon");
            setNumero(numero - 1);
        }
    }
    return(
        <div className="footer">
            <div className="footer-icons">
                <span className={likes} onClick={handleLikes} id="corazon"></span>
                <span className="burbuja" id="b1"></span>
                <span className="enviar" id="e1"></span>
                <div className="guardar-icon-container">
                    <span className="guardar" id="guardar"></span>
                </div>
            </div>
            <div className="caption-container">
                <h4><span>{numero}</span> Likes</h4>
                <div className="caption">
                    <h4>Pedro_Terminator</h4>
                    <span
                        >Hola Estoy muy feliz!!! aprediendo React
                        JS. Mira mi gato.</span
                    >
                </div>
            </div>
            <div className="footer-icons">
                <span className={likes} onClick={handleLikes} id="corazon"></span>
                <span className="burbuja" id="b1"></span>
                <span className="enviar" id="e1"></span>
                <div className="guardar-icon-container">
                    <span className="guardar" id="guardar"></span>
                </div>
            </div>
            <div className="caption-container">
                <h4><span>{numero}</span> Likes</h4>
                <div className="caption">
                    <h4>Pedro_Terminator</h4>
                    <span
                        >Hola Estoy muy feliz!!! aprediendo React
                        JS. Mira mi gato.</span
                    >
                </div>
            </div>
        </div>
    )
}