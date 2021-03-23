import { Block } from './block.js'
import { Transaction } from "./transaction.js"

export class Blockchain{


    //Blockchain constructor
    constructor(){
        this.chain = [];
        this.chain[0]  = this.addFirstBlock();
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 10;
    }
    

    //Adding the first block as a foundation
    addFirstBlock(){
    return new Block("05/16/2021", [new Transaction("none", "Gleb's address", 1000)],"0");
    }

    minePendingTransactions(walletAddress){
        var dt = new Date();
        let block = new Block(dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate(),this.pendingTransactions,this.getLastBlock().hash );
        block.mineBlock(this.difficulty);

        this.chain.push(block);
        // Empty the pending transactions array once those pushed into new block,
        // Add rewarding transaction to the pending transactions

        this.pendingTransactions = [new Transaction ("none", walletAddress, this.miningReward)];

    }

    //Transaction is being added to Pending trasactions
    createPendingTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    //get the balance of any address through looping the whole chain
    getBalance(address){
        let balance = 0;
        this.chain.forEach( block=>{
            block.transactions.forEach(transaction => {
                
                if(address == transaction.fromAddress){
                    balance = balance - trans.amount;
                }
                if(address == transaction.toAddress){
                    balance = balance + transaction.amount; 
                }

            });
        })
        return balance;

    }


    getLastBlock(){
        const n = this.chain.length;
        return this.chain[n-1];
    }

    //Run throught the chain and check whether the hashes are connectedd
    //Every block generated hash has to be equal to block hash.
    chainValidation(){
        for (let k = 1; k < this.chain.length; k++){

            

            const current_block = this.chain[k];
            const prev_block = this.chain[k-1];

            if (prev_block.hash !== current_block.previous_hash){
                console.log("Previous block hash not equal to current block previous hash")
                console.log(prev_block.hash);
                console.log(current_block.previous_hash);
                return "Validation did not pass" + false;
            }
            if (current_block.hash !== current_block.generateHash()){

                console.log("Current block has is not equal to current block generated hash:")
                console.log(current_block.hash);
                console.log(current_block.generateHash());

                return "Validation did not pass: " + false;
            }
            return "Validation passed: " + true;
        }
        
        
    }

}

