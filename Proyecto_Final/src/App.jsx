import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import AgregarProducto from "./Components/add-product/add-product";

function App() {
  return (
    <>
      <div>
        <Header />
        <Body />
        <AgregarProducto/>
        <Footer />
      </div>
    </>
  );
}

export default App;
