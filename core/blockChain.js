const proofOfWork = require("../utils/proofOfWork");
const Block = require("./block");

class BlockChain {
    constructor() { // initializing the blockchain with a genesis block and a difficulty level
        this.chain = [ this.createGenesisBlock()];
        this.difficulty = 3; // difficulty level for proof of work algorithm for creating a string of 0's
    }

    createGenesisBlock(){ // creating the genesis block
        const GenesisBlock = new Block(0,"", "Genesis Block #0",Date.now(), "0")
        return GenesisBlock;
    }
    getLatestBlock(){ // getting the latest block in the chain
        const latestBlock = this.chain[this.chain.length - 1];
        return latestBlock;
    }

    createNewBlock(transactions){ // creating a new block with the transactions and mining it
        const latestBlock = this.getLatestBlock();
        const newBlock = new Block(latestBlock.index + 1,latestBlock.hash,transactions, Date.now())
        newBlock.mineBlock(this.difficulty); // mining the block with the current difficulty level
        this.chain.push(newBlock);// adding the block to the chain after mining
        this.difficulty = proofOfWork(newBlock, latestBlock, this.difficulty);   // adjusting the difficulty level after mining the block      
    }

    printBlockChain(){
        console.log(this.chain); // printing the blockchain
    }

    isChainValid(){
        for(let i = 1; i<this.chain.length; i++){
            const currentBlock = this.chain[i]; // checking if the current block hash is equal to the hash created by the block
            const prevBlock = this.chain[i-1];
            if(currentBlock.hash !== currentBlock.createHash()){
                return false;
            }
            if(currentBlock.previousHash !== prevBlock.hash){ // checking if the previous block hash is equal to the hash of the previous block
                return false;
            }
        }
        return true; // if all the blocks are valid then the chain is valid
    }


}
module.exports = BlockChain;