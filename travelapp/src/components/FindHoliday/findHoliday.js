import React, {useState, useEffect} from "react";

function FindHoliday({buttonText, handleClick}) {
    return (
        <div className="find-holiday-button">
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    );
}
export default FindHoliday;
