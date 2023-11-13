import sanitize from "light-sanitize-html";
import React from "react";


/**
 * Sanitize and display html in the table 
 * Some data might contain html tags. To 
 * safely display it, it should be sanitized
 * and the script tags removed
 * @param {string} htmlString 
 * @returns 
 */
const HtmlTableCell = ({htmlString}) => {
    const sanitizedData = sanitize(htmlString);
    return (
        <td dangerouslySetInnerHTML={{
            __html: sanitizedData,
        }} />
    );
};

export default HtmlTableCell;
