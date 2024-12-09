export default function Header({ handleDarkMode, darkMode }) {
    return(
        <div className="header">
            <h1><span style={{color: "#308d46"}}>React</span> Notes</h1>
            <button onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)} className="save">{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
    )
}