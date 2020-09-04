'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardTack = sequelize.define('BoardTack', {
    boardId: DataTypes.INTEGER,
    tackId: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    comments: DataTypes.TEXT
  }, {});
  BoardTack.associate = function (models) {
    BoardTack.hasOne(models.User, { foreignKey: 'userId'});
    BoardTack.hasOne(models.Tack, { foreignKey: 'tackId' });
    BoardTack.hasOne(models.Board, {foreignKey: 'boardId'})

  };
  return BoardTack;
};
