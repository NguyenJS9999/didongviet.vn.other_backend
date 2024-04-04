'use strict';
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
		const products = [
			{
				name: `product name 0`,
				description: `description 0`,
				price: 10500,
				quantity: 2800,
				image_url: `https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/user/user.png`,
				category_id: 1,
				code: `product-code01`,
				slug: `/product-slug`,
				sort_type: `esc`,
			  createdAt: new Date(),
			  updatedAt: new Date(),
			  deletedAt: new Date(),
			},

		];

		let y = 1;
		for (let i = 0; i < 150; i++) {
			products.push({
				name: `products name ${y}`,
				description: `description ${y}`,
				price: (1000+y)*y,
				quantity: (y*2)+y,
				image_url: `https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/user/user.png`,
				category_id: y,
				code: `code ${y}${y}`,
				slug: `/product-slug`,
				sort_type: `asc`,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: new Date(),
			});
		  y ++

		}

		await queryInterface.bulkInsert('Products', products, {});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('Products', null, {});
	}
};
