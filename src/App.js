import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from "./pages/CreateRecipes/CreateRecipe";
import BrowseRecipes from "./pages/BrowseRecipes/BrowseRecipes";
import Landing from "./pages/Landing/Landing";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav borderColor="none" />
                <Landing />
              </>
            }
          />
          <Route
            path="/create"
            element={
              <>
                <Nav borderColor="red" />
                <CreateRecipe />
              </>
            }
          />
          <Route
            path="/browse"
            element={
              <>
                <Nav borderColor="blue" />
                <BrowseRecipes />
              </>
            }
          />
          <Route path="/browse/:id" element={<BrowseRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
