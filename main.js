import { Blockchain } from "./blockchain.js"
import { Transaction } from "./transaction.js"


const blockchain = new Blockchain();
/*
blockchain.addBlock(new Block("05/16/2021", "Sarah sent 20 dollars to Max. Sarah has 0$, Max 20$"));
blockchain.addBlock(new Block("05/17/2021", "Alfred sent 30 dollars to Sarah. Sarah has 20, Alfred has 50 "));
blockchain.addBlock(new Block("05/18/2021", "George sent 70 dollars to Alfred. Alfred has 120"));

//blockchain.chain[1].data = "KEKEKEKE";

console.log(blockchain);
console.log(blockchain.chainValidation())
*/

blockchain.createPendingTransaction(new Transaction("address 1", "address 2", 20));

console.log('Starting the miner.');

blockchain.minePendingTransactions('a');

blockchain.createPendingTransaction(new Transaction("address 3", "address 4", 30));

blockchain.minePendingTransactions('b');

console.log("Balance of Miners address is: ", blockchain.getBalance('a'));

//Fix Balance Calculation