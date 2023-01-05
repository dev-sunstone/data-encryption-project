const Cryptr = require('cryptr');
const cryptr = new Cryptr('helloWorld');


//encrypted email id 
const encryptedString = cryptr.encrypt('sudhanshukumar@gmail.com');
console.log("encrypted string ======>>",encryptedString)



//decrypted email id 
const decryptedString = cryptr.decrypt(encryptedString);
console.log("decrypted eamil   ========>",decryptedString);



 