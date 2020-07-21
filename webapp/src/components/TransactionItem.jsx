import React from 'react';

export default function TransactionItem(props) {
  return (
    <div class="card text-left">
      <div class="card-body">
        {props.item.title}
        <span>
          <button className="btn btn-danger fa fa-trash"></button>
        </span>
      </div>
    </div>
  );
}
