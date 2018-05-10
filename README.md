# Sevice Uplouder Image Blob

##Install Packages

	$ npm install

## Config Database 

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
	
## Migrate DB 

to create table run sequelize db:migrate in your project , to edit table you can see in folder migrations

		$ sequelize db:migrate
		

## Upload Image

endpoint localhost:8080/images

![](https://raw.githubusercontent.com/wahyuhadi/service-uploader-bloob/master/image/Screenshot%20at%202018-05-10%2017-06-30.png) 

you can get response

		{
		    "id": 2,
		    "uniqueId": "af58c6a0-5439-11e8-9242-c57fc25ab8c8", // get with uniqueId
		    "jsonData": "",
		    "mime": "image/jpeg",
		    "size": 64281,
		    "profile_file": "",
		    "images": {
			"type": "Buffer",
			"data": [
			    255,
			    216,
			    255,
			    224,
			    ...
			    ..
			   ]
			}
		}


## Get Image

end point localhost:8080/images/af58c6a0-5439-11e8-9242-c57fc25ab8c8


![](https://github.com/wahyuhadi/service-uploader-bloob/blob/master/image/Screenshot%20at%202018-05-10%2017-07-10.png) 




		

