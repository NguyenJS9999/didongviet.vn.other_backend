'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Attribute_values', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true, // ! Duy nhất
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      attribute_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING(255),
        defaultValue: 'Name',
        allowNull: true,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE(),
        allowNull: true
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Attribute_values');
  }
};