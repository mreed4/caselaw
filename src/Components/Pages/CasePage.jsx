import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../Contexts/AppContext";
import { Parser } from "html-to-react";

export default function CasePage() {
  const { getCaseData, caseData } = useContext(AppContext);

  const { state } = useLocation();
  const { id, name_abbreviation } = state;

  useEffect(() => {
    getCaseData(id);
  }, []);

  return (
    <section className="case-page">
      <h1>Case Details</h1>
      <Link to="/" className="back-link">
        {" "}
        Back
      </Link>
      <h2>{name_abbreviation}</h2>
      <div></div>
      <p>{caseData.decision_date}</p>
      <div>
        <h3 className="page-part">Opinion</h3>
        {Object.keys(caseData).length > 0 && Parser().parse(caseData.casebody.data)}
      </div>
    </section>
  );
}
