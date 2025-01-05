// import { useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
function App() {

  return (
    <div>
      <Header />
      <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route  path="/" element={<HomeScreen/>}/>
            <Route  path="/products" element={<Products/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
