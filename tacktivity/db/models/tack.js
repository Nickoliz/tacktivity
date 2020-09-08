'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tack = sequelize.define('Tack', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING,
    tackImage: DataTypes.STRING,
    userId: DataTypes.INTEGER
  },
    {
      defaultScope: {
        attributes: {
          exlude: ["createdAt", "updatedAt"],
        },
      },
    });
  Tack.associate = function (models) {
    Tack.belongsTo(models.User, { foreignKey: "userId" })
    Tack.hasMany(models.BoardTack, { foreignKey: "tackId" })
  };

  Tack.createTack = async function ({ title, description, url, tackImage }) {
    const tack = await Tack.create({
      title,
      description,
      url,
      tackImage
    });
    return await Tack.scope('currentTack').findByPk(tack.id);
  };

  return Tack;
};
