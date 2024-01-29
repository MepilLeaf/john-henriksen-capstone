import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>font test time</p>
      <BrowserRouter>
        <Routes>{/* <Route path="/create" element={} /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
