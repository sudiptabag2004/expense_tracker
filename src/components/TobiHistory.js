import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/globalState';

export const TobiHistory = () => {
  const { transactions } = useContext(GlobalContext);
  const last100Transactions = transactions.slice(-100);

  return (
    <div className="jerry">
      <h3 className='tobi1history'>History</h3>
      <ul className='list transaction-history'>
        {last100Transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
