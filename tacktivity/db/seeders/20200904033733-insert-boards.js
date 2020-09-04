'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Boards', [
      r({title: "Dogs", userId: 1}),
      r({title: "Hippos", userId: 2}),
      r({title: "Rabbits", userId: 3}),
      r({title: "Chickens", userId: 2}),
      r({title: "Childrens", userId: 1}),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Boards')
  }
};
