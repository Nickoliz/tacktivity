'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BoardTacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boardId: {
        allowNull: false,
        references: { model: "Boards" },
        type: Sequelize.INTEGER
      },
      tackId: {
        allowNull: false,
        references: { model: "Tacks" },
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.TEXT(50)
      },
      userId: {
        allowNull: false,
        references: { model: "Users" },
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.TEXT(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BoardTacks');
  }
};
