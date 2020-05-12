const express = require('express');

const cityBuildUrlsScraper = require('./city-build-urls-scraper');
const cityBuildUrlsService = require('./city-build-urls-service');

const cityBuildUrlsRouter = express.Router();

// Only one route used to build/scrape urls for later scraping
cityBuildUrlsRouter
	.route('/')
	.get((req, res, next) => {
		const links = cityBuildUrlsScraper.buildLinks(); 		
	})
	.then((links) => {
		cityBuildUrlsService.createCityUrls(links);
	}) 

	

