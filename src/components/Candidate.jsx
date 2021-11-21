import { useParams, useNavigate } from "react-router-dom";

export const Candidate = ({ candidates, setCandidates }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { name, Image } = candidates?.find((e) => e.id === id);

  const handle = (status) => {
    setCandidates((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
    navigate("/");
  };

  return (
    <div className="card" style={{ maxWidth: 600, margin: "50px auto" }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <img src={Image} alt={name} style={{ width: 300 }} />
      </div>
      <div>
        <p style={{ fontSize: 20, color: "#333" }}>{name}</p>
        <button
          onClick={() => handle("shortlist")}
          className="button button-shadow"
        >
          Shortlist
        </button>
        <button
          onClick={() => handle("reject")}
          className="button button-shadow"
        >
          Reject
        </button>
      </div>
    </div>
  );
};
