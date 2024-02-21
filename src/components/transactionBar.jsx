import React from 'react';
import Stack from '@mui/system/Stack';

function TransactionItem({ transaction }) {
  const handleClick = () => {
    console.log(`Transaction ID: ${transaction.txId}`);
  };

  return (
    <div className='item' onClick={handleClick}>
      <p>User: {transaction.user}</p>
      <p>User: {transaction.date}</p>
      <p>User: {transaction.total}</p>
    </div>
  )
}

function Item({ name }) {
  return (
    <div className="item">
      {name}
    </div>
  );
}

export default function TransactionBar() {
  return (
    <div className='transactionBar'>
      <h3 className='h3'>Recent Transactions</h3>

      <Stack spacing={2}>
        <Item name='User'/>
        <Item name='Date'/>
        <Item name='Total'/>
      </Stack>
    </div>
  )
}