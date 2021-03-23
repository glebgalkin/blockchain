import { Blockchain } from "./blockchain.js"
import { Transaction } from "./transaction.js"

//Blockchain simple implementation by Jomama


/////////////////////////////////////////////// Testing Zone ////////////////////////////////////////////////
const blockchain = new Blockchain();



blockchain.createPendingTransaction(new Transaction("address 1", "address 2", 20));
blockchain.createPendingTransaction(new Transaction("address 3", "address 4", 30));

blockchain.minePendingTransactions('Mining address a');



blockchain.createPendingTransaction(new Transaction("address 5", "address 6", 60));
blockchain.createPendingTransaction(new Transaction("address 7", "address 8", 38));

blockchain.minePendingTransactions('Mining address b');


console.log(blockchain);

console.log("Balance of 2 address is a: ", blockchain.getBalance('address 2'));

