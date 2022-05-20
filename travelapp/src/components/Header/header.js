function Header() {
    // console.log("Entering Header component");
    const headerTitle = "Random Holiday Selector";
    const teamIcon = "ICON"; //TODO: change this to an image

    return (
        <div className="full-header">
            <h1 className="full-header-title"> {headerTitle}</h1>
            <p className="full-header-icon"> {teamIcon}</p>
        </div>
    );
}

export default Header;
