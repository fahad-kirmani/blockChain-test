const BlockChain = require("../core/blockChain");

const blockChain = new BlockChain();

console.log("test Running");


blockChain.createNewBlock("This is the first block, so person A has 100 coins and person B has 0 coins");
// blockChain.createNewBlock("Person A sends 10 coins to person B");
// blockChain.createNewBlock("Person B sends 5 coins to person A");
console.log("test running 2");


blockChain.printBlockChain();

console.log("Is the blockChain valid? " + blockChain.isChainValid());

blockChain.chain[1].transactions = "person A sends 100 coins to person B";

blockChain.printBlockChain();

console.log("Is the blockChain valid? " + blockChain.isChainValid());