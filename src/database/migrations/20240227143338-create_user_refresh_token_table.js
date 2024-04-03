'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('User_refresh_token', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      refresh_token: {
        type: Sequelize.STRING(255),
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
	      type: Sequelize.DATE
	    }

    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("User_refresh_token");

  }
};
