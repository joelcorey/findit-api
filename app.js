const buildLinksRouter = require('./city-build-urls/city-build-urls-router');

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/buildlinks', buildLinksRouter)

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));


// Temp useful links copy pasta here:
//https://www.w3schools.com/xml/xpath_syntax.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate
//https://blog.bitsrc.io/web-scraping-with-puppeteer-e73e5fee7474