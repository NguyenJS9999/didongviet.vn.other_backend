"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Provider.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "Provider",
      tableName: "Providers",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt"
    },
  );
  return Provider;
};
