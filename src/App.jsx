import { useState, useEffect } from "react";
import "./App.css";

async function searchCases() {
  const res = await fetch(`${netlify}/caseSearch`);
  const data = await res.json();
}

const netlify = "/.netlify/functions";

function App() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    searchCases();
  }, []);

  return <></>;
}

export default App;
