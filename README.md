# findit-api

## Why?
In development: Port old PHP Craigslist web scraper to Node/JavaScript using Puppeteer.

## Installation
Install dependencies:  
```npm i```  
  
Place a .env file in the root directory with the following information in it:  
```NODE_ENV=development```  
```PORT=8000```  
```API_TOKEN=`<not yet used>```  
```DB_USER='<username>'```  
```DB_PASSWORD='<password>'```  
```DB_NAME='<database name>'```  
```DB_HOST='<ip address here>'```  
```DB_PORT=5432```  
  
Migrations are handled with the Sequelize CLI:  
https://sequelize.org/master/manual/migrations.html  
Run this for first time dev:  
```npx sequelize-cli init```  
Rename:  
```config/config.json```  
to:  
```config/config.js```  
Use config.example.js for reference.  
And run migrations:  
```npx sequelize-cli db:migrate```  
  
### Todo
https://trello.com/b/nYBzDmmj/findit-api

### Useful links
https://stackoverflow.com/questions/45790759/sequalize-migration-with-dotenv
https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/

## Temp Links
https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/
https://stackabuse.com/deploying-a-node-js-app-to-heroku/