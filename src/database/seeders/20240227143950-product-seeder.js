'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		const product = [
			{
				name: `product name 01`,
				description: `description 01`,
				price: `price`,
				quantity: `quantity`,
				image: `image`,
				category_id: `category_id`,
				code: `product-code01`,
				slug: `/product-slug`,
				sort_type: `asc`,
			  createdAt: new Date(),
			  updatedAt: new Date(),
			  deletedAt: new Date(),
			},

		];

		let y = 1;
		for (let i = 0; i < 150; i++) {
			users.push({
				name: `product name  ${y}`,
				description: `description  ${y}`,
				price: (1000+y)*y,
				quantity: (y*2)+y,
				image: `https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/user/user.png`,
				category_id: y,
				code: `code ${y}${y}`,
				slug: `/product-slug`,
				sort_type: `asc`,
				createdAt: new Date(),
				updatedAt: new Date()
			});
		  y ++

		}

		await queryInterface.bulkInsert('Product', product, {});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('Product', null, {});
	}
};
