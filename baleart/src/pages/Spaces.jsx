import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
import Card from '../components/Card';

export default function Spaces() {
  const { theme } = useContext(ThemeContext);
  const { token, setToken, login, setLogin } = useContext(TokenContext);
  const { spaces, setSpaces } = useContext(DataContext);
  const { spacesImages, setSpacesImages } = useContext(DataContext);
  const [currentSpacesImages, setCurrentSpacesImages] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const spacesPerPage = 10;

  const indexOfLastSpace = currentPage * spacesPerPage;         // 9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109, 119, 129, 139
  const indexOfFirstSpace = indexOfLastSpace - spacesPerPage; // 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130
  const currentSpaces = spaces.slice(indexOfFirstSpace, indexOfLastSpace); // 0-9, 10-19, 20-29, 30-39, 40-49, 50-59, 60-69, 70-79, 80-89, 90-99, 100-109, 110-119, 120-129, 130-139

  const totalPages = Math.ceil(spaces.length / spacesPerPage); // 140 / 10 = 14 pages rounded up

  const[displayPages, setDisplayPages] = useState({
    previous: currentPage - 5,
    next: currentPage + 5
  });

  //console.log(currentSpaces);

  function handlePagination(pageNumber){
      setCurrentPage(pageNumber);
  };

  function handleDisplayPages() {
    if (currentPage <= 6) {
      setDisplayPages({
        previous: 1,
        next: Math.min(11, totalPages)
      });
    } else if (currentPage >= totalPages - 5) {
      setDisplayPages({
        previous: Math.max(1, totalPages - 10),
        next: totalPages
      });
    } else {
      setDisplayPages({
        previous: currentPage - 5,
        next: currentPage + 5
      });
    }
  };

  function findImages(currentSpaces){
    const listImages = [];
    if(currentSpaces){
      for(const space of currentSpaces){
        for(const spaceImage of spacesImages){
          console.log(spaceImage);
          if(space.registre === spaceImage.registre){
            listImages.push(spaceImage.image);
            break;
          }
        }
      }
    setCurrentSpacesImages(listImages);
    }
  };

  useEffect(() => {
    handleDisplayPages();
    findImages(currentSpaces);
  }, [currentPage]);
  return (
    <>
      {(spaces.length > 0) ? (
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
        <h3 className={"text-lg mx-2 sm:mx-4 mt-4 text-center font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>No hi ha espais</h3>
      )}
    </>
  );
}