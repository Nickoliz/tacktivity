'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardTack = sequelize.define('BoardTack', {
    boardId: DataTypes.INTEGER,
    tackId: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    userId: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {});
  BoardTack.associate = function (models) {
    BoardTack.hasOne(models.Tack, { foreignKey: 'tackId' });
    BoardTack.belongsTo(models.User, { foreignKey: 'userId' });
    BoardTack.hasMany(models.Board, {foreignKey: "boardId"})

  };
  return BoardTack;
};
