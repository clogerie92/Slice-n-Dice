import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      username
      email
      password
    }
  }
}
`;

export const ADD_CUSTOMER = gql`
  mutation addCustomer(
    $username: String!
    $email: String!
    $password: String!
    $address: String!
  ) {
    addCustomer(
      username: $username
      address: $address
      email: $email
      password: $password
    ) {
      token
      customer {
        _id
      }
    }
  }
`;
