import { Block } from './block.js'

class Blockchain{


    //Blockchain constructor
    constructor(){
        this.chain = [];
        const first_block = addFirstBlock();
        this.chain[0] = first_block;
    }


    addBlock(Block){
        this.chain.push(Block);
    }

}


function addFirstBlock(){
    const first_block = new Block("05/16/2021", "Data of the first block",0);
    return first_block;
}







const blockchain = new Blockchain();


const Block_1 = new Block("05/16/2021", "Sarah sent 20 dollars to Max. Sarah has 0$, Max 20$", blockchain.chain[0].hash);
blockchain.addBlock(Block_1);

console.log(blockchain.chain[1]);