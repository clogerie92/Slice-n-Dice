import './App.css';
import { NavBar } from "./components/navBar"
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { OrderPage } from "./pages/OrderPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />

    </div>
  );
}

export default App;
