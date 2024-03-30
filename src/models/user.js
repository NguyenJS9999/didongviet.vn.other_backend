'use strict';
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER, //Kiểu dữ liệu
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(255),
    address: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    avata: DataTypes.STRING(255),
    infors: DataTypes.STRING(100),
    // Phân loại cách thức đăng nhập
    oauth_provider_id: DataTypes.INTEGER,
    role: DataTypes.STRING(50),
    // OTP - xác minh đăng ký tài khoản
    otp_secret: DataTypes.STRING(100),
    otp_expires_at: DataTypes.DATE,
    otp_verified_at: DataTypes.DATE,
    // Token được tạo trước khi tài khoản được kích hoạt sau đăng ký.
    active_token: DataTypes.STRING(100),
    active_token_expires_at: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN,
    // Chức năng quên mk
    reset_token: DataTypes. STRING(100),
    reset_token_expires_at: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'Users',
    tableName: "Users", //Tên bảng trong Database
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
  return Users;
};