import React, { useEffect, useState } from "react";
import "./NewSuggestion.css";
import API from "../services/api";

function NewSuggestion() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const fetchSuggestions = async () => {
    try {
      const res = await API.get("/suggestions");
      setSuggestions(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch suggestions");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="suggestion-container">
      <div className="suggestion-card">
        <h1>🥗 Nutrition Suggestions</h1>

        {loading ? (
          <h3>Loading...</h3>
        ) : suggestions.length === 0 ? (
          <h3>No Suggestions Found</h3>
        ) : (
          suggestions.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ddd",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>Disease: {item.disease}</h3>

              <p>
                <strong>Suggestion:</strong>{" "}
                {item.suggestion}
              </p>

              {item.user && (
                <p>
                  <strong>User:</strong>{" "}
                  {item.user.name}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NewSuggestion;