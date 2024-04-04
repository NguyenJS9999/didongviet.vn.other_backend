'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attributes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attributes.init({
    id: {
      type: DataTypes.INTEGER, //Kiểu dữ liệu
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(255),
  }, {
    sequelize,
    modelName: 'Attributes',
    tableName: "Attributes", //Tên bảng trong Database
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: "deletedAt"
  });
  return Attributes;
};