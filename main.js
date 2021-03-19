import { Blockchain } from "./blockchain.js"
import { Block } from './block.js'


const blockchain = new Blockchain();
blockchain.addBlock(new Block("05/16/2021", "Sarah sent 20 dollars to Max. Sarah has 0$, Max 20$"));
blockchain.addBlock(new Block("05/17/2021", "Alfred sent 30 dollars to Sarah. Sarah has 20, Alfred has 50 "));
blockchain.addBlock(new Block("05/18/2021", "George sent 70 dollars to Alfred. Alfred has 120"));

//blockchain.chain[1].data = "KEKEKEKE";

console.log(blockchain);
console.log(blockchain.chainValidation())