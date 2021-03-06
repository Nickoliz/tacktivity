'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tack = sequelize.define('Tack', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,

    },
    url: {
      type: DataTypes.STRING,
    },
    tackImage: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
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

  Tack.createTack = async function ({ title, description, url, userId }) {
    const tack = await Tack.create({
      title,
      description,
      url,
      userId
    });
    return await Tack.scope('currentTack').findByPk(tack.id);
  };

  return Tack;
};
