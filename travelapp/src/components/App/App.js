import "./App.css";

import React, { useState, useEffect } from "react";
import Selector from "../Selector/selector.js";
import Display from "../Display/display.js";
import Footer from "../Footer/footer.js";
import { API_URL, API_URL_SPECIFIC_CODE_ROOT } from "../../libs/config.js";
import { selectRandomCountryCode } from "../../libs/countryCodeList.js";

function App() {
    const findHolidayButtonTextOnLoad = "Find Me A Holiday";
    const findHolidayButtonTextOnceClicked = "Roll Again!";

    const [countryData, setCountryData] = useState();
    const [isFindHolidayPressed, setIsFindHolidayPressed] = useState(false);
    const [buttonText, setButtonText] = useState(findHolidayButtonTextOnLoad);

    //sinead: this was just a temp call to test printing out data from another api.
    // useEffect(() => {
    //     const BASE_URL = "https://countriesnow.space/api/v0.1/countries";
    //     let getCountries = async () => {
    //         const response = await fetch(`${BASE_URL}`).then((response) =>
    //             response.json()
    //         );
    //         const { data } = response;

    //         data.forEach((country) => {
    //             console.log(country); // {"country": "Afghanistan", "cities": [ "Herat", "Kabul", "Kandahar", "Molah", ...]}
    //         });
    //     };
    //     getCountries();
    // }, []);

    //Sinead: since we only want to retrieve a random holiday whenever the user preses the button ,we can put the API call inside the handleclick - it does'nt need to be inside a user effect
    // useEffect(() => {
    //     if (isFindHolidayPressed) {
    //         loadCountryData();
    //     }
    // }, [isFindHolidayPressed]);

    const fetchCountryData = async function () {
        const randomCountryCode = selectRandomCountryCode();
        const response = await fetch(
            `${API_URL_SPECIFIC_CODE_ROOT}${randomCountryCode}`
        );
        const data = await response.json();
        const retrievedCountryObject = data[0];
        setCountryData(retrievedCountryObject);
        console.log({ data });
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
    //TODO: change following code to  using ? : for more succinct if-statement
    // if (buttonText === findHolidayButtonTextOnceClicked) {
    //     return (
    //         <div className="App">
    //             <Selector buttonText={buttonText} handleClick={handleClick} />
    //             <Display countryData={countryData} />
    //             <Footer />
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="App">
    //             <Selector buttonText={buttonText} handleClick={handleClick} />
    //             <Footer />
    //         </div>
    //     );
    // }
}

export default App;
