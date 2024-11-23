import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <h1 className="text-center">Welcome To Museum </h1>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
