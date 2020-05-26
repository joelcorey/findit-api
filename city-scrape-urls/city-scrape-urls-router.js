const express = require('express');
const vardump = require('var_dump');

const cityScrapeUrlsScraper = require('./city-scrape-urls-scraper');
const cityScrapeUrlsService = require('./city-scrape-urls-service');

const cityScrapeUrlsRouter = express.Router();

cityScrapeUrlsRouter
	// TODO: will scrape individual links only, instead of return large data sets
	.post(async (req, res, next) => {
		console.log('hi')
		var data = req.body;
		try {
			//const city = await cityScrapeUrlsService.getCitiesInState(data.state);
			// Specific city job data is to be fetched/called on a per job basis
			// new endpoint: "city"
			const jobData = await cityScrapeUrlsScraper(url);
			res.send(jobData)
		} catch (error) {
			return next(error);
		}
	}) 
	.route('/links')
	.post(async (req, res, next) => {
		var data = req.body;
		vardump(data)
		try {
			const cities = await cityScrapeUrlsService.getCitiesInState(data.state);
			res.send(cities);
		} catch (error) {
			return next(error);
		}
	}) 
	
	//});

module.exports = cityScrapeUrlsRouter;