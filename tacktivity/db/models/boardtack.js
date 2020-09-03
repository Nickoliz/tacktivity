'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardTack = sequelize.define('BoardTack', {
    boardName: DataTypes.STRING,
    tackId: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    user: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {});
  BoardTack.associate = function(models) {
    // associations can be defined here
  };
  return BoardTack;
};