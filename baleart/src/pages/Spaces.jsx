import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
import Card from '../components/Card';

export default function Spaces() {
  const { theme } = useContext(ThemeContext);
  const { token, setToken, login, setLogin } = useContext(TokenContext);
  const { spaces, setSpaces } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const spacesPerPage = 10;

  const indexOfLastComment = currentPage * spacesPerPage;
  const indexOfFirstComment = indexOfLastComment - spacesPerPage;
  const currentSpaces = spaces.slice(indexOfFirstComment, indexOfLastComment);

  const totalPages = Math.ceil(spaces.length / spacesPerPage);

  const[displayPages, setDisplayPages] = useState({
    previous: currentPage - 5,
    next: currentPage + 5
  });

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
  }


  useEffect(() => {
    handleDisplayPages();
  }, [currentPage]);
  return (
    <>
      <div className="container mx-auto pt-5 pb-10 px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-2">
            {currentSpaces && currentSpaces.map((space, index) => (
              <Card key={index} space={space} />
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
  ); //Poner el else de "No hi ha espais"
}

/*import { useContext } from 'react';
import { AppContext } from '../components/Context';
import Card from '../components/Card';

export default function Spaces() {
  const { spaces } = useContext(AppContext);

  return (
    <div className="container mx-auto pt-5 pb-10 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-2">
        {spaces && spaces.map((space, index) => (
          <Card key={index} space={space} />
        ))}
      </div>
    </div>
  );
}*/