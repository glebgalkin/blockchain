import SHA256 from 'sha256'
import { Transaction } from "./transaction.js"

export class Block{
    //Block Constructor
    constructor(timestamp, pendingTransactions =[], previous_hash){
        this.timestamp = timestamp;
        //this.data = data;
        this.previous_hash = previous_hash;
        this.hash = this.generateHash();
        this.nonce = 0;
        this.transactions = pendingTransactions;

    }


    //Block Mining
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== new Array(difficulty +1).join("0")){
            this.nonce++;
            this.hash = this.generateHash();
        }
    }


    //Generates Hash for the block once created
    generateHash(){
        return SHA256(this.timestamp + this.previous_hash+ this.transactions + this.nonce).toString();
    }

    //Iterating over block, making sure it contains valid transactions:
    /*
    isValidBlock(){
        for (var k = 0; k < this.transactions.length; k++){
            if(!this.transactions[k].validTransaction()){
                return false;
            }
        }

        return true;
    }
    */

    isValidBlock(){
        for (const tx of this.transactions){
            if(!tx.validTransaction()){
                return false;
            }
        }

        return true;
    }

}
