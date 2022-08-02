import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_PIZZAS } from "../utils/queries";
// import { DELETE_ORDER } from '../utils/mutations';
import "./EmployeePage.css"



export default function EmployeePage() {
    console.log("EmployeePage");
    const { loading:loadingOrders, data:orderData } = useQuery(QUERY_PIZZAS);

    //orderData.orders (use this syntax to access data in orderData)
    // const orders = data?.orders || [];
    
    if (loadingOrders) {
        return <div>Loading...</div>;
    }


    return (

        <div className = "fade-in">
        <div id="pizza-div-employee-page">
            <div id="order-form">  </div>

            {console.log(orderData.pizzas)}
          
            
            {orderData.pizzas.map((pizza) => (
               <span id="employee-order-card">
               <h4>{pizza.size}</h4>
               <h4>{pizza.crust}</h4>
               <h4>{pizza.meats}</h4>
               <h4>{pizza.veggies}</h4>
               {/* <div id="employee-order-btn"><button id="add-pizza">Complete Order</button></div> */}
           </span>
            ))}

            {/* { <div id="order-cards"> 
            <span id="employee-order-card">
                <h2>Order #5678</h2>
                <h4>{orderData.pizzas[1].crust}</h4>
                <h4>small</h4>
                <h4>Bacon, mushrooms</h4>
                <div id="employee-order-btn"><button id="add-pizza">Complete Order</button></div>
            </span>
            
            </div> } */}

        </div>
      

        </div>
        // <>
           
        // </>
    )
}