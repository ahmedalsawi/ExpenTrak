import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

import axios from 'axios';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get(`/api/transactions`).then((res) => {
      const data = res.data;
      setTransactions(data);
    });
  }, []);

  function handleDelete(item) {
    axios.delete(`/api/transactions/${item._id}`).then((res) => {
      const newt = transactions.filter((item) => item._id === res._id);
      setTransactions(newt);
    });
  }

  function handleAdd(item) {
    axios.post('/api/transactions', item).then((res) => {
      setTransactions([...transactions, res.data]);
    });
  }
  return (
    <div>
      <TransactionForm handleAdd={handleAdd} />
      <TransactionList items={transactions} handleDelete={handleDelete} />
    </div>
  );
}
