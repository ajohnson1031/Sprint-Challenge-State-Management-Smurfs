import React from "react";

const AddForm = ({ state, addSmurf, updateNewSmurf }) => {
  return (
    <form className="add-form">
      <input
        className="add-field"
        type="text"
        name="name"
        placeholder="Enter Smurf name..."
        value={state.newSmurf.name}
        onChange={e =>
          updateNewSmurf({ ...state.newSmurf, [e.target.name]: e.target.value })
        }
      />
      <input
        className="add-field"
        type="text"
        name="age"
        placeholder="Enter Smurf age..."
        value={state.newSmurf.age}
        onChange={e =>
          updateNewSmurf({ ...state.newSmurf, [e.target.name]: e.target.value })
        }
      />
      <input
        className="add-field"
        type="text"
        name="height"
        placeholder="Enter Smurf height..."
        value={state.newSmurf.height}
        onChange={e =>
          updateNewSmurf({ ...state.newSmurf, [e.target.name]: e.target.value })
        }
      />
      <button onClick={(e, n) => addSmurf(e, state.newSmurf)}>
        SMURF A NEW SMURF!
      </button>
    </form>
  );
};

export default AddForm;
