'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attribute_value extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attribute_value.init({
    id: {
      type: DataTypes.INTEGER, //Kiểu dữ liệu
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: DataTypes.INTEGER,
    attribute_id: DataTypes.INTEGER,
    value: DataTypes.STRING(255),
  }, {
    sequelize,
    tableName: "Attribute_value", //Tên bảng trong Database
    modelName: 'Attribute_value',
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: "deletedAt"
  });
  return Attribute_value;
};