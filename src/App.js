import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from "./pages/CreateRecipes/CreateRecipe";
import BrowseRecipes from "./pages/BrowseRecipes/BrowseRecipes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/browse" element={<BrowseRecipes />} />
          <Route path="/browse/:id" element={<BrowseRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
