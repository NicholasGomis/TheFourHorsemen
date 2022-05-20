import React from "react";
import { Info } from "../Info/info.js";
import { sampleData } from "../../libs/sampleData.js";
import SubHeader from "../SubHeader/subHeader.js";

console.log(sampleData);

function Display() {
  return (
    <div>
      <SubHeader subHeader="Things to know before you go" />
      <Info property="Country" value={sampleData.name.common} />
      <Info property="Currency" value={sampleData.currencies} />
      <SubHeader subHeader="Learn more" />
      {/* <Info property="Car side" /> */}
      <Info property="Capital" value={sampleData.capital} />
      <Info property="Continent" value={sampleData.capital} />
      <Info property="Poulation" value={sampleData.population} />
      {/* <Info property="Language" /> */}
    </div>
  );
}

export default Display;
