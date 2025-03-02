import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import {NavLink} from "react-router-dom";
export default function Highlights(){
  const { theme } = useContext(ThemeContext);
  const { spaces } = useContext(DataContext);
  const { spacesImages } = useContext(DataContext);
  const [bestSpaces, setBestSpaces] = useState([]);
  const [bestSpacesImages, setBestSpacesImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? bestSpacesImages.length - 1 : prevIndex - 1));
  };

  function nextSlide() {
      setCurrentIndex((prevIndex) => (prevIndex === bestSpacesImages.length - 1 ? 0 : prevIndex + 1));
  };


  useEffect(() => {
    bestSpaces.length === 0 && findBestSpaces();
    findImages(bestSpaces);
  }, [bestSpaces, spaces]);

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
}, [currentIndex]);

  function findBestSpaces() {
    const listSpaces = [];
    spaces.forEach((space) => {
      console.log(space.puntuacióMitjana);
      if (space.puntuacióMitjana >= 4) { // If the rating is greater than or equal to 4, it will be added to the list of Highlights.
        listSpaces.push(space);
      }
    });
    // a.puntuacióMitjana - b.puntuacióMitjana to sort by the lowest rating.
    listSpaces.sort((a, b) => b.puntuacióMitjana - a.puntuacióMitjana); // Sorts the spaces by the highest rating.
    setBestSpaces(listSpaces);
  };

  function findImages(bestSpaces){
    const listImages = [];
    if(bestSpaces){
      for(const space of bestSpaces){
        for(const spaceImage of spacesImages){
          if(space.registre === spaceImage.registre){
            listImages.push(spaceImage.image);
            break;
          }
        }
      }
      setBestSpacesImages(listImages);
    }
  };

  return(
    <div className={"relative w-full sm:w-4/6 mx-auto " + ((theme === "dark") ? "bg-black" : "bg-gray-300")}>
      <div className="overflow-hidden">
        {bestSpaces[currentIndex] && <NavLink to={"/Espai/" + bestSpaces[currentIndex].registre}>
          <div
              className="flex transition-transform duration-500"
              style={{ transform: "translateX(-" + (currentIndex * 100) + "%)" }} // This makes the carousel move it's X position to show the next image.
          >
            {bestSpacesImages.map((image, index) => (
                  <img key={index} src={image} alt={"Slide " + (index + 1)} className="w-full" style={{ flex: "0 0 100%" }} />
            ))}
          </div>
        </NavLink>}
      </div>
      <button
          onClick={prevSlide}
          className={"absolute top-1/2 left-0 transform -translate-y-1/2 py-2 px-4 rounded-full "
              + ((theme === "dark") ? "bg-black text-white" : "bg-gray-300 text-gray-900")}
      >
          &#10094; {/* HTML Left Arrow */}
      </button>
      <button
          onClick={nextSlide}
          className={"absolute top-1/2 right-0 transform -translate-y-1/2 py-2 px-4 rounded-full "
              + ((theme === "dark") ? "bg-black text-white" : "bg-gray-300 text-gray-900")}
      >
          &#10095; {/* HTML Right Arrow */}
      </button>
      <div className={"absolute bottom-[-4rem] left-0 right-0 flex justify-center items-center space-x-2 " + 
          ((theme === "dark") ? "bg-black" : "bg-gray-300")}
      >
        <div className="flex flex-col items-center">
          <h1 className={"text-xl sm:text-4xl font-bold drop-shadow-[0_10.2px_10.2px_rgba(0,0,0,0.8)] my-2 " +
              ((theme === "dark") ? "text-white" : "text-gray-900")}
          >
            {bestSpaces[currentIndex] && bestSpaces[currentIndex].nom}
          </h1>
          <div className="flex items-center my-2">
            {bestSpaces[currentIndex] && bestSpaces[currentIndex].puntuacióMitjana && [...Array(Math.round(bestSpaces[currentIndex].puntuacióMitjana))].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            ))}
            {((bestSpaces[currentIndex] && Math.round(bestSpaces[currentIndex].puntuacióMitjana)) < 5) && [...Array(Math.round(5 - (bestSpaces[currentIndex].puntuacióMitjana)))].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            ))}
            {bestSpaces[currentIndex] && bestSpaces[currentIndex].puntuacióMitjana &&
              <span className={"text-xs font-bold px-2.5 py-0.5 rounded-sm ms-3 " + ((theme === "dark") ? "bg-red-300 text-gray-900" : "bg-red-950 text-gray-300")}>
                {bestSpaces[currentIndex].puntuacióMitjana ? bestSpaces[currentIndex].puntuacióMitjana.toFixed(2) : null}
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}