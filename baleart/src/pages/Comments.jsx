import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import { LanguageContext } from "../context/LanguageContext";
import Comment from '../components/Comment';

export default function Comments(){
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { spaces } = useContext(DataContext); // All spaces
    const [comments, setComments] = useState([]); // All comments
    const [spaceComments, setSpaceComments] = useState([]); // Comments of each space

    const [currentPage, setCurrentPage] = useState(1); // Current page of the pagination
    const commentsPerPage = 10; // Number of comments per page

    const indexOfLastComment = currentPage * commentsPerPage; // Index of the last comment of the current page
    const indexOfFirstComment = indexOfLastComment - commentsPerPage; // Index of the first comment of the current page
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment); // Comments of the current page

    const totalPages = Math.ceil(comments.length / commentsPerPage); // Total number of pages

    const[displayPages, setDisplayPages] = useState({ // Displayed pages of the pagination by default
        previous: currentPage - 5,
        next: currentPage + 5
    });
    
    function handlePagination(pageNumber){
        setCurrentPage(pageNumber);
    };

    function handleDisplayPages() {
        if (currentPage <= 6) { // If the current page is less than or equal to 6
            setDisplayPages({
                previous: 1, // The previous page is 1
                next: Math.min(11, totalPages) // The next page is the minimum between 11 and the total number of pages
            });
        } else if (currentPage >= totalPages - 5) { // If the current page is greater than or equal to the total number of pages minus 5
            setDisplayPages({
                previous: Math.max(1, totalPages - 10), // The previous page is the maximum between 1 and the total number of pages minus 10
                next: totalPages // The next page is the last page
            });
        } else { // Otherwise
            setDisplayPages({
                previous: currentPage - 5, // The previous page is the current page minus 5
                next: currentPage + 5 // The next page is the current page plus 5
            });
        }
    }

    function listComments(){
        const listComments = [];
        const listSpaceComments = [];
        spaces.forEach((space) => { // For each space
            if (space.comentaris && space.comentaris.length > 0) {
                space.comentaris.forEach((comentari) => { // For each comment of the space
                    listComments.push(comentari); // Add the comment to the list of comments
                    listSpaceComments.push(space); // Add the space to the list of spaces of those comments
                });
            }
        });
        setComments(listComments);
        setSpaceComments(listSpaceComments);
    }
    
    useEffect(() => {
        listComments(); // List all comments
        handleDisplayPages(); // Display the pages of the pagination
    }, [currentPage]);

    console.log(spaces[0].comentaris);

    return(
        <>
            <div className="flex justify-center">
                <div className="w-full rounded-lg mt-4">
                    {(comments.length > 0) ? (
                        console.log(comments),
                        <>
                            {currentComments.map((comment, index) => (
                                <Comment key={index} index={index} comment={comment} spaceComments={spaceComments}/>
                            ))}
                            
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
                                (language === "CA" ? ("No hi ha comentaris") :
                                language === "ES" ? ("No hay comentarios") :
                                ("There are no comments"))
                            }
                        </h3>
                    )}
                </div>
            </div>
        </>
    )
}