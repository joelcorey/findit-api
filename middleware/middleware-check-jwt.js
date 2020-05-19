const jwt =  require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: process.env.JWKS_URI
	}),
	audience: process.env.API_IDENTIFIER,
	issuer: process.env.AUTH_DOMAIN,
	alogorithms: process.env.ALGORITHMS
});

module.exports = checkJwt;