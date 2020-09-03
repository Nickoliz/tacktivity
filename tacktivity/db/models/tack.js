'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tack = sequelize.define('Tack', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Tack.associate = function(models) {
    Tack.belongsTo(models.User, { foreignKey: "userID"})
  };
  return Tack;
};
