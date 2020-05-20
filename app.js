require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

//const getJwtMiddleware = require('./middleware/middleware-get-token');
//const checkJwtMiddleware = require('./middleware/middleware-check-jwt')

const buildLinksRouter = require('./city-build-urls/city-build-urls-router');
const getCountsRouter = require('./city-counts/city-counts-router');
const scrapeLinksRouter = require('./city-scrape-urls/city-scrape-urls-router');

app.use(helmet());
app.use(bodyParser.json());
//app.use(cors); // cors causing arror
app.use(morgan('combined'));

// pass along API version in headers verse in restful state
app.use((req, res, next) => {
	res.set({
		'API-Version': '1',
		// 'Access-Control-Allow-Origin': '*',
		// 'Access-Control-Allow-Methods': ['GET, POST, PUT, DELETE'],
		// 'Access-Control-Allow-Headers': 'Content-Type',
		// 'Access-Control-Allow-Credentials': true,
	});
	return next();
});

//app.use(checkJwtMiddleware);

app.use('/buildlinks', buildLinksRouter);
app.use('/counts', getCountsRouter);
app.use('/cities', scrapeLinksRouter);

app.listen(port, () => console.log(`server listening on port ${port}!`));

app.use(function errorHandler(error, req, res, next) {
	let response
	if (process.env.NODE_ENV === 'production') {
		response = { error: 'Server error' }
	} else {
		console.error(error)
		response = { error: error.message, object: error }
	}
	res.status(500).json(response);
});

// https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/