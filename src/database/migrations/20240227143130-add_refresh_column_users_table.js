"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn("Users", "refresh_token", {
    //   type: Sequelize.STRING,
    // });
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.removeColumn("Users", "refresh_token");
  },
};
