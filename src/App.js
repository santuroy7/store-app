import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import CartComponent from "./components/CartComponent";
import AboutComponent from "./components/AboutComponent";
import ContectusComponent from "./components/ContactusComponent";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/cart" element={<CartComponent />}></Route>
        <Route path="/about" element={<AboutComponent />}></Route>
        <Route path="/contact" element={<ContectusComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
