import blackSun from "../assets/img/Black_Sun.svg.png";
export default function Loading(){
    return (
        <div className="flex justify-center items-center w-full h-screen bg-violet-950">
            <img className="w-1/2 animate-spin" src={blackSun} alt="Loading"/>
        </div>
    )
}