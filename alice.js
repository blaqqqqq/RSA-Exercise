// alice.js
const crypto = require("crypto");
const fs = require("fs");

// Load Alice's private key
const privateKey = fs.readFileSync("alice_private.pem", "utf8");

// Message Alice wants to send
const message = "I want some apples";

// Sign the message
const sign = crypto.createSign("SHA256");
sign.update(message);
sign.end();
const signature = sign.sign(privateKey, "hex");

console.log("Signature:", signature);
console.log("Message:", message);

// Save message and signature to a file to simulate sending to Bob
fs.writeFileSync("message.json", JSON.stringify({ message, signature }));
console.log("Message and signature saved to message.json for Bob");
