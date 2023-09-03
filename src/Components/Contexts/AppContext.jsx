import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext(null);

const netlify = "/.netlify/functions";

function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cases, setCases] = useState([]);
  const [caseData, setCaseData] = useState({});

  async function searchCases() {
    const res = await fetch(`${netlify}/caseSearch?search=${searchTerm}`);
    const data = await res.json();

    console.log(data.results);

    setCases(data.results);
  }

  async function getCaseData(id) {
    const res = await fetch(`${netlify}/caseData?id=${id}`);
    const data = await res.json();

    console.log(data);

    setCaseData(data);
  }

  const value = {
    cases,
    caseData,
    searchTerm,
    setSearchTerm,
    setCaseData,
    searchCases,
    getCaseData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
