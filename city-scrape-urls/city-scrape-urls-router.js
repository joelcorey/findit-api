const express = require('express');

const cityScrapeUrlsScraper = require('./city-scrape-urls-scraper');
const cityScrapeUrlsService = require('./city-scrape-urls-service');

const cityScrapeUrlsRouter = express.Router();

cityScrapeUrlsRouter
	.route('/')
	.get(async (req, res, next) => {
	
		try {
            const cities = await cityScrapeUrlsService.getAllCities();
            const data = await cityScrapeUrlsScraper(cities);
			res.send(data);

		} catch (error) {
			return next(error);
		}

	// Find all cities in a state

    // Find all cities in a region (Pacific Northwest, West Coast, Midwest, etc)

    // Find specific city, might return multiple if same name of city across multiple states

    // Find specific city in specific state

	
	})

module.exports = cityScrapeUrlsRouter;