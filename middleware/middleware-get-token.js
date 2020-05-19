require('dotenv').config();

var request = require("request");

var options = { method: 'POST',
    url: 'https://findit.auth0.com/oauth/token',
	headers: { 'content-type': 'application/json' },
	body: `{"client_id":"${process.env.CLIENT_ID}","client_secret":${process.env.CLIENT_SECRET}","audience":"${process.env.AUTH_DOMAIN}","grant_type":"client_credentials"}` };
    //body: '{"client_id":"c62GS992hFnyA6ow7d2pWSbnD8nlidCM","client_secret":"mG57Iat74a7J1GRxGiUfRCcvHB07x25mnJLQ485B1EFs63pGvAFsN_iQHDCDNobO","audience":"https://findit.auth0.com/api/v2/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
    if (error) throw new Error(error);

	// send to database instead of console.log:
    console.log(body);
});