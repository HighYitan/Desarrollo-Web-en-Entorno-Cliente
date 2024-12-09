import { useState } from "react";
import {useImmer} from 'use-immer';
export default function Footer(){
    const estatInicial = { //Immer
        save: false,
        like: false,
        likes: 0
    }
    const [estat, updateEstat] = useImmer(estatInicial);

    const liked = estat.like ? "corazon_active" : "corazon";
    const saved = estat.save ? "guardar_active" : "guardar";

    function changeLike(){
        updateEstat(draft => {
            draft.like = !draft.like;
            draft.likes = !draft.like ? draft.likes - 1 : draft.likes + 1;
        })
    }
    function changeSaved(){
        updateEstat(draft => {
            draft.save = !draft.save;
        })
    }
    
    /*
    const initialState = { //State
        save: false,
        like: false,
        likes: 0
    }
    const [state, setState] = useState(initialState);

    const liked = state.like ? "corazon_active" : "corazon";
    const saved = state.save ? "guardar_active" : "guardar";

    function changeLike(){
        setState(preState => ({
            save: preState.save,
            like: !preState.like,
            likes: preState.like ? preState.likes - 1 : preState.likes + 1
        }))
    }
    function changeSaved(){
        setState(preState => ({
            ...preState,
            save: !preState.save
            //likes: preState.like ? preState.likes - 1 : preState.likes + 1
        }))
    }
    
    return(
        <div className="footer">
            <div className="footer-icons">
                <span className={liked} id="corazon" onClick={changeLike}></span>
                <span className="burbuja" id="b1"></span>
                <span className="enviar" id="e1"></span>
                <div className="guardar-icon-container">
                    <span className={saved} id="guardar" onClick={changeSaved}></span>
                </div>
            </div>
            <div className="caption-container">
                <h4><span>{state.likes}</span> Likes</h4>
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
    */
    /*
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
    )*/
    return(
        <div className="footer">
            <div className="footer-icons">
                <span className={liked} id="corazon" onClick={changeLike}></span>
                <span className="burbuja" id="b1"></span>
                <span className="enviar" id="e1"></span>
                <div className="guardar-icon-container">
                    <span className={saved} id="guardar" onClick={changeSaved}></span>
                </div>
            </div>
            <div className="caption-container">
                <h4><span>{estat.likes}</span> Likes</h4>
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