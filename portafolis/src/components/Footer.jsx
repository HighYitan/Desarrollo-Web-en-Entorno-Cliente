import "../assets/css/Footer.css";
export default function Footer(){
    return(
        <footer className="row text-white text-center d-flex align-items-center mt-auto">
            <hr className="border border-light border-top border-3 my-0" />
            <span className="col-8 col-md-6">© 2024 DigiEvolution S.A</span>
            <a
                className="col-3 col-md-6 bi bi-github link-light d-flex align-items-center justify-content-center"
                href="https://github.com/HighYitan"
            />
        </footer>
    )
}