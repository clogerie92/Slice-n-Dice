import React, { useState } from "react";
import "./OrderPage.css"


export const OrderPage = () => {

    return (
        <div id="order-page">

            <div id="pizza-div-order">

                <div id="order-form">  </div>
                <div id="order-cards">

                    <span id="size">
                        <h2>Size</h2>
                        <h4>How hungry are you?</h4>
                        <input type="radio" id="small" name="size" value="small" />
                        <label for="small"> Small: $10</label><br></br><br></br>
                        <input type="radio" id="medium" name="size" value="medium" />
                        <label for="medium"> Medium: $15</label><br></br><br></br>
                        <input type="radio" id="large" name="size" value="large" />
                        <label for="large"> Large: $20</label>
                    </span>

                    <span id="crust">
                        <h2>Crust</h2>
                        <h4>What'll it be?</h4>
                        <input type="radio" id="child" name="age" value="child" />
                        <label for="child"> Hand-Tossed</label><br></br><br></br>
                        <input type="radio" id="adult" name="age" value="adult" />
                        <label for="adult"> Deep-Dish</label><br></br><br></br>
                        <input type="radio" id="senior" name="age" value="senior" />
                        <label for="senior"> Thin-Crust</label>
                    </span>


                    <span id="meats">
                        <h2>Meats</h2>
                    </span>


                    <span id="veggies">
                        <h2>Veggies</h2>
                    </span>



                </div>

            </div>


            <div id="order-button"><button id="add-pizza">Add Pizza!</button></div>
        </div>

    )
}