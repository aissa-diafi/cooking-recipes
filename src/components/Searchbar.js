import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./Searchbar.css";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Search:</span>
          <input
            type="search"
            id="search"
            placeholder="Search your recipe"
            required
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
