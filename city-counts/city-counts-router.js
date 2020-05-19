const express = require('express');

const cityCountsService = require('./city-counts-service');

const cityCountsRouter = express.Router();

cityCountsRouter
	// deprecated first version
	.route('/')
	.get(async (req, res, next) => {
	
		try {
            const counts = await cityCountsService.getCounts();       
			res.send(counts);

		} catch (error) {
			return next(error);
		}
	
	})

module.exports = cityCountsRouter;