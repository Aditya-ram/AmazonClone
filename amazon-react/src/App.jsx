// import { useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Footer from './Components/Footer/Footer.jsx'
function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
      <NavBar/>
          <Routes>
            <Route  path="/" element={<HomeScreen/>}/>
            <Route  path="/products" element={<Products/>}/>
            <Route  path="/cart" element={<Cart/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
