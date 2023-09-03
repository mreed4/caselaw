import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

export default function HomePage() {
  const { searchCases, cases, searchTerm, setSearchTerm } = useContext(AppContext);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    searchCases();
  }

  return (
    <section className="home-page">
      <div className="search">
        <h1>Search</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button onClick={searchCases} type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="results">
        <ol>
          {cases.map((c) => (
            <li className="result" key={c.id}>
              <Link to={`/case/${c.id}`} state={c}>
                {/* <h2>{c.name_abbreviation.length > 24 ? c.name_abbreviation.substring(0, 24) + "..." : c.name_abbreviation}</h2> */}
                <h2>{c.name_abbreviation}</h2>
                <p className="meta-data">
                  <span>{c.decision_date} &middot; </span>
                  <span>{c.jurisdiction.name}</span>
                  {/* <span>{c.court.name}</span> */}
                  <span className="block">Docket {c.docket_number ? truncate(c.docket_number, 15) : "N/a"}</span>
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
