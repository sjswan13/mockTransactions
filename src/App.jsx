import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import { mockTransactions } from './assets/mockTransactions';
import Heading from './components/heading';
import Sidebar from './components/sidebar';
import TransactionBar from './components/transactionBar';

function App() {
  const [data, setData] = useState(mockTransactions);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className='primaryDashboard'>
      <TransactionBar transactions={mockTransactions}/>
      <Heading />
      <Sidebar />
    </div>
  )
}

export default App;