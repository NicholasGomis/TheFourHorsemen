import React from "react";
import { Info } from "../Info/info.js";
import { sampleData } from "../../libs/sampleData.js";
import SubHeader from "../SubHeader/subHeader.js";
import "./display.css";
//console.log(sampleData);

function Display() {
    const firstSubHeaderText = "Things to know before you go";
    const secondSubHeaderText = "Learn more!";

    return (
        <section className="display-facts">
            <SubHeader subHeader={firstSubHeaderText} />
            <Info property="Country" value={sampleData.name.common} />
            <Info property="Currency" value={sampleData.currencies} />
            <SubHeader subHeader={secondSubHeaderText} />
            {/* <Info property="Which side to drive on" /> */}
            <Info property="Capital" value={sampleData.capital} />
            <Info property="Continent" value={sampleData.capital} />
            <Info property="Poulation" value={sampleData.population} />
            {/* <Info property="Language" /> */}
        </section>
    );
}

export default Display;
