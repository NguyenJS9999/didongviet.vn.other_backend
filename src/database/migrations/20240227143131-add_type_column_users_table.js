"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn("Users", "type_account", {
    //   type: Sequelize.STRING(255),
    // });
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.removeColumn("Users", "type_account");
  },
};
