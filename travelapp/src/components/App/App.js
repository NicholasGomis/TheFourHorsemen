import "./App.css";

import React, { useState } from "react";
import Selector from "../Selector/selector.js";
import Display from "../Display/display.js";
import Footer from "../Footer/footer.js";
import { API_URL, API_URL_SPECIFIC_CODE_ROOT } from "../../libs/config.js";
import { selectRandomCountryCode } from "../../libs/countryCodeList.js";

function App() {
    console.log(" *** Entering APP component *** ");

    const findHolidayButtonTextOnLoad = "Find Me A Holiday";
    const findHolidayButtonTextOnceClicked = "Roll Again!";

    const [countryData, setCountryData] = useState();
    const [isFindHolidayPressed, setIsFindHolidayPressed] = useState(false);
    const [buttonText, setButtonText] = useState(findHolidayButtonTextOnLoad);

    const fetchCountryData = async function () {
        const randomCountryCode = selectRandomCountryCode();
        const response = await fetch(
            `${API_URL_SPECIFIC_CODE_ROOT}${randomCountryCode}`
        );
        const data = await response.json();
        setCountryData(data[0]);
        console.log(data[0]);
    };

    function handleClick() {
        if (!isFindHolidayPressed) setIsFindHolidayPressed(true); // only needs to be set to true once
        fetchCountryData();
        setButtonText(findHolidayButtonTextOnceClicked);
    }

    return (
        <div className="App">
            <Selector buttonText={buttonText} handleClick={handleClick} />
            {isFindHolidayPressed ? (
                <Display countryData={countryData} />
            ) : (
                <p>Your next holiday destination will appear here</p>
            )}
            <Footer />
        </div>
    );
}

export default App;
