# findit-api
  
## Frontend
The frontend for this project can be found at:  
https://github.com/joelcorey/findit-api-frontend
  
## PostgreSQL setup help
This project assumes a PostgreSQL database is installed and configred.  
https://github.com/joelcorey/postgres-notes/blob/master/psql-ubuntu18.04-guide.MD
  
## Why?
In development: Port old PHP Craigslist web scraper to Node/JavaScript using Puppeteer.  
  
### Todo for both frontend and backend
https://trello.com/b/nYBzDmmj/findit-api  
  
## Installation
Install dependencies:  
```npm i```  
  
Rename .env.example to .env and replace relevant values in it.  
For further information on JWKS_URI, API_IDENTIFIER, AUTH_DOMAIN, ALGORITHMS see here:  
https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/  
To locate the CLIENT_ID and CLIENT_SECRET look under "Applications/Settings" in your Auth0 dashboard.  
   
Migrations are handled with the Sequelize CLI:  
https://sequelize.org/master/manual/migrations.html  
Run this for first time dev:  
```npx sequelize-cli db:migrate```  
Rename:  
```config/config.json```  
to:  
```config/config.js```  
Use config.example.js for reference.  
And run migrations:  
```npx sequelize-cli db:migrate```  
    
### Useful links
https://stackoverflow.com/questions/45790759/sequalize-migration-with-dotenv  
https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/  
https://stackabuse.com/deploying-a-node-js-app-to-heroku/  
https://www.w3schools.com/xml/xpath_syntax.asp  
https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate  
https://blog.bitsrc.io/web-scraping-with-puppeteer-e73e5fee7474  