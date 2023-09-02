import { useEffect, useContext } from "react";
import { AppContext } from "./Components/Contexts/AppContext";

import "./assets/css/App.css";

function App() {
  const { searchCases, cases } = useContext(AppContext);

  useEffect(() => {
    searchCases();
    cases && console.log(cases);
  }, []);

  return <></>;
}

export default App;
