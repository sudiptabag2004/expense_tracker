export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        const updatedTransactionsDel = state.transactions.filter(transaction => transaction.id !== action.payload);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactionsDel));
        return {
          ...state,
          transactions: updatedTransactionsDel
        };
  
      case 'ADD_TRANSACTION':
        const updatedTransactionsAdd = [action.payload, ...state.transactions];
        localStorage.setItem('transactions', JSON.stringify(updatedTransactionsAdd));
        return {
          ...state,
          transactions: updatedTransactionsAdd
        };
  
      default:
        return state;
    }
  }
  