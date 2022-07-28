import React, { useState } from "react";
// import {Section} from "./section";
import "./navBar.css"

export const NavBar = () => {
    return (
        <div>

            <header>
                <img id="logo"src = "./logo.png" height="10%" width="10%" ></img>

                <nav>
                    <a>login</a>
                    <a>signup</a>
                </nav>
            </header>
        </div>
    )
}