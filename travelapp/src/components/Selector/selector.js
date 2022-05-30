import React from "react";
import FindHoliday from "../FindHoliday/findHoliday.js";
import Header from "../Header/header.js";
import "./selector.css";

export function Selector({ buttonText, handleClick }) {
    console.log(" *** Entering SELECTOR component *** ");

    const notes = "Everyone is ready to travel again";

    const notes1 = "Don't know where to go? We are here to help.";

    const notes2 =
        "Let us randomly choose your next holiday destination for you!";

    const selectorBackgroundImage = ""; //TODO: replace with actual image path

    return (
        <section className="selector">
            <div className="selector-container">
                <div className="description-container">
                    <p className="selector-description1"> {notes}</p>
                    <p className="selector-description2"> {notes1}</p>
                    <p className="selector-description3"> {notes2}</p>
                </div>
                <div className="image-container">
                    <img
                        className="selector-background-image"
                        alt="background image of airplane"
                        src="bgImage.jpg"
                    ></img>
                </div>
            </div>
            <FindHoliday buttonText={buttonText} handleClick={handleClick} />
        </section>
    );
}

export default Selector;
