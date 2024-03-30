'use strict';
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = [
      {
        name: "Admin init",
        email: "Admin@gmail.com",
        address: "Hà Nội",
        password: bcrypt.hashSync("123456", bcrypt.genSaltSync(10)),
        avata: "Avata",
        infors: "Admin infors",
        oauth_provider_id: 1,
        role: "admin",
        otp_secret: "6868",
        otp_expires_at: "2025/03/26",
        otp_verified_at: "2025/03/26",
        active_token: "abcd",
        // active_token_expires_at: "2025/03/26",
        is_active: true,
        reset_token: "abcd",
        // reset_token_expires_at: "2025/03/26",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Client init",
        email: "Client@gmail.com",
        address: "Hà Nội",
        password: bcrypt.hashSync("123456", bcrypt.genSaltSync(10)),
        avata: "Avata",
        infors: "Client infors",
        oauth_provider_id: 1,
        role: "client",
        otp_secret: "6868",
        otp_expires_at: "2025/03/26",
        otp_verified_at: "2025/03/26",
        active_token: "abcd",
        // active_token_expires_at: "2025/03/26",
        is_active: true,
        reset_token: "abcd",
        // reset_token_expires_at: "2025/03/26",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  }
};
