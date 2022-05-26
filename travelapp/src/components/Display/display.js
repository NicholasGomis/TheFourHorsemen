import React from "react";
import { Info } from "../Info/info.js";
import { sampleData } from "../../libs/sampleData.js";
import SubHeader from "../SubHeader/subHeader.js";
import "./display.css";
//console.log(sampleData);
import { INFO_IMAGE, INFO_TEXT } from "../../libs/config.js";

function Display({ countryData }) {
    console.log(" *** Entering DISPLAY component *** ");

    const firstSubHeaderText = "Things to know before you go";
    // const holidayCountry = sampleData.name.common;
    const holidayCountry = countryData?.name?.common;

    // TODO: finish mapping the curreny correctly to the display element.  Tricky because the key name changes each time.
    // const holidayCurrency = sampleData.currencies;
    const holidayCurrency = countryData?.currencies[0];
    const getCurrency = (obj) => {
        console.log(" === Entering getCurrency function === ");
        if (obj) {
            Object.keys(obj).forEach((key) => {
                console.log(`key: ${key}, value: ${obj[key]}`);

                if (typeof obj[key] === "object" && obj[key] !== null) {
                    getCurrency(obj[key]);
                }
            });
        }
    };
    //console.log(countryData?.currencies);
    getCurrency(countryData?.currencies);

    const secondSubHeaderText = "Learn more!";
    // const holidayCapital = sampleData.capital;
    const holidayCapital = countryData?.capital; //TODO: why not capital[0] as it's in an array?

    // const holidayContinent = sampleData.continents;
    const holidayContinent = countryData?.continents; //TODO: wonder why we don't need t oaccess continents[0]

    // const holidayPopulation = sampleData.population;
    const holidayPopulation = countryData?.population; //TODO: format population integer nicely

    const holidayFlagImagePath = countryData?.flags?.png;
    console.log({ holidayFlagImagePath });

    const holidayGoogleMapsPath = countryData?.maps?.googleMaps;
    console.log({ holidayGoogleMapsPath });

    return (
        <section className="display-facts">
            <SubHeader subHeader={firstSubHeaderText} />
            <Info
                property="Country"
                value={holidayCountry}
                infoType={INFO_TEXT}
            />
            <Info
                property="Currency"
                value={holidayCurrency}
                infoType={INFO_TEXT}
            />
            <SubHeader subHeader={secondSubHeaderText} />
            {/* <Info property="Which side to drive on" /> */}
            <Info
                property="Capital"
                value={holidayCapital}
                infoType={INFO_TEXT}
            />
            <Info
                property="Continent"
                value={holidayContinent}
                infoType={INFO_TEXT}
            />
            <Info
                property="Population"
                value={holidayPopulation}
                infoType={INFO_TEXT}
            />
            <Info
                property="Flag"
                value={holidayFlagImagePath}
                infoType={INFO_IMAGE}
            />
            {/* <Info property="Language" /> */}
        </section>
    );
}

export default Display;
