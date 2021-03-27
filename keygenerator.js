import pkg from 'elliptic';
const { ec } = pkg;

const eliptic_key = ec('secp256k1');

const key = eliptic_key.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');


console.log(key);

console.log();
console.log('Private key:', privateKey);

console.log();
console.log('Public key:', publicKey);

