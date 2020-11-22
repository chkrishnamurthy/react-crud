import React from "react";

const Form = ({ id, formSubmit, updateData, inputData, inputHandle }) => {
  const action = id === null ? formSubmit : updateData;
  const buttonStyle = id === null ? "btn btn-primary" : "btn btn-danger";

  return (
    <div>
      <form onSubmit={action} className="form-inline">
        <div className="form-group form-group-sm">
          <input
            className="form-control"
            type="text"
            value={inputData}
            placeholder="Enter Here...!"
            onChange={inputHandle}
          />
          <button type="submit" className={buttonStyle}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
