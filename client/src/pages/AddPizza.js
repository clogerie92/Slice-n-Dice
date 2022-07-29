import React, { useState } from "react";
import "./AddPizza.css"
import { Link } from "react-router-dom";


export const AddPizza = ({orderAgain}) => {
    const newOrder = () => {
        orderAgain(false);
    }
    return (
        <div id="order-page">

            <div id="pizza-div-order">

                <div id="add-pizza-form">  
                <h1>Pizza Added to Cart!</h1>
                <div id="order-button"><button id="add-pizza" onClick={newOrder}>Add Another Pizza!</button></div>
                <div id="order-button"><Link to = "/checkout"><button id="add-pizza" >Go to Checkout!</button></Link></div>
                </div>
                


            </div>


            
        </div>

    )
}