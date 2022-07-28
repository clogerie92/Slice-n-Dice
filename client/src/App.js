import './App.css';
import { NavBar } from "./components/navBar"
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { OrderPage } from "./pages/OrderPage";
import { EmployeePage } from "./pages/EmployeePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <OrderPage />
      <Footer />

    </div>
  );
}

export default App;
