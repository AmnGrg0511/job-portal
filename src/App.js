import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Candidate } from "./components/Candidate";
import { Candidates } from "./components/Candidates";
function App() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      );
      const data = await response.json();
      setCandidates(data ?? []);
    })();
  }, []);
  console.log(candidates);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/shortlisted"
            element={
              <Candidates
                candidates={candidates.filter((e) => e.status === "shortlist")}
                setCandidates={setCandidates}
              />
            }
          />
          <Route
            path="/rejected"
            ed
            element={
              <Candidates
                candidates={candidates.filter((e) => e.status === "reject")}
                setCandidates={setCandidates}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <Candidate
                candidates={candidates}
                setCandidates={setCandidates}
              />
            }
          />
          <Route
            path="/"
            element={
              <Candidates
                candidates={candidates}
                setCandidates={setCandidates}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
