import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";
import Card from '../components/Card';

export default function Space(){
    const { registre } = useParams();
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const { spaces } = useContext(DataContext);
    const [space, setSpace] = useState(null);
    const [spaceImage, setSpaceImage] = useState(null);
    
    console.log(registre);
    console.log(registre);

    useEffect(() => {
        const foundSpace = spaces.find(s => s.registre === registre);
        setSpace(foundSpace);
        console.log(foundSpace);
        // Assuming you have a way to get the image for the space
        const foundSpaceImage = foundSpace ? foundSpace.image : null;
        setSpaceImage(foundSpaceImage);
    }, []);

    return(
        <div>
            {space && <Card space={space} image={spaceImage} />}
        </div>
    )
}