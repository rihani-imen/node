const generatePassword = require("generate-password");

// Génère un mot de passe aléatoire de 10 caractères
const password = generatePassword.generate({
  length: 10,
  numbers: true,
});

console.log(password);
