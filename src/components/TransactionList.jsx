import React from 'react';
import TransactionItem from './TransactionItem';

export default function TransactionList(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <TransactionItem
          key={item._id}
          item={item}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}
