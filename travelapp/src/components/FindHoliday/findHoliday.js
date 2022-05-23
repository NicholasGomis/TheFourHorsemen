import React, { useState, useEffect } from "react";
import "./findHoliday.css";

function FindHoliday({ buttonText, handleClick }) {
    return (
        <div className="find-holiday-button">
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    );
}
export default FindHoliday;
