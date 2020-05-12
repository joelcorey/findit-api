const express = require('express');

const cityBuildUrlsScraper = require('./city-build-urls-scraper');
const cityBuildUrlsService = require('./city-build-urls-service');

const cityBuildUrlsRouter = express.Router();

// Only one route used to build/scrape urls for later scraping
cityBuildUrlsRouter
	.route('/')
	.get(async (req, res, next) => {
		console.log('building links')

		try {

			const links = await cityBuildUrlsScraper();
			//cityBuildUrlsService(links);
			res.send(links);

		} catch (error) {
			return next(error);
		}
	
	})

// const asyncRoute = route => (req, res, next = console.error) =>
// 	Promise.resolve(route(req, res)).catch(next)

// async function getLinks() {
// 	const links = await cityBuildUrlsScraper.buildLinks;
// 	return links;
// } 

module.exports = cityBuildUrlsRouter;