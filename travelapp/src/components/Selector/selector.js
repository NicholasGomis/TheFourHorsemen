import React, { useState, useEffect } from "react";
import FindHoliday from "../FindHoliday/findHoliday.js";
import Header from "../Header/header.js";

export function Selector({ buttonText, handleClick }) {
    const selectorDescription =
        "Everyone is ready to travel again - Don't know where to go? we are here to help. Let us randomly choose your next holiday destination for you!";

    const selectorBackgroundImage = ""; //TODO: replace with actual image path

    return (
        <div className="selector">
            <Header />
            <p className="selector-description"> {selectorDescription}</p>
            {/* need to render background image here  */}
            <FindHoliday buttonText={buttonText} handleClick={handleClick} />
        </div>
    );
}

export default Selector;
