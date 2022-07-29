import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ORDERS } from "../utils/queries";
// import { DELETE_ORDER } from '../utils/mutations';
import "./EmployeePage.css"

export const EmployeePage = () => {
    // const { data } = useQuery(QUERY_ORDERS);

    // const orderList = data?.order || [];

    return (
        <div className="fade-in">
            <div id="pizza-div">
                <div id="order-form"></div>

                <div id="order-cards">

            <span id="size">
                <h2>Size</h2>

                
            </span>
            </div>

            </div>
        </div>

    )
}