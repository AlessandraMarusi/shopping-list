import React from "react";
import "./App.scss";
// import variables from "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductAdd from "./routes/ProductAdd";
import RecipeList from "./routes/RecipeList";
import Lista from "./routes/IngredientList";
import CatFacts from "./routes/CatFacts";

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
            <Route path="/RecipeList" element={<RecipeList />}></Route>
            <Route path="/CatFacts" element={<CatFacts />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
