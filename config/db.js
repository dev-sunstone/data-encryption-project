const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('Encrypted_Data', 'root', 'password', {
  host: 'localhost',
  dialect:  'mysql'  
});

exports.db = sequelize;