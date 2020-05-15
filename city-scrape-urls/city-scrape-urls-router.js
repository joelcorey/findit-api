const express = require('express');

const cityScrapeUrlsScraper = require('./city-scrape-urls-scraper');
const cityScrapeUrlsService = require('./city-scrape-urls-service');

const cityScrapeUrlsRouter = express.Router();

// Only one route used to build/scrape urls for later scraping
cityScrapeUrlsRouter
	.route('/')
	.get(async (req, res, next) => {
	
		try {
            const links = await cityScrapeUrlsService.getAllCities();
            const data = await cityScrapeUrlsScraper(links)
			res.send(data);

		} catch (error) {
			return next(error);
		}
	
	})

module.exports = cityScrapeUrlsRouter;