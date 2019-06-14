function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction['id'] === id);
}

function getSign(inOrOUt) {
  return inOrOUt === 'in' ? 1 : -1;
}

function isItemAvailable(id, transactions) {
  let inventoryReducer = (acc, transaction) => acc + transaction['quantity'] * getSign(transaction['movement']);
  return transactionsFor(id, transactions).reduce(inventoryReducer, 0) > 0 ? true : false;
}


var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true

// function isItemAvailable(id, transactions) {
//   let remained = transactionsFor(id, transactions).reduce((acc, transaction) => acc + transaction['quantity'] * getSign(transaction['movement']), 0);
//   return remained > 0 ? true : false;
// }
