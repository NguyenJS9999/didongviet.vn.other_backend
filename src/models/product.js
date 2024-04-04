'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    id: {
      type: DataTypes.INTEGER, //Kiểu dữ liệu
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(255),
    description: DataTypes.STRING(255),
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    image_url: DataTypes.STRING(255),
    category_id: DataTypes.INTEGER,
    code: DataTypes.STRING(255),
    slug: DataTypes.STRING(255),
    sort_type: DataTypes.STRING(255),
    deletedAt: DataTypes.STRING(255),
  }, {
    sequelize,
    modelName: 'Products',
    tableName: "Products",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  });
  return Products;
};