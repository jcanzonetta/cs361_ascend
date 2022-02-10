import { useState } from "react";

function ClimbSearch() {
  const [enteredSearch, setEnteredSearch] = useState("");

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
            alert(`you entered ${enteredSearch}`);
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
