import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Candidates = ({ candidates }) => {
  console.log(candidates);
  const [currCandidates, setCurrCandidates] = useState(candidates);

  useEffect(() => {
    setCurrCandidates(candidates);
  },[candidates])

  function autocomplete(input) {
    var reg = new RegExp(input,'i');
    setCurrCandidates(candidates.filter(({ name }) => name.match(reg)));
  }

  return (
    <div className="container">
      <div style={{ width: "100%", display: "flex" }}>
        <input
          onChange={({ target: { value } }) => autocomplete(value)}
          placeholder={"Search for the candidate"}
          className="search"
        />
        <Link to="/shortlisted">
          <button className="button button-shadow">Shortlisted</button>
        </Link>
        <Link to="/rejected">
          <button className="button button-shadow">Rejected</button>
        </Link>
      </div>
      {currCandidates.map(({ Image, name, id }) => (
        <Link
          to={"/" + id}
          style={{ textDecoration: "none", alignSelf: "center" }}
        >
          <div className="card button-shadow">
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <img src={Image} alt={name} style={{ width: 300 }} />
            </div>
            <p style={{ fontSize: 20, color: "#333" }}>{name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
