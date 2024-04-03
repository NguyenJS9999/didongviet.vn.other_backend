'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id: {
      type: DataTypes.INTEGER, //Kiểu dữ liệu
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: DataTypes.STRING(100),
    description: DataTypes.STRING(100),
    price: DataTypes.STRING(100),
    quantity: DataTypes.STRING(100),
    category_id: DataTypes.STRING(100),
    image_url: DataTypes.STRING(100),
    color: DataTypes.STRING(100),
  }, {
    sequelize,
    modelName: 'Product',
    tableName: "Product",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  });
  return Product;
};