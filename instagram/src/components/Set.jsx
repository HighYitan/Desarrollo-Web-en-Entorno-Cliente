import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Set(){
    return (
        <div style={{maxWidth:"500px"}}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}