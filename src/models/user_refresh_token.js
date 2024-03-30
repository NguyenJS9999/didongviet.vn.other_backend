'use strict';

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_refresh_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_refresh_token.belongsToMany(models.Users, {
        foreignKey: "user_id",
        through: "id",
        // as: "users",
      });
    }
  }
  User_refresh_token.init({
    id: {
      type: DataTypes.INTEGER, //Kiểu dữ liệu
      primaryKey: true,
      autoIncrement: true,
    },
    // user_id: {
    //   type: DataTypes.INTEGER, //Kiểu dữ liệu
    // },
    user_id: DataTypes.INTEGER,
    refresh_token: DataTypes.STRING(255),

  }, {
    sequelize,
    modelName: 'User_refresh_token',
    tableName: "User_refresh_token", //Tên bảng trong Database
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
  return User_refresh_token;
};