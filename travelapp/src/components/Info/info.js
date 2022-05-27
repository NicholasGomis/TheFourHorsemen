import React from "react";
import "./info-renamed.css"; //sinead: i had to rename because it was Info.css (captal 'I' and Github gets in a terrible knot if all you do is change the case of some letters - you have to rename as well.  TODO: Later we can rename back once it's all merged and everyone has pulled down the correct version
import { INFO_IMAGE, INFO_TEXT } from "../../libs/config.js";

export function Info({ property, value, infoType }) {
    console.log(" *** Entering INFO component *** ");
    // currency, carSide, capital, continent, population, language, timeZone

    return (
        <div>
            <h4 className="info-property">{property}</h4>
            {infoType === INFO_TEXT ? (
                <h4 className="info-value">{value}</h4>
            ) : (
                <img className="info-value" src={value}></img>
            )}
        </div>

        // <div>
        //     <div className='box'>
        //     <h4>Currency</h4>
        //     <h4>{currency}</h4>
        //     </div>

        //     <div className='box'>
        //     <h4>Car Side</h4>
        //     <h4>{carSide}</h4>
        //     </div>

        //     <div className='box'>
        //     <h4>capital</h4>
        //     <h4>{capital}</h4>
        //     </div>

        //      <div className='box'>
        //     <h4>continent</h4>
        //     <h4>{continent}</h4>
        //     </div>

        //      <div className='box'>
        //     <h4>population</h4>
        //     <h4>{population}</h4>
        //     </div>

        //      <div className='box'>
        //     <h4>language</h4>
        //     <h4>{language}</h4>
        //     </div>

        //     <div className='box'>
        //     <h4>Time zone</h4>
        //     <h4>{timeZone}</h4>
        //     </div>

        // </div>
    );
}
