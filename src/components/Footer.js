import React, { useState } from "react";
import "./footer.css"
export const Footer = () => {

    return (
        <div id = "footer">
            <p>Slice N' Dice Made With Love By:</p><br />
            <div id="icons">
            <div id="leo"><img src = "leo.png" height="75px" width="75px" /><p>clogerie92</p></div>
            <div id="mike"><img src = "mike.png" height="75px" width="75px" /><p>chrisjackson1</p></div>
            <div id="don"><img src = "donatello.webp" height="75px" width="75px" /><p>krosario314</p></div>
            <div id="raph"><img src = "raph.png" height="75px" width="75px" /><p>ianahill</p></div>
            </div>
        </div>
    )
}