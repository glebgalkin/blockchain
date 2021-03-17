import SHA256 from 'sha256'


export class Block{
    //Block Constructor
    constructor(timestamp, data, previous_hash){
        this.timestamp = timestamp;
        this.data = data;
        this.previous_hash = previous_hash;
        this.hash = this.generateHash();
    }


    //Generates Hash for the block once created
    generateHash(){
        return SHA256(this.timestamp + this.previous_hash+this.timestamp + JSON.stringify(this.data))
    }

}


//module.exports = Block;