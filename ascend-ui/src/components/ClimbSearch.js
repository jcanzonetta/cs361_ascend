import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClimbSearch() {
  const [enteredSearch, setEnteredSearch] = useState("");

  const navigate = useNavigate();

  return (
    <form>
      <fieldset>
        <input
          type="text"
          placeholder="Search for a climb by name, location, or other quality"
          value={enteredSearch}
          onChange={(e) => setEnteredSearch(e.target.value)}
        ></input>
        <button
          onClick={(e) => {
            setEnteredSearch(e.target.value);
            e.preventDefault();
          }}
        >
          Search
        </button>
      </fieldset>
    </form>
  );
}

export default ClimbSearch;
