import './App.css';
import { useState } from "react";
import { NavBar } from "./components/navBar"
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { OrderPage } from "./pages/OrderPage";
import EmployeePage from "./pages/EmployeePage";
import { AddPizza } from "./pages/AddPizza";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
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
