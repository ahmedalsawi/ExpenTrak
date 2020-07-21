import React from 'react';

export default function TransactionItem({ item, handleDelete }) {
  return (
    <div className="card text-left">
      <div className="card-body">
        {item.title}
        <span>
          <button
            className="btn btn-danger fa fa-trash"
            onClick={() => handleDelete(item)}
          ></button>
        </span>
      </div>
    </div>
  );
}
