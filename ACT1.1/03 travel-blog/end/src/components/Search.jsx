import "./Search.css"

export default function Search({setQuery}){
    return(
        <div className="search-container">
            <span>Search</span>
            <input 
            type="text"
            name="search-form"
            id="search-form"
            onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    )
}