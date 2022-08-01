import React from "react";
import { useQuery, gql } from '@apollo/client';
import { QUERY_ORDERS } from "../utils/queries";
// import { DELETE_ORDER } from '../utils/mutations';
import "./EmployeePage.css"



export default function EmployeePage() {
    const { loading, error, data } = useQuery(QUERY_ORDERS);

    console.log(error);

    return (
        <>
            {error ? (<div><h2>Success!</h2></div>) : (<div><h2>there was a problem</h2></div>)
            }
        </>
    )
}