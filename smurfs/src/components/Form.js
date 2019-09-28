import React from "react";

const Form = ({ query, getSmurfs, updateQuery }) => {
  // console.log("aj: Form: query: ", query);
  return (
    <form action="">
      <input
        type="text"
        value={query}
        onChange={e => updateQuery(e.target.value)}
      />
      <button onClick={(e, q) => getSmurfs(e, query)}></button>
    </form>
  );
};

export default Form;
