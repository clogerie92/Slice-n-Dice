import './App.css';
import { useState } from "react";
import { NavBar } from "./components/navBar"
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { OrderPage } from "./pages/OrderPage";
import EmployeePage from "./pages/EmployeePage";
import { AddPizza } from "./pages/AddPizza";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });


function App() {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <NavBar testLogIn = {setIsLoggedIn} />
     
      {isLoggedIn ? <OrderPage /> : <EmployeePage />}
     
      <Footer />

    </div>
    </ApolloProvider>
  );
}

export default App;
