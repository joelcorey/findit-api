const express = require('express');
const vardump = require('var_dump');

const cityScrapeUrlsScraper = require('./city-scrape-urls-scraper');
const cityScrapeUrlsService = require('./city-scrape-urls-service');

const cityScrapeUrlsRouter = express.Router();

cityScrapeUrlsRouter
	// deprecated first version
	// .route('/')
	// .get(async (req, res, next) => {
	
	// 	try {
    //         const cities = await cityScrapeUrlsService.getAllCities();
    //         const data = await cityScrapeUrlsScraper(cities);
	// 		res.send(data);

	// 	} catch (error) {
	// 		return next(error);
	// 	}

	.route('/')
	.post(async (req, res, next) => {
		var data = req.body;
		vardump(data)
		try {
			const cities = await cityScrapeUrlsService.getCitiesInState(data.state);
			const jobData = await cityScrapeUrlsScraper(cities);

			// Move just cities to a different endpoint?
			//res.send(cities);
			
			res.send(jobData)
		} catch (error) {
			return next(error);
		}
	}) 
	
	//});

module.exports = cityScrapeUrlsRouter;