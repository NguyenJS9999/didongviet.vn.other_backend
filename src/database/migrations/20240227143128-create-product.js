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
				type: Sequelize.STRING(255),
        allowNull: false, //Not null
	    },
			description: {
				type: Sequelize.STRING(255),
        allowNull: true,
	    },
			price: {
				type: Sequelize.STRING(255),
        allowNull: false, //Not null
	    },
			quantity: {
				type: Sequelize.STRING(255),
        allowNull: false, //Not null
	    },
			image_url: {
				type: Sequelize.STRING(255),
        allowNull: true, //Not null
	    },
			category_id: {
				type: Sequelize.INTEGER,
        allowNull: true,
	    },
			code: {
				type: Sequelize.STRING(255),
        allowNull: true,
	    },
			slug: {
				type: Sequelize.STRING(255),
        allowNull: true,
	    },
			sort_type: {
				type: Sequelize.STRING(255),
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
	  await queryInterface.dropTable('Products');
	}
};
