const puppeteer = require('puppeteer');
const var_dump = require('var_dump');

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
(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.craigslist.org/about/sites', { 
		waitUntil: 'networkidle2',
		//waitForSelector: 'h4'
	});

	const cityLinks = await page.evaluate(() => {
		let container = [];

		let colmaskList = document.querySelectorAll(`div.colmask`);

		// colmaskList[0] = U.S. cities
		// Currently not necessary to loop over worldwide listings.
		// See the front CL page for each `div.colmask` if needed for other countries.
		// Maybe set up an external 'for' in the future.
		let elementList = colmaskList[0].querySelectorAll(`div.box_${1} *`);		

		for (let i = 0; i < elementList.length; i++) {

			if (elementList[i].localName === 'h4') {
				var territoryName = elementList[i].innerHTML;
			}

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
		
		return container;
	});

	for (const key in cityLinks) {
		console.log(cityLinks[key])
	}
	
	await browser.close();
})();

// console.log(filter);
// console.log(config.categories);
// console.log(config.keywords);


