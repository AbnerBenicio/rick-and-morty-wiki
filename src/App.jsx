import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Logo from "./assets/img/logo.png";

function App() {
  return (
    <>
      <header>
        <img className="logo" src={Logo} alt="Logo Rick and Morty" />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
