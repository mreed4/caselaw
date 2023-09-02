import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext(null);

const netlify = "/.netlify/functions";

function AppProvider({ children }) {
  const [cases, setCases] = useState([]);

  async function searchCases() {
    const res = await fetch(`${netlify}/caseSearch?search=tort`);
    const data = await res.json();

    console.log(data.results);

    setCases(data.results);
  }

  const value = {
    cases,
    searchCases,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
