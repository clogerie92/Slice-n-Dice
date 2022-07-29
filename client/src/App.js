import './App.css';
import { useState } from "react";
import { NavBar } from "./components/navBar"
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { OrderPage } from "./pages/OrderPage";
import { EmployeePage } from "./pages/EmployeePage";
import { AddPizza } from "./pages/AddPizza";
function App() {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    <div className="App">
      <NavBar testLogIn = {setIsLoggedIn} />
      {isLoggedIn ? <OrderPage /> : <HomePage />}
      <Footer />

    </div>
  );
}

export default App;
