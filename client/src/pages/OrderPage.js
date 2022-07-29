import React, { useState } from "react";
import "./OrderPage.css"
import { AddPizza } from "./AddPizza";


export const OrderPage = () => {

    const [hasOrdered, setHasOrdered] = useState(false);
    const [pizzaOrders, setPizzaOrders] = useState([]);
    const [orderInfo, setOrderInfo] = useState ({});
    
    const addPizza = () => {
        //make POST request to add Pizza to Order in the DB HERE //
        setHasOrdered(true);
    }

    const orderPage = (<div id="order-page">

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
                <h4>MMMeat-zza!</h4>
                <div><input type="checkbox" name="meats" id="meats-pepperoni" value="pepperoni" /> <label for="meats-pepperoni">Pepperoni</label></div><br />
                <div><input type="checkbox" name="meats" id="meats-sausage" value="sausage" /> <label for="meats-sausage">Sausage</label></div><br />
                <div><input type="checkbox" name="meats" id="meats-anchovies" value="anchovies" /> <label for="meats-anchovies">Anchovies</label></div><br />
                <div><input type="checkbox" name="meats" id="meats-bacon" value="bacon" /> <label for="meats-bacon">Bacon</label></div>
            </span>


            <span id="veggies">
                <h2>Veggies</h2>
                <h4>Turtle Power!</h4>
                <div><input type="checkbox" name="veggies" id="veggies-onions" value="onions" /> <label for="veggies-onions">Onions</label></div><br />
                <div><input type="checkbox" name="veggies" id="veggies-olives" value="olives" /> <label for="veggies-olives">Olives</label></div><br />
                <div><input type="checkbox" name="veggies" id="veggies-peppers" value="peppers" /> <label for="veggies-peppers">Green Peppers</label></div><br />
                <div><input type="checkbox" name="veggies" id="veggies-mushrooms" value="mushrooms" /> <label for="veggies-mushrooms">Mushrooms</label></div>
            </span>



        </div>

    </div>


    <div id="order-button"><button id="add-pizza" onClick={addPizza}>Add Pizza!</button></div>
</div>)
    return (
    <>
    {hasOrdered ? <AddPizza orderAgain={setHasOrdered}/> : orderPage}
    </>    

    )
}