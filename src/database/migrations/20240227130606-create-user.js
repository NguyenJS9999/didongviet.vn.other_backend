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
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true, //Not null
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true, // !
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false, //Not null
      },
      avata: {
        type: Sequelize.STRING(255),
        allowNull: true, //Not null
      },
      infors: {
        type: Sequelize.STRING(255),
        allowNull: true, //Not null
      },
      // Phân loại cách thức đăng nhập
      oauth_provider_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING(255),
        allowNull: true, //Not null
      },

      // Lưu trữ mã bí mật dùng cho xác minh OTP
      otp_secret: {
        type: Sequelize.STRING(255),
        allowNull: true, //Not null
      },
      // Thời gian hết hạn của OTP
      otp_expires_at: {
        type: Sequelize.DATE(),
        allowNull: true, //Not null
      },
      // Thời gian xác minh OTP thành công
      otp_verified_at: {
        type: Sequelize.DATE(),
        allowNull: true, //Not null
      },

      // Token được tạo trước khi tài khoản được kích hoạt sau đăng ký.
      active_token: {
        type: Sequelize.STRING(100),
        allowNull: true, //Not null
      },
      active_token_expires_at: {
        type: Sequelize.DATE(),
        allowNull: true, //Not null
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: true, //Not null
      },

      // Chức năng quên mk
      reset_token: {
        type: Sequelize.STRING(100),
        allowNull: true, //Not null
      },
      reset_token_expires_at: {
        type: Sequelize.DATE(),
        allowNull: true, //Not null
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE()
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};