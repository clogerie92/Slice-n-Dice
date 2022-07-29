import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from "../utils/queries";
// import { DELETE_ORDER } from '../utils/mutations';
import "./EmployeePage.css"

export default function EmployeePage() {
    const { data } = useQuery(QUERY_ORDERS);

    const orderList = data || [];

    console.log(orderList);

    return (
        <>
            {orderList ? (
                <div><h2>
                Order History for {orderList} 
              </h2></div>
            ) : (
                <div>fjjkl</div>)
            }
        </>
    )
}