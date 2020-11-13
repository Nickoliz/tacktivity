'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BoardTacks', [
      r({ boardId: 1, tackId: 1, notes: "This is a note", userId: 1, comments: '' }),
      r({ boardId: 2, tackId: 2, notes: "Worked", userId: 2, comments: '' }),
      r({ boardId: 3, tackId: 3, notes: "WORKED", userId: 1, comments: '' }),
      r({ boardId: 4, tackId: 4, notes: "This worked...?", userId: 3, comments: '' }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BoardTacks', null, {});
  }
};
