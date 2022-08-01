import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from "../utils/queries";
// import { DELETE_ORDER } from '../utils/mutations';
import "./EmployeePage.css"



export default function EmployeePage() {
    console.log("EmployeePage");
    const { loading:loadingOrders, data:orderData } = useQuery(QUERY_ORDERS);

    //orderData.orders (use this syntax to access data in orderData)
    // const orders = data?.orders || [];
    

    if (loadingOrders) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {console.log(orderData)}
            {orderData ? (<div><h2>Success!</h2></div>) : (<div><h2>there was a problem</h2></div>)
            }
        </>
    )
}