'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product_category.init({
    id: {
      type: DataTypes.INTEGER, //Kiểu dữ liệu
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(255),
    parent_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product_category',
    tableName: "Product_category",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: "deletedAt"
  });
  return Product_category;
};