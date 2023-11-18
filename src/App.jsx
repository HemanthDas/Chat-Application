import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/navbar";
import "./App.css";
function App() {
  return (
    <>
      <div id="navbar">
        <Navbar />
      </div>
      <div className="whole">
        <Outlet />
      </div>
    </>
  );
}

export default App;
