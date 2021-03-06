const puppeteer = require('puppeteer');
const var_dump = require('var_dump');

const configCommon = require('../util/config-common.js');
const filter = require('../util/filter.js');
const useragent = require('../util/useragent.js');

// const urlHelper = (url) => {
// 	return url.slice(0, url.indexOf(">"));
// }

const buildLinks = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.craigslist.org/about/sites', { 
		waitUntil: 'networkidle2',
	});

	const cityLinks = await page.evaluate(() => {

		let container = [];
		let colmaskList = document.querySelectorAll(`div.colmask`);

		// There are four columns defined by CSS classes, itterate over them
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
                    var cityName = elementList[i].innerText;
					// Original:
                    //var cityUrl = elementList[i].innerHTML;
					// Fixed:
					// Some CL cities are prefixed with only 'http', most are 'https'. Handle that problem here.
					var cityUrl = 'https://' + elementList[i].innerHTML.slice(elementList[i].innerHTML.indexOf("/") + 2, elementList[i].innerHTML.indexOf(".org/")) + '.org';
                    var countryName = 'United States'; // temp hard coded

					container.push(
						{
							// object key names in SQL naming conventions for convenience
                            territory_name: territoryName,
                            city_name: cityName, 
                            city_url: cityUrl,
                            city_country: countryName
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

module.exports = buildLinks;