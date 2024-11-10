// generate-keys.js
const crypto = require("crypto");
const fs = require("fs");

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

// Save Alice's keys to files
fs.writeFileSync("alice_private.pem", privateKey.export({ type: "pkcs1", format: "pem" }));
fs.writeFileSync("alice_public.pem", publicKey.export({ type: "pkcs1", format: "pem" }));

console.log("Alice's keys generated and saved as alice_private.pem and alice_public.pem");
