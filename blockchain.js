import { Block } from './block.js'

export class Blockchain{


    //Blockchain constructor
    constructor(){
        this.chain = [];
        this.chain[0]  = this.addFirstBlock();
        this.difficulty = 4;
    }
    

    //Adding the first block as a foundation
    addFirstBlock(){
    return new Block("05/16/2021", "Data of the first block",0);
    }

    //Adding new block to the chain
    addBlock(Block){
        Block.previous_hash = this.getLastBlock().hash;
        Block.mineBlock(this.difficulty);
        this.chain.push(Block);
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

