require('dotenv').config();

const Sequelize = require('sequelize');

const database = new Sequelize({
	host: process.env.MYSQL_HOST,
	database: process.env.MYSQL_DATABASE,
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	port: process.env.MYSQL_PORT,
	dialect: 'mysql',
	dialectModule: require('mysql2')
});

module.exports = { database };
