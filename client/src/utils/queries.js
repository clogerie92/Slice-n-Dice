import { gql } from "@apollo/client";

export const QUERY_ORDERS = gql`
    query {
        orders {
        _id
        status
        createdDate
        pizzas {
            _id
            size
            crust 
            meats
            veggies
        }
    }
    }
`;