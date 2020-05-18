const express = require('express');
const vardump = require('var_dump');

const cityBuildUrlsScraper = require('./city-build-urls-scraper');
const cityBuildUrlsService = require('./city-build-urls-service');

const cityCountsService = require('../city-counts/city-counts-service');

const cityBuildUrlsRouter = express.Router();

// Only one route used to build/scrape urls for later scraping
cityBuildUrlsRouter
	.route('/')
	.get(async (req, res, next) => {
		try {
			const links = await cityBuildUrlsScraper();
			await cityBuildUrlsService.deleteCityUrls();
			await cityBuildUrlsService.createCityUrls(links);
			
			const counts = await cityBuildUrlsService.getCityUrlsCounts();
			await cityCountsService.deleteCounts();
			// Because we used raw SQL to get this data, the returned data is a multi-element array
			// We have to specify the first index of this data array to avoid an error here:
			await cityCountsService.createCounts(counts[0]);

			res.sendStatus(200);
		} catch (error) {
			return next(error);
		}
	})

module.exports = cityBuildUrlsRouter;