import "./header.css";

function Header() {
    // console.log("Entering Header component");
    const headerTitle = "Help! Find Me A Holiday";
    const teamIcon = "F4"; //TODO: change this to an image

    return (
        <div className="full-header">
            <div className="wrap-1">
                <h1 className="full-header-title"> {headerTitle}</h1>
                <p className="full-header-icon"> {teamIcon}</p>
            </div>
        </div>
    );
}

export default Header;
