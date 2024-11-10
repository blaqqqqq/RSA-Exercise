// bob.js
const crypto = require("crypto");
const fs = require("fs");

// Load Alice's public key
const publicKey = fs.readFileSync("alice_public.pem", "utf8");

// Load the message and signature from the file
const { message, signature } = JSON.parse(fs.readFileSync("message.json", "utf8"));

// Verify the signature
const verify = crypto.createVerify("SHA256");
verify.update(message);
verify.end();
const isVerified = verify.verify(publicKey, signature, "hex");

console.log("Signature Verification:", isVerified);
console.log("Message:", message);
