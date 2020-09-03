'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    key: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    Image.hasOne(models.Tack, {foreignKey: 'key'})
  };
  return Image;
};
