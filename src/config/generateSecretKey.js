const crypto = require('crypto');

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(64).toString('hex');
  console.log('Sua chave secreta gerada:', secretKey);
};

generateSecretKey();
