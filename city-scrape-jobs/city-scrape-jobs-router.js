const express = require('express');
const vardump = require('var_dump');

const cityScrapeJobsScraper = require('./city-scrape-jobs-scraper');

const cityScrapeJobsRouter = express.Router();

cityScrapeJobsRouter
	.route('/')
	.post(async (req, res, next) => {
		var data = req.body;
		try {
			//const city = await cityScrapeUrlsService.getCitiesInState(data.state);
			// Specific city job data is to be fetched/called on a per job basis
			// new endpoint: "city"
			const jobData = await cityScrapeJobsScraper(data.url);
			res.send(jobData)
		} catch (error) {
			return next(error);
		}
	}) 
	
module.exports = cityScrapeJobsRouter;