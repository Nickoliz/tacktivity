'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ email: 'demo@tacktivity.com', firstName: 'Demo', lastName: 'Tacktivity', age: 54, hashedPassword: createPassword() }),
      r({ email: 'jondoe@example.com', firstName: 'Jon', lastName: 'Doe', age: 34, hashedPassword: createPassword() }),
      r({ email: 'quell@example.com', firstName: 'Quellcrest', lastName: 'Falconer', age: 23, hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
