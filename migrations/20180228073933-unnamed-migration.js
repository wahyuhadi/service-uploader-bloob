"use strict";

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable("images", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			uniqueId : {
				type: Sequelize.STRING(255)
			},
			jsonData: {
				type: Sequelize.STRING(500)
			},
			images : {
				type: Sequelize.BLOB
			},
			mime : {
				type : Sequelize.STRING(30)
			},
			size : {
				type : Sequelize.STRING(50)
			},
			profile_file : {
				type : Sequelize.STRING(500)
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				type: Sequelize.DATE
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable("images");
	}
};
