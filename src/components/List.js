import React from "react";

const List = ({ data, edit, deleteData, DeleteDisable, id }) => {
  const listData = data.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item}</td>
      <td>
        <button className="btn btn-outline-info" onClick={() => edit(index)}>
          Edit
        </button>
        <span> </span>
        <button
          className="btn btn-outline-danger"
          disabled={id === index ? DeleteDisable : false}
          onClick={() => deleteData(index)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Text</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{listData}</tbody>
      </table>
    </div>
  );
};

export default List;
