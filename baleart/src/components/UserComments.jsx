import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
import { LanguageContext } from "../context/LanguageContext";
import Comment from '../components/Comment';
export default function UserComments(){
    const { theme } = useContext(ThemeContext);
    const { login } = useContext(TokenContext);
    const { spaces } = useContext(DataContext);
    const { language } = useContext(LanguageContext);
    const [comments, setComments] = useState({ // State to store the comments and the spaces where they were made
        comment: [],
        spaceComment: []
    });
    const [currentPage, setCurrentPage] = useState(1); // State to store the current page of comments
    const commentsPerPage = 10; // Number of comments per page

    const indexOfLastComment = currentPage * commentsPerPage; // Index of the last comment of the current page
    const indexOfFirstComment = indexOfLastComment - commentsPerPage; // Index of the first comment of the current page
    const currentComments = comments.comment.slice(indexOfFirstComment, indexOfLastComment); // Comments of the current page

    const totalPages = Math.ceil(comments.comment.length / commentsPerPage); // Total number of pages

    const[displayPages, setDisplayPages] = useState({ // State to store the pages to display in the pagination
        previous: currentPage - 5,
        next: currentPage + 5
    });
    
    function handlePagination(pageNumber){ // Function to handle the pagination
        setCurrentPage(pageNumber);
    };

    function handleDisplayPages() { // Function to handle the pages to display in the pagination
        if (currentPage <= 6) { // If the current page is less than or equal to 6
            setDisplayPages({
                previous: 1, // The previous pages are up until reaching the first one
                next: Math.min(11, totalPages) // The next pages are the minimum between 11 and the total number of pages
            });
        } else if (currentPage >= totalPages - 5) { // If the current page is greater than or equal to the total number of pages minus 5
            setDisplayPages({
                previous: Math.max(1, totalPages - 10), // The previous pages are the maximum between 1 and the total number of pages minus 10
                next: totalPages // The next pages are up until reaching the last one
            });
        } else {
            setDisplayPages({
                previous: currentPage - 5, // The previous pages are up until the current page minus 5
                next: currentPage + 5 // The next pages are up until the current page plus 5
            });
        }
    }
    
    useEffect(() => { // UseEffect to handle the display of pages
        handleDisplayPages();
    }, [currentPage]);

    useEffect(() => {
        if (login.comentaris && login.comentaris.length > 0) { // If there are comments made by the logged user
            let filteredComments = [];
            let filteredSpaces = [];
            login.comentaris.forEach((comentari) => { // For each comment made by the logged user
                console.log(comentari);
                spaces.forEach((space) => { // For each space
                    if (space.comentaris && space.comentaris.length > 0) { // If there are comments in the space
                        space.comentaris.forEach((spaceComentari) => { // For each comment in the space
                            console.log(spaceComentari);
                            if ( // If the comment made by the logged user matches the comment in the space
                                (spaceComentari.comentari.toString() === comentari.comentari.toString()) &&
                                (spaceComentari.puntuació && comentari.puntuació) &&
                                (spaceComentari.puntuació.toString() === comentari.puntuació.toString())
                            ) {
                                if(spaceComentari.imatges && comentari.imatges){ // If there are images in the comment made by the logged user and in the comment in the space
                                    if(spaceComentari.imatges.toString() === comentari.imatges.toString()){ // If the images match
                                        filteredComments = [...filteredComments, comentari];
                                        filteredSpaces = [...filteredSpaces, space];
                                    }
                                }
                                else{ // If there are no images in the comment made by the logged user and in the comment in the space
                                    filteredComments = [...filteredComments, comentari];
                                    filteredSpaces = [...filteredSpaces, space];
                                }
                            }
                        });
                    }
                });
            });
            setComments({comment: filteredComments, spaceComment: filteredSpaces}); // Set the comments and the spaces where they were made
        }
    }, []);
    return(
        <>
            <h1 className={"flex justify-center items-center text-xl sm:text-2xl rounded-lg font-bold py-2 mx-1 mt-4 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                {
                    (language === "CA" ? ("Els teus comentaris") :
                    language === "ES" ? ("Tus comentarios") :
                    ("Your comments"))
                }
            </h1>
            <div className="flex justify-center">
                <div className="w-full rounded-lg mt-4">
                    {(comments.comment.length > 0) ? ( // If there are comments
                        console.log(comments),
                        <>
                            {currentComments.map((comment, index) => ( // For each comment in the current page
                                <Comment key={index} index={index} comment={comment} spaceComments={comments.spaceComment}/>
                            ))}
                            
                            <div className="flex flex-wrap justify-center mt-4">
                                {displayPages.previous > 1 && ( // If there are previous pages
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
                                {displayPages.next < totalPages && ( // If there are next pages
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