const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Users {
        _id: ID
        email: String
        orders: [Orders]
    }

    type Orders {
        _id: ID
        purchaseDate: String
        pizza: [Pizza]
    }

    type Pizza {
        _id: ID
        size: String
        type: String
        toppings: String
        price: Number
        quantity: Number
        user: [Users]
    }

    type Employee {
        _id: ID
        email: String
        orders: [Orders]
    }

    type Checkout {
        session: ID
      }
    
      type Auth {
        token: ID
        user: Users
      }
    
      type Query {
        orders: [Orders]
        pizzas(user: ID, username: String): [Pizza]
        pizza(_id: ID!): Pizza
        user: Users
        order(_id: ID!): Orders
        checkout(pizzas: [ID]!): Checkout
      }
    
      type Mutation {
        addUser(email: String!, password: String!, address: String!): Auth
        addOrder(pizzas: [ID]!): Orders
        updatePizza(_id: ID!, quantity: Int!): Pizza
        login(email: String!, password: String!): Auth
      }
`;

module.exports = typeDefs;