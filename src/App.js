import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/header/Navbar";
import Menu from "./pages/Menu";
import Food from "./pages/Food";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category/:categoryName" element={<Food />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
