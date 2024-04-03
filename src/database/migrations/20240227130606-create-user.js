'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true, // ! Duy nhất
      },
      name: {
        type: Sequelize.STRING(255),
        defaultValue: 'Name',
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING(255),
        defaultValue: 'Address',
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(255),
        defaultValue: 'email@gmail.com',
        allowNull: false,
        unique: true, // ! Duy nhất
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false, // Not null -> Login thường
      },
      avata: {
        type: Sequelize.STRING(255),
        defaultValue: 'Avata',
        allowNull: true,
      },
      infors: {
        type: Sequelize.STRING(255),
        defaultValue: 'infors',
        allowNull: true,
      },
      total_buy: {
        type: Sequelize.INTEGER,
        defaultValue: 100000,
        allowNull: true,
      },
      join_on: {
        type: Sequelize.DATE(),
        allowNull: true,
      },
      // Phân loại cách thức đăng nhập
      oauth_provider_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING(255),
        defaultValue: 'admin',
        allowNull: true,
      },

      // Lưu trữ mã bí mật dùng cho xác minh OTP
      otp_secret: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      // Thời gian hết hạn của OTP
      otp_expires_at: {
        type: Sequelize.DATE(),
        allowNull: true,
      },
      // Thời gian xác minh OTP thành công
      otp_verified_at: {
        type: Sequelize.DATE(),
        allowNull: true,
      },

      // Token được tạo trước khi tài khoản được kích hoạt sau đăng ký.
      active_token: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      active_token_expires_at: {
        type: Sequelize.DATE(),
        allowNull: true,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false, //Not null
      },

      // Chức năng quên mk
      reset_token: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      reset_token_expires_at: {
        type: Sequelize.DATE(),
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE()
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE()
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};