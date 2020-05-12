# findit-api

## Why?
In development: Port old PHP Craigslist web scraper to Node/JavaScript using Puppeteer.

## Installation
Install dependencies:  
```npm i```  
  
Place a .env file in the root directory with the following information in it:  
```DB_USER='<username>'```  
```DB_PASSWORD='<password>'```  
```DB_NAME='<database name>'```  
```DB_HOST='<ip address here>'```  
```DB_PORT=54321```  
  
In order to start migrations we first have to install Sequelize:  
```npm install --save sequelize```  
Along with our database "driver" of choice (Postgres in this case):  
```npm install --save pg pg-hstore```  
Migrations are handled with the Sequelize CLI:  
https://sequelize.org/master/manual/migrations.html  
Run this for first time dev:  
```npx sequelize-cli init```  
Rename:  
```config/config.json```  
to:  
```config/config.js```  
And structure that file as the config.example.js.  
And run migrations:  
npx sequelize-cli db:migrate  
  
### Todo
* ~~get all cities dependant on territory (U.S. states only for now)~~
* ~~Use above to link build for each city in each state.~~
* scrape each city per job category
* break down each job category
* filter results through keywords
* pay attention to date of posting - select 1 day or several going back in to the past
* Implement Restful API for a frontend
* polite and async web scraping per state
* use proxy per state
* track proxy performance using rating system
* select best proxies for scraping with on as needed basis
* put filters in database from flat file
* add life cycle to filters so that older filters automatically die
* add right click contextual menu to remove search result and add to filters from front end, to include API endpoint
* add option for filter custom duration
* group exact match search result titles under first result to clean up results listing, handle on backend or frontend?
* abstract scraping instructions in to "recipe" like JSON files

### Useful links
https://stackoverflow.com/questions/45790759/sequalize-migration-with-dotenv
https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/

## Temp Links
https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/
https://stackabuse.com/deploying-a-node-js-app-to-heroku/