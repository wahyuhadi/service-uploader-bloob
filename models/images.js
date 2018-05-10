"use strict";
module.exports = function (sequelize, DataTypes) {
	var PwcFileUpload = sequelize.define("images", {
		uniqueId : DataTypes.STRING,
		images: DataTypes.BLOB,
		jsonData: DataTypes.STRING,
		mime : DataTypes.STRING,
		size : DataTypes.STRING,
		profile_file : DataTypes.STRING
	}, {
		paranoid: true,
		classMethods: {
			associate: function (models) {
			}
		}
	});
	return PwcFileUpload;
};
