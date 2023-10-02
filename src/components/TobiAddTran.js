import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const TobiAddTran = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  }

  return (
    <div className="tobiForm">
      <h3 className='tobiNew'>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="htmlForm-control">
          <label htmlFor="text" className='description'>Description</label><br/>
          <input className="tobi2text" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount" className='amount'>Amount <br /></label><br/>
          <input  className="tobi2amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="tobi1btn">Add</button>
      </form>
    </div>
  );
}
