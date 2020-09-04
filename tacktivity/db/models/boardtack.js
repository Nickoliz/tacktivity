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
    BoardTack.hasOne(models.User, { foreignKey: 'id'});
    BoardTack.hasOne(models.Tack, { foreignKey: 'id' });
    BoardTack.hasOne(models.Board, {foreignKey: 'id'})

  };
  return BoardTack;
};
