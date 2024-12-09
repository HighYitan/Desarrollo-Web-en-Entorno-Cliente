import {useState} from 'react';
export default function Header({onSearch}) {
    const [search, setSearch] = useState("");

    function handleSearch(e){
        const valor = e.target.value;
        setSearch(valor);
        onSearch(valor);
    }
    return(
        <header>
            <section className="top-header">
                <div className="logo-container" style={{ width: "20%" }}>
                <img src="./images/logo/dress.svg" className="logo" alt="" />
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        name="search"
                        placeholder="Enter your product name..."
                        value={search}
                        onChange={handleSearch}
                    />
                    <i className="fa-solid fa-magnifying-glass search-btn" />
                    </div>
                    <div className="icons-container">
                    <i className="fa-regular fa-user" />
                    <i className="fa-regular fa-heart" />
                    <i className="fa-sharp fa-solid fa-bag-shopping" />
                </div>
            </section>
            <nav className="main-nav">
                <a href="#">Home</a>
                <a href="#">Categories</a>
                <a href="#">Men's</a>
                <a href="#">Women's</a>
                <a href="#">Jewelry</a>
                <a href="#">Blog</a>
                <a href="#">Hot Offers</a>
            </nav>
        </header>
    )
}