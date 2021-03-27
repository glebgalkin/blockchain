/*
//Blockchain simple implementation
 by Jomama. 
 All rights not reserved.
*/


import { Blockchain } from "./blockchain.js"
import { Transaction } from "./transaction.js"

import pkg from 'elliptic';
const { ec } = pkg;
const eliptic_key = ec('secp256k1');




/////////////////////////////////////////////// Testing Zone ////////////////////////////////////////////////



const myKey = eliptic_key.keyFromPrivate('17dbd8df46944fd1331b165b4fcee0ac1b362afe77b2739fcbd1296619df73ce');
const myWalletAddress = myKey.getPublic('hex');

const blockchain = new Blockchain();

const tr1 = new Transaction(myWalletAddress, 'Artem', 100);
tr1.signTransaction(myKey);

blockchain.createPendingTransaction(tr1);

blockchain.minePendingTransactions(myWalletAddress);

console.log(blockchain.getBalance(myWalletAddress));