export default function Load({handleLoad}){
    return(
        <div className="text-center mb-5">
            <button id="load-more" className="btn btn-secondary" onClick={(handleLoad)}>
              Load More
            </button>
        </div>
    )
}