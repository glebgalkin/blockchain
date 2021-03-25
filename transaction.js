import SHA256 from 'sha256'

export class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        //Amount is INT
    }

    generateTransactionHash(){
        return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    }

    //The argument "signing_key" is a key generated from keygenerator.js file, signing key a.k.a key is an OBJECT.
    signTransaction(signing_key){

        //Hashing the transaction:
        const transaction_hash = this.generateTransactionHash();

        //Creating a signature:
        const sig = signing_key.sign(transaction_hash, 'base64');

        //Storing created signature into transaction:
        this.signature = sig.toDer('hex');
    }
} 