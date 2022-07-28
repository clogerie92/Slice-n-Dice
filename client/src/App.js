import './App.css';
import { NavBar } from "./components/navBar"
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";

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
