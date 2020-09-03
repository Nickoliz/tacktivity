'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardTack = sequelize.define('BoardTack', {
    boardName: DataTypes.STRING,
    tackId: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    userId: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {});
  BoardTack.associate = function (models) {
    BoardTack.hasOne(models.Tack, { foreignKey: 'tackId' });
    BoardTack.belongsTo(models.User, { foreignKey: 'userId' });

  };
  return BoardTack;
};
