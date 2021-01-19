'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['userId']
        },
      },
      scopes: {
        userBoards: {
          attributes: {},
        },
      },
    });

  Board.associate = function (models) {
    Board.belongsTo(models.User, { foreignKey: 'userId' })
  };

  Board.getUserBoards = async function ({ userId }) {
    return await Board.scope("userBoards").findByPk(userId);
  };

  return Board;
};
