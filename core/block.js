const SHA256 = require('../utils/createHash');

class Block {
    // constructor to initialize a block
    constructor(index, previousHash='', transactions, timeStamp){
        this.index = index;
        this.transactions = transactions;
        this.timeStamp = timeStamp;
        this.nonce = 0; // every block has a nonce value which is used in proof of work and is initialized to 0.
        this.previousHash = previousHash;
        this.hash = this.createHash(); // creating and hashing and storing the block data
    }
    createHash(){
        const data = this.index + this.previousHash + JSON.stringify(this.transactions) + this.timeStamp + this.nonce;
        return SHA256(data).toString(); // combining all the data as well as nonce and hashing it using SHA256 from crypto module
    }
    mineBlock(difficulty){
        let difficultyString = ""
        for(let i = 0; i< difficulty; i++){
            difficultyString += "0"; // creating a string of 0's of length equal to difficulty
        }
        while(this.hash.substring(0, difficulty)!== difficultyString){ // checking if the hash of the block has the required number of 0's for POW implementation
            this.nonce++;
            this.hash = this.createHash(); // incrementing the nonce and hashing the block data again
        }
        console.log("Block mined: " + this.hash);
    }

}
module.exports = Block;