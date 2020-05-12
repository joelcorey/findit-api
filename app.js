const puppeteer = require('puppeteer');
const var_dump = require('var_dump');
// const db = require('./models/index.js');

// const express = require('express');
// const app = express();
// const path = require('path');
// const port = 3000;

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));

const config = require('./util/config-common.js');
const filter = require('./util/filter.js');
const useragent = require('./util/useragent.js');

// Temp useful links copy pasta here:
//https://www.w3schools.com/xml/xpath_syntax.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate
//https://blog.bitsrc.io/web-scraping-with-puppeteer-e73e5fee7474

function getUserAgent() {
	return useragent[Math.floor(Math.random() * useragent.length)]
}

// Primary scraping function
async function buildLinks() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.craigslist.org/about/sites', { 
		waitUntil: 'networkidle2',
		//waitForSelector: 'h4'
	});

	const cityLinks = await page.evaluate(() => {

		let container = [];
		let colmaskList = document.querySelectorAll(`div.colmask`);

		// There are four columns defined by CSS class, itterate over them
		for (let i = 1; i <= 4; i++) {

			// colmaskList[0] = U.S., colmaskList[0] = Canada, etc
			// Currently not necessary to loop over worldwide listings.
			// See the front CL page for each `div.colmask` if needed for other countries.
			// Maybe set up an external 'for' in the future.
			var elementList = colmaskList[0].querySelectorAll(`div.box_${i} *`);		

			// Itterate over all elements and grab only the information we want.
			for (let i = 0; i < elementList.length; i++) {

				// The 'h4' elements are the territory names.
				if (elementList[i].localName === 'h4') {
					var territoryName = elementList[i].innerHTML;
				}
				// The 'li' elements are both city name and URL.
				if (elementList[i].localName === 'li') {
					container.push(
						{
						territoryName,
						cityName: elementList[i].innerText, 
						cityUrl: elementList[i].innerHTML
						}
					);
				}
			}	
		}
		
		return container;
	});

	await browser.close();
	return cityLinks;
};

(async () => {
	const links = await buildLinks() 

	for (const el in links) {
		console.log(links[el]);
	}
})();

// console.log(filter);
// console.log(config.categories);
// console.log(config.keywords);


