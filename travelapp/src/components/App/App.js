// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import Selector from "../Selector/selector.js";
//import Display from "../Display/display.js";

function App() {
    const [countryData, setCountryData] = useState();
    const [isFindHolidayPressed, setIsFindHolidayPressed] = useState(false);
    const [buttonText, setButtonText] = useState("Find Me A Holiday");

    const API_URL = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        if (isFindHolidayPressed) {
            // console.log(`Selector: useEffect - if statement`);

            loadCountryData();
        } else {
            // console.log(`Selector: useEffect - else statement`);
        }
    }, [isFindHolidayPressed]);

    const loadCountryData = async function () {
        // console.log(`${COMPONENT_NAME}: Entering loadCountryData function`);
        const response = await fetch(API_URL);
        const data = await response.json();

        setCountryData(data[247]); // TODO: do the random country picker here - instead of hardcoding to 247
        console.log(data[247]); //TODO: currently just retrieving a fixed country - need to change this
        // console.log(data[247].capital);
        // console.log(`${COMPONENT_NAME}: leaving loadCountryData function`);
    };

    //let buttonText = "Find Me A Holiday"; //TODO: - dynamically changes to 'Roll Again';

    function handleClick() {
        //        const newValue = !isFindHolidayPressed;
        // const currentValue = true; //TODO: need to toggle
        // setIsFindHolidayPressed(currentValue);

        let newValue = !isFindHolidayPressed;

        setIsFindHolidayPressed(!isFindHolidayPressed);
        setButtonText("Roll Again!");
        //if (newValue) buttonText = "Find Me A Holiday";
        //buttonText = "Roll Again!";
    }

    return (
        <div className="App">
            <h1>Hi</h1>
            <Selector buttonText={buttonText} handleClick={handleClick} />
            {/* <Display /> */}
        </div>
    );
}

export default App;
