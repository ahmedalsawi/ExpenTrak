import React from "react";
import { Link } from "react-router-dom";
export default function TransactionItem({ item, handleDelete }) {
  return (
    <div className="card">
      <div className="card-body">
        <Link to="/" className="d-flex flex-row d-flex justify-content-between">
          <div>
            <h5 className="mb-1">{item.title}</h5>
          </div>
          <div>
            <h2>{item.amount}</h2>
          </div>
        </Link>
        <button
          className="btn btn-danger fa fa-trash"
          onClick={() => handleDelete(item)}
        ></button>
      </div>
    </div>
  );
}
