const express = require('express');
const vardump = require('var_dump');

const cityScrapeUrlsScraper = require('./city-scrape-urls-scraper');
const cityScrapeUrlsService = require('./city-scrape-urls-service');

const cityScrapeUrlsRouter = express.Router();

cityScrapeUrlsRouter
	.route('/')
	.post(async (req, res, next) => {
		var data = req.body;
		vardump(data)
		try {
			const cities = await cityScrapeUrlsService.getCitiesInState(data.state);
			
			// This endpoint is returning a nested array, making data itteration difficult for frontend
			// Move just cities to a different endpoint?
			res.send(cities);

			// Specific city job data is to be fetched/called on a per job basis
			// new endpoint: "city"
			//const jobData = await cityScrapeUrlsScraper(cities);
			//res.send(jobData)
		} catch (error) {
			return next(error);
		}
	}) 
	
	//});

module.exports = cityScrapeUrlsRouter;