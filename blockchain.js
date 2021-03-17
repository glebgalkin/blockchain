import { Block } from './block.js'

export class Blockchain{


    //Blockchain constructor
    constructor(){
        this.chain = [];
        this.chain[0]  = this.addFirstBlock();
    }
    

    //Adding the first block as a foundation
    addFirstBlock(){
    return new Block("05/16/2021", "Data of the first block",0);
    }

    //Adding new block to the chain
    addBlock(Block){
        Block.previous_hash = this.getLastBlock().hash;
        this.chain.push(Block);
    }

    getLastBlock(){
        const n = this.chain.length;
        return this.chain[n-1];
    }

}

