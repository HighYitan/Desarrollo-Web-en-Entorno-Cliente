export default function TopInfo() {
    return(
        /* Top information and language **************************/
        <section className="top-info">
            <div className="header-social-container">
                <a href="#" className="social-link">
                <i className="fa-brands fa-square-facebook" />
                </a>
                <a href="#" className="social-link">
                <i className="fa-brands fa-square-twitter" />
                </a>
                <a href="#" className="social-link">
                <i className="fa-brands fa-square-instagram" />
                </a>
                <a href="#" className="social-link">
                <i className="fa-brands fa-linkedin" />
                </a>
            </div>
            <div className="shipping-text">
                Free Shipping This Week Order Over 55€
            </div>
            <div>
                <select>
                    <option value="en" selected="">
                        English
                    </option>
                    <option value="en">Spanish</option>
                    <option value="ca">Catalan</option>
                </select>
            </div>
        </section>
    )
}