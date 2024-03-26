require('dotenv').config();
const pg = require('pg');

module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT || 'postgres',
		port: process.env.DB_PORT || 5432
		// dialectModule: pg,
	},
	// development: {
	// 	username: 'postgres',
	// 	password: '12345678',
	// 	database: 'ProjectLast',
	// 	host: 'localhost',
	// 	dialect: 'postgres',
	// 	port: 5432
	// },
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT || 'postgres',
		port: process.env.DB_PORT || 5432,
		dialectModule: pg
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT || 'postgres',
		port: process.env.DB_PORT || 5432,
		dialectModule: pg
	}
};
