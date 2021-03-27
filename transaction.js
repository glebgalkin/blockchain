import SHA256 from 'sha256'
import pkg from 'elliptic';
const { ec } = pkg;
const eliptic_key = ec('secp256k1');

export class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.signature = '';
        //Amount is INT
    }

    generateTransactionHash(){
        return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    }



    /*
    Bitcoin uses the Elliptic Curve Digital Signature Algorithm (ECDSA). 
    Your private key is used to create the signature and your public key is used to verify the signature. 
    This allows anybody to verify your signature as long as they have your public key.
    */


    

    
    //Signing key = key.genPair() - pair of private and public key
    signTransaction(signing_key){

        //Hashing the transaction:
        const transaction_hash = this.generateTransactionHash();

        //Creating a signature:
        //(Again, in order to create a signature both private and public key needed)
        const sig = signing_key.sign(transaction_hash, 'base64');

        //Storing created signature into transaction:
        this.signature = sig;
    }

    //checking whether transaction is properly signed
    validTransaction(){

        if(this.fromAddress == 'none'){
            return true;
        }

        if(!this.signature || this.signature.length == 0){
            throw new Error('No signature in this transaction');
        }

        //fromAddress has a public key, so get that publicKey to verify the signature.
        const publicKey = eliptic_key.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.generateTransactionHash(), this.signature);

    }
} 