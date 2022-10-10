import React from "react";
import "./App.scss";
// import variables from "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductAdd from "./routes/ProductAdd";
import Page2 from "./routes/Page2";
import Lista from "./routes/List";

function App() {
  /* #region STYLE */
  const containerStyle = {
    height: "80vh",
  };
  /* #endregion */
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div style={containerStyle}>
          <Routes>
            <Route path="/" element={<Lista />}></Route>
            <Route path="/ProductAdd" element={<ProductAdd />}></Route>
            <Route path="/Page2" element={<Page2 />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
