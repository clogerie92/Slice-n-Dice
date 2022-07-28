import React, { useState } from "react";
import "./footer.css"
export const Footer = () => {

    return (
        <div id = "footer">
            <p>Slice N' Dice Made With Love By:</p><br />
            <div id="icons">
            <div><img src = "leo.png" height="75px" width="75px" /><p>clogerie92</p></div>
            <div><img src = "mike.png" height="75px" width="75px" /><p>chrisjackson1</p></div>
            <div><img src = "donatello.webp" height="75px" width="75px" /><p>krosario314</p></div>
            <div><img src = "raph.png" height="75px" width="75px" /><p>ianahill</p></div>
            </div>
        </div>
    )
}