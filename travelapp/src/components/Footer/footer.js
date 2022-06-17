import "./footer.css";

function Footer() {
    console.log(" *** Entering FOOTER component *** ");

    // FYI, using semantic HTML as per https://www.w3schools.com/html/html5_semantic_elements.asp
    return (
        <>
            <footer className="full-footer">
                <div className="wrap-footer">
                    <a href="https://github.com/NicholasGomis/TheFourHorsemen/tree/safety-net/travelapp">
                        © 2022 by The Four Horsemen
                    </a>{" "}
                    <i className="material-icons">cloud</i>
                </div>
            </footer>
        </>
    );
}

export default Footer;
