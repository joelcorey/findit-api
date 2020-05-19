require('dotenv').config();

const authTokensService = require('../auth-tokens/auth-tokens-service');

var request = require("request");

var request = require("request");

var options = {
  	method: 'POST',
	url: `${process.env.AUTH_URL}`,
	headers: {'content-type': 'application/x-www-form-urlencoded'},
	form: {
		grant_type: 'client_credentials',
		client_id: `${process.env.CLIENT_ID}`,
		client_secret: `${process.env.CLIENT_SECRET}`,
		audience: `${process.env.AUTH_DOMAIN}`
	}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	authTokensService.createAuth(body.access_token)
	console.log(body);
});
