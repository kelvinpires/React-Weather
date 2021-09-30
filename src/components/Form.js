import React from "react";

function Form({ city, handleSubmit }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={city} placeholder="City name" />
        <button onClick={handleSubmit} type="submit">
          <img src="./search.svg" alt="Search button" />
        </button>
      </form>
    </>
  );
}

export { Form };
