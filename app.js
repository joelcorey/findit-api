require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const buildLinksRouter = require('./city-build-urls/city-build-urls-router');
const scrapeLinksRouter = require('./city-scrape-urls/city-scrape-urls-router');

app.use('/buildlinks', buildLinksRouter);
app.use('/cities', scrapeLinksRouter);

app.listen(port, () => console.log(`server listening on port ${port}!`));

app.use(function errorHandler(error, req, res, next) {
	let response
	if (process.env.NODE_ENV === 'production') {
	  response = { error: 'Server error' }
	} else {
	  console.error(error)
	  response = { error: error.message, object: error }
	}
	res.status(500).json(response);
  });

// Temp useful links copy pasta here:
//https://www.w3schools.com/xml/xpath_syntax.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate
//https://blog.bitsrc.io/web-scraping-with-puppeteer-e73e5fee7474