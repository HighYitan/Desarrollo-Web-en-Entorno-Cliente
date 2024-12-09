export default function Loading(){
    const blackSun = "/img/Black_Sun.svg.png";
    return (
        <div className="loadingScreen">
            <img className="spin" src={blackSun} alt="Loading"/>
        </div>
    )
}