import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "./Components/Contexts/AppContext";

import HomePage from "./Components/Pages/HomePage";
import CasePage from "./Components/Pages/CasePage";

import "./assets/css/App.css";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case/:id" element={<CasePage />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
