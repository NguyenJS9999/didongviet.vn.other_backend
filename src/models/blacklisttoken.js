"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blacklist_tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blacklist_tokens.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      token: {
        type: DataTypes.STRING,
      },
      expired: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Blacklist_tokens",
      tableName: "Blacklist_tokens",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt"
    },
  );
  return Blacklist_tokens;
};
