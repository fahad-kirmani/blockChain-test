# Blockchain Simulation
A basic blockchain implementation demonstrating core features like hashing, block linking, and tamper detection.

## Features
- **Block Structure**: Index, timestamp, transactions, previous hash, current hash.
- **Hashing**: SHA-256 to secure block data.
- **Proof-of-Work** (Optional): Mining mechanism with adjustable difficulty.
- **Tamper Detection**: Validation method to identify corrupted blocks.
- **Modular Code**: Separated classes for blocks, chain, and utilities.

## Setup
1. Clone the repository:
Install dependencies:
npm install

## Usage
Run the simulation:
node index.js

## Example output:
" test Running
Block mined: 000e27fad4cb7e264206ccab98374f449a44dfadc312f3d48cc8948a73cec847
1737845183962
1737845183956
Time difference:  0.0001
Minning difficulty increased:  4
4
test running 2
[
  Block {
    index: 0,
    transactions: 'Genesis Block #0',
    timeStamp: 1737845183956,
    nonce: 0,
    previousHash: '',
    hash: '30f080adcfa51a28f3223eeaf786df35603de6ddf5fe1645d986230a12e7c408'
  },
  Block {
    index: 1,
    transactions: 'This is the first block, so person A has 100 coins and person B has 0 coins',
    timeStamp: 1737845183962,
    nonce: 4713,
    previousHash: '30f080adcfa51a28f3223eeaf786df35603de6ddf5fe1645d986230a12e7c408',
    hash: '000e27fad4cb7e264206ccab98374f449a44dfadc312f3d48cc8948a73cec847'
  }
]
Is the blockChain valid? true
[
  Block {
    index: 0,
    transactions: 'Genesis Block #0',
    timeStamp: 1737845183956,
    nonce: 0,
  },
    index: 1,
    timeStamp: 1737845183962,
    nonce: 4713,
    previousHash: '30f080adcfa51a28f3223eeaf786df35603de6ddf5fe1645d986230a12e7c408',
    hash: '000e27fad4cb7e264206ccab98374f449a44dfadc312f3d48cc8948a73cec847'
  }
]
Is the blockChain valid? false"

## Testing
Simulation Tests:
Run the included test script to validate blockchain behavior:
node tests/test.js

## Custom Tests:
Add your own test scripts to the tests folder.
// tests/custom.test.js
