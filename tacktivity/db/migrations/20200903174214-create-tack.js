'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.TEXT(300)
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tackImage: {
        references: { models: "Images" },
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        references: { models: "Users" },
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Tacks');
  }
};
