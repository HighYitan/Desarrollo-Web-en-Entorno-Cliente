import baleart from "../assets/img/Baleart.svg";
import Navbar from './Navbar'
export default function Header() {
    return(
        <>
            {/* Banner Image */}
            <div className="w-full h-32">
                <img src={baleart} alt="Baleart" className="object-cover w-full h-full" />
            </div>
            {/* Navbar */}
            <Navbar />
        </>
    )
}