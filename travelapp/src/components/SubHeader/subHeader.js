import React from "react";
import "./subHeader.css";

function SubHeader({ subHeader }) {
    console.log(" *** Entering SUBHEADER component *** ");

    return <div className="subheader">{subHeader}</div>;
}

export default SubHeader;
