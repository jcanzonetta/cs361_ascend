import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClimbSearch({ placeholder = null, initialValue = null }) {
  const [enteredSearch, setEnteredSearch] = useState("");

  const navigate = useNavigate();

  return (
    <form>
      <fieldset>
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={initialValue}
          onChange={(e) => setEnteredSearch(e.target.value)}
        ></input>
        <button
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
