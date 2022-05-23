import React from "react";
import FindHoliday from "../FindHoliday/findHoliday.js";
import Header from "../Header/header.js";
import "./selector.css";

export function Selector({ buttonText, handleClick }) {
    const selectorDescription =
        "Everyone is ready to travel again - Don't know where to go? We are here to help. Let us randomly choose your next holiday destination for you!";

    const selectorBackgroundImage = ""; //TODO: replace with actual image path

    return (
        <div className="selector">
            <Header />
            <p className="selector-description"> {selectorDescription}</p>
            <img
                className="selector-background-image"
                alt="background image of airplane"
                src="bgImage.jpg"
            ></img>
            <FindHoliday buttonText={buttonText} handleClick={handleClick} />
        </div>
    );
}

export default Selector;
