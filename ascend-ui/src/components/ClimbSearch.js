import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClimbSearch({ placeholder = null, initialValue = null }) {
  const [enteredSearch, setEnteredSearch] = useState("");

  const navigate = useNavigate();

  return (
    <form className="search-form">
      <fieldset className="search-fieldset">
        <input
          type="text"
          className="search-bar"
          placeholder={placeholder}
          defaultValue={initialValue}
          onChange={(e) => setEnteredSearch(e.target.value)}
        ></input>
        <button
          className="search-button"
          onClick={(e) => {
            setEnteredSearch(e.target.value);
            navigate(`/find?search=${enteredSearch}`);
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
