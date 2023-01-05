
let CryptoJS = require("crypto-js");



// Encrypt Method
let ciphertext = CryptoJS.AES.encrypt('Hello world!', 'jkgihg675gffs4-0896?=').toString();
console.log('ENCRYPTED DATA ===========>>', ciphertext);


// Decrypt Method
let bytes  = CryptoJS.AES.decrypt(ciphertext, 'jkgihg675gffs4-0896?=');
let originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log('DECRYPTED DATA  ===============>', originalText);// 'my message'