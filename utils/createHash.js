const crypto = require('crypto');

const SHA256 = (data)=>{
    const hash = crypto.createHash('sha256'); // creating a sha256 hash object
    hash.update(data); // adding the data to be hashed
    return hash.digest('hex'); // hashing with the data and digest method and returning the hash in hexadecimal format
}

module.exports = SHA256;