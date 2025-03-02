import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import { FilterContext } from "../context/FilterContext";
import { LanguageContext } from "../context/LanguageContext";
import Card from '../components/Card';

export default function Spaces() {
  const { theme } = useContext(ThemeContext);
  const { spaces } = useContext(DataContext);
  const { spacesImages } = useContext(DataContext);
  const { language } = useContext(LanguageContext);
  const [currentSpacesImages, setCurrentSpacesImages] = useState([]); // New state to store the images of the spaces of this page.
  const [newSpaces, setNewSpaces] = useState([]); // New state to store the spaces with a rating greater than or equal to 4 first.
  const [filteredSpaces, setFilteredSpaces] = useState([]); // New state to store the spaces filtered by the user.
  const [isSpacesLoaded, setIsSpacesLoaded] = useState(false); // New state to check if the spaces are loaded.
  const { filter, order, typeOrder } = useContext(FilterContext); // Get the filter, order and typeOrder from the context.
  const [currentPage, setCurrentPage] = useState(1); // Current page of the pagination.

  const spacesPerPage = 10;

  const indexOfLastSpace = currentPage * spacesPerPage;       // 9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109, 119, 129, 139
  const indexOfFirstSpace = indexOfLastSpace - spacesPerPage; // 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130
  const currentSpaces = filteredSpaces.slice(indexOfFirstSpace, indexOfLastSpace); // 0-9, 10-19, 20-29, 30-39, 40-49, 50-59, 60-69, 70-79, 80-89, 90-99, 100-109, 110-119, 120-129, 130-139

  const totalPages = Math.ceil(filteredSpaces.length / spacesPerPage); // 140 / 10 = 14 pages rounded up

  const[displayPages, setDisplayPages] = useState({
    previous: currentPage - 5,
    next: currentPage + 5
  });

  useEffect(() => {
    findNewSpaces();
  }, []);

  useEffect(() => {
    if (isSpacesLoaded) { //Only run this effect if spaces are loaded
      handleDisplayPages();
      findImages(currentSpaces);
    }
  }, [currentPage, isSpacesLoaded, filteredSpaces]);

  useEffect(() => {
    if (isSpacesLoaded) { // Only run this effect if spaces are loaded
      setCurrentPage(1);
      filterSpaces();
    }
  }, [filter, isSpacesLoaded, order, typeOrder]);

  function filterSpaces() { // Filter logic
    const filteredSpacesList = newSpaces.filter((space) => {
      return ( // Filter by name, type, modality, service, number of comments, score, island, municipality and address
        (filter.name === "" || space.nom.toLowerCase().includes(filter.name.toLowerCase())) &&
        (filter.type === "" || space.tipus.tipusNom.toLowerCase().includes(filter.type.toLowerCase())) &&
        (filter.modality === "" || space.modalitats.toLowerCase().includes(filter.modality.toLowerCase())) &&
        (filter.service === "" || space.serveis.toLowerCase().includes(filter.service.toLowerCase())) &&
        (filter.comments === "" || (space.comentaris && space.comentaris.length === Number(filter.comments))) && // Filter by number of comments
        (filter.score === "" ||
          (filter.score === "0" && space.puntuacióMitjana >= 0 && space.puntuacióMitjana < 0.5) || // Filter by score range from 0 to 0.49
          (filter.score === "1" && space.puntuacióMitjana >= 0.5 && space.puntuacióMitjana < 1.5) || // Filter by score range from 0.5 to 1.49
          (filter.score === "2" && space.puntuacióMitjana >= 1.5 && space.puntuacióMitjana < 2.5) || // Filter by score range from 1.5 to 2.49
          (filter.score === "3" && space.puntuacióMitjana >= 2.5 && space.puntuacióMitjana < 3.5) || // Filter by score range from 2.5 to 3.49
          (filter.score === "4" && space.puntuacióMitjana >= 3.5 && space.puntuacióMitjana < 4.5) || // Filter by score range from 3.5 to 4.49
          (filter.score === "5" && space.puntuacióMitjana >= 4.5 && space.puntuacióMitjana <= 5) // Filter by score range from 4.5 to 5
        ) &&
        (filter.island === "" || space.adreça.illa.toLowerCase().includes(filter.island.toLowerCase())) &&
        (filter.municipality === "" || space.adreça.municipi.toLowerCase().includes(filter.municipality.toLowerCase())) &&
        (filter.address === "" || space.adreça.carrer.toLowerCase().includes(filter.address.toLowerCase()))
      );
    });
    // Sorting logic
    if (typeOrder === "alphabetically") {
      filteredSpacesList.sort((a, b) => {
        if (order === "asc") {
          return a.nom.localeCompare(b.nom);
        } 
        else if (order === "desc") {
          return b.nom.localeCompare(a.nom);
        }
        return 0;
      });
    }
    else if (typeOrder === "typewise") {
      filteredSpacesList.sort((a, b) => {
        if (order === "asc") {
          return a.tipus.tipusNom.localeCompare(b.tipus.tipusNom);
        } 
        else if (order === "desc") {
          return b.tipus.tipusNom.localeCompare(a.tipus.tipusNom);
        }
        return 0;
      });
    }
    else if (typeOrder === "municipalitywise") {
      filteredSpacesList.sort((a, b) => {
        if (order === "asc") {
          return a.adreça.municipi.localeCompare(b.adreça.municipi);
        } 
        else if (order === "desc") {
          return b.adreça.municipi.localeCompare(a.adreça.municipi);
        }
        return 0;
      });
    }
    else if (typeOrder === "ncomments") {
      filteredSpacesList.sort((a, b) => {
        if (order === "asc") {
          return (a.comentaris ? a.comentaris.length : 0) - (b.comentaris ? b.comentaris.length : 0);
        }
        else if (order === "desc") {
          return (b.comentaris ? b.comentaris.length : 0) - (a.comentaris ? a.comentaris.length : 0);
        }
        return 0;
      });
    }
    else if (typeOrder === "scorewise") {
      filteredSpacesList.sort((a, b) => {
        if (order === "asc") {
          return (a.puntuacióMitjana ? a.puntuacióMitjana : 0) - (b.puntuacióMitjana ? b.puntuacióMitjana : 0);
        }
        else if (order === "desc") {
          return (b.puntuacióMitjana ? b.puntuacióMitjana : 0) - (a.puntuacióMitjana ? a.puntuacióMitjana : 0);
        }
        return 0;
      });
    }
    setFilteredSpaces(filteredSpacesList);
  }

  function handlePagination(pageNumber){
      setCurrentPage(pageNumber);
  };

  function handleDisplayPages() {
    if (currentPage <= 6) { // If the current page is less than or equal to 6, the previous page will be 1 and the next page will be 11.
      setDisplayPages({
        previous: 1,
        next: Math.min(11, totalPages)
      });
    } 
    else if (currentPage >= totalPages - 5) { // If the current page is greater than or equal to the total pages minus 5, the previous page will be the total pages minus 10 and the next page will be the total pages.
      setDisplayPages({
        previous: Math.max(1, totalPages - 10),
        next: totalPages
      });
    } 
    else { // If the current page is between 6 and the total pages minus 5, the previous page will be the current page minus 5 and the next page will be the current page plus 5.
      setDisplayPages({
        previous: currentPage - 5,
        next: currentPage + 5
      });
    }
  };

  function findImages(currentSpaces){
    const listImages = currentSpaces.map(space => { // Find the images of the spaces in this page
      const spaceImage = spacesImages.find(image => image.registre === space.registre);
      return spaceImage ? spaceImage.image : null;
    });
    setCurrentSpacesImages(listImages);
  };

  function findNewSpaces() {
    const listSpaces = [];
    spaces.forEach((space) => {
      if (space.puntuacióMitjana >= 4) { // If the rating is greater than or equal to 4, it will be added to the list.
        listSpaces.push(space);
      }
    });
    spaces.forEach((space) => {
      if (space.puntuacióMitjana < 4 || !space.puntuacióMitjana) { // If the rating is lessser than 4, it will be added to the list after the best ones.
        listSpaces.push(space);
      }
    });
    // a.puntuacióMitjana - b.puntuacióMitjana to sort by the lowest rating.
    setNewSpaces(listSpaces);
    setIsSpacesLoaded(true); // Set the state to true when spaces are loaded
  };

  return (
    <>
      {(newSpaces.length > 0) ? (
        <>
          <div className="container w-full sm:w-4/6 mx-auto pt-5 pb-10 px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              {currentSpaces && currentSpaces.map((space, index) => (
                <Card key={index} space={space} spaceImage={currentSpacesImages[index]}/>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            {displayPages.previous > 1 && (
              <button
                key={1}
                onClick={() => handlePagination(1)}
                className={"w-10 py-2 mx-1 mb-4 font-bold rounded " + ((currentPage === 1) ? ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900") : "bg-gray-500 text-gray-900")}
              >
                1
              </button>
            )}
            {displayPages.previous > 2 && <button className={"w-10 py-2 mx-1 mb-4 font-bold rounded " + ((currentPage === 1) ? ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900") : "bg-gray-500 text-gray-900")} onClick={() => handlePagination((currentPage - 1))}>{"<-"}</button>}
            {Array.from({ length: displayPages.next - displayPages.previous + 1 }, (_, index) => {
              const page = displayPages.previous + index;
              return (
                <button
                  key={page}
                  onClick={() => handlePagination(page)}
                  className={"w-10 py-2 mx-1 mb-4 font-bold rounded " + ((currentPage === page) ? ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900") : "bg-gray-500 text-gray-900")}
                >
                  {page}
                </button>
              );
            })}
            {displayPages.next < totalPages - 1 && <button className={"w-10 py-2 mx-1 mb-4 font-bold rounded " + ((currentPage === totalPages) ? ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900") : "bg-gray-500 text-gray-900")} onClick={() => handlePagination((currentPage + 1))}>{"->"}</button>}
            {displayPages.next < totalPages && (
              <button
                key={totalPages}
                onClick={() => handlePagination(totalPages)}
                className={"w-10 py-2 mx-1 mb-4 font-bold rounded " + ((currentPage === totalPages) ? ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900") : "bg-gray-500 text-gray-900")}
              >
                {totalPages}
              </button>
            )}
          </div>
        </> 
      ) : (
        <h3 className={"text-lg mx-2 sm:mx-4 mt-4 text-center font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
          {
            (language === "CA" ? ("No hi ha espais") :
            language === "ES" ? ("No hay espacios") :
            ("There are no spaces"))
          }
        </h3>
      )}
    </>
  );
}