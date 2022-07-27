import React, { useState } from "react";
import "./OrderPage.css"


export const OrderPage = () => {

    return (
        <div className="fade-in">
            
            <div id="pizza-div">

                <div id="contact-form">
                    <form>
                        <label for="fname">Name:</label>
                        <input type="text" id="fname" name="fname" /><br></br>
                        <label for="lname">Email Address:</label>
                        <input type="text" id="lname" name="lname" />
                    </form>


                </div>
            </div>



        </div>

    )
}