import React, { useState } from "react";
// import {Section} from "./section";
import "./navBar.css"

export const NavBar = () => {
    return (
        <div>

            <header>
                <img id="logo"src = "./logo.png" height="10%" width="10%" ></img>
                <div id="mikey-quote"><p>“There comes a time, brothers, where history is forged like melted cheese… it sticks together as one, but it’s still soft and squishy in the middle… mmm… are you with me?!” -Michaelangelo</p></div>
                <nav>
                    <a>login</a>
                    <a>signup</a>
                </nav>
            </header>
        </div>
    )
}