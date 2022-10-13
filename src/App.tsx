import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductAdd from "./routes/ProductAdd";
import RecipeList from "./routes/RecipeList";
import CatFacts from "./routes/CatFacts";
import IngredientList from "./routes/IngredientList";
import RecipeDetails from "./routes/RecipeDetails";


const ThemeContext = React.createContext('light');

function App() {
  /* #region STYLE */
  const containerStyle = {
    height: "80vh",
  };
  /* #endregion */
  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div style={containerStyle}>
            <Routes>
              <Route path="/" element={<IngredientList />}></Route>
              <Route path="/ProductAdd" element={<ProductAdd />}></Route>
              <Route path="/RecipeList" element={<RecipeList />}></Route>
              <Route path="/CatFacts" element={<CatFacts />}></Route>
              <Route path="/RecipeList/:id" element={<RecipeDetails />}></Route>

            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
