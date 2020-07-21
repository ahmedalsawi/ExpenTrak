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

  return (
    <div>
      <TransactionForm />
      <TransactionList items={transactions} />
    </div>
  );
}
