import Main from '../components/Main.jsx';
import Search from '../components/Search.jsx';
import {useEffect, useState} from "react";

export default function LandingPage(){
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch("/data/articles.json")
        .then((res) => res.json())
        .then((result) => {
            if(query!=""){
                setArticles(result.filter(e=>
                    e.desc.toLowerCase().includes(query.toLowerCase())
                ));
            }
            else{setArticles(result);}
        }, (error) => {console.log(error);})
    },[query])

    return(
        <>
            <Search setQuery={setQuery}/>
            <Main articles={articles}/>
        </>
    )
}