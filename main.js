import { Blockchain } from "./blockchain.js"
import { Block } from './block.js'


const blockchain = new Blockchain();
blockchain.addBlock(new Block("05/16/2021", "Sarah sent 20 dollars to Max. Sarah has 0$, Max 20$"));

console.log(blockchain);