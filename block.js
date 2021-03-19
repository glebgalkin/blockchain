import SHA256 from 'sha256'


export class Block{
    //Block Constructor
    constructor(timestamp, data, previous_hash){
        this.timestamp = timestamp;
        this.data = data;
        this.previous_hash = previous_hash;
        this.hash = this.generateHash();
        this.nonce = 0;
    }


    mineBlock(difficulty){
        /*
        zero_array = [difficulty+1];
        for (var w = 0; w < zero_array.length; w++){
            zero_array[w].push("O");
        }
        */
        while(this.hash.substring(0, difficulty) !== new Array(difficulty +1).join("0")){
            this.nonce++;
            this.hash = this.generateHash();
        }
    }

    //Generates Hash for the block once created
    generateHash(){
        
        return SHA256(this.timestamp + this.previous_hash+ this.data + this.nonce).toString();
    }

}
