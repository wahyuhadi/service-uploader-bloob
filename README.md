# Sevice Uplouder Image Blob

##Install Packages

	$ npm install

##Config Database 

you can edit config file in  file : config/config.json

		{
		    "development": {
			    "username": "username ",
			    "password": "password",
			    "database": "images", //default in file migrations
			    "host": "127.0.0.1",
			    "dialect": "mysql"
		  	},
		  	"test": {
			    "username": "root",
			    "password": null,
			    "database": "database_test",
			    "host": "127.0.0.1",
			    "dialect": "mysql"
		  	},
		  	"production": {
			    "username": "root",
			    "password": null,
			    "database": "database_test",
			    "host": "127.0.0.1",
			    "dialect": "mysql"
		  	}
	}
	
##Migrate DB 

to create table run sequelize db:migrate in your project , to edit table you can see in folder migrations

		$ sequelize db:migrate
		

