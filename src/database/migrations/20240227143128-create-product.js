'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
	  await queryInterface.createTable('Products', {
	    id: {
	      allowNull: false,
	      autoIncrement: true,
	      primaryKey: true,
	      type: Sequelize.INTEGER
	    },
	    name: {
				type: Sequelize.STRING(100),
        allowNull: false, //Not null
	    },
			description: {
				type: Sequelize.STRING(100),
        allowNull: false, //Not null
	    },
			price: {
				type: Sequelize.STRING(100),
        allowNull: false, //Not null
	    },
			quantity: {
				type: Sequelize.STRING(100),
        allowNull: false, //Not null
	    },
			category_id: {
				type: Sequelize.STRING(100),
        allowNull: false, //Not null
	    },
			image_url: {
				type: Sequelize.STRING(100),
        allowNull: false, //Not null
	    },
			color: {
				type: Sequelize.STRING(100),
        allowNull: false, //Not null
	    },
	    createdAt: {
	      allowNull: false,
	      type: Sequelize.DATE
	    },
	    updatedAt: {
	      allowNull: false,
	      type: Sequelize.DATE
	    }
	  });
	},
	async down(queryInterface, Sequelize) {
	  await queryInterface.dropTable('Products');
	}
};
