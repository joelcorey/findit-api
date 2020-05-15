const puppeteer = require('puppeteer');
const var_dump = require('var_dump');

const configCommon = require('../util/config-common.js');
const filter = require('../util/filter.js');
const useragent = require('../util/useragent.js');

const getData = async (cities) => {
	
	for (let i = 0; i < cities.length; i++) {

		for (let q = 0; q < configCommon.categories.length; q++) {
		
			let url = cities[i].city_url + configCommon.categories[q];
			console.log(url);	
		}
		
	}


	// const browser = await puppeteer.launch();
	// const page = await browser.newPage();
	// await page.goto('https://www.craigslist.org/about/sites', { 
	// 	waitUntil: 'networkidle2',
	// 	//waitForSelector: 'h4'
	// });

	// const cityLinks = await page.evaluate(() => {

	// 	let container = [];
	// 	let colmaskList = document.querySelectorAll(`div.colmask`);

	// 	// There are four columns defined by CSS classes, itterate over them
	// 	for (let i = 1; i <= 4; i++) {

	// 		// colmaskList[0] = U.S., colmaskList[0] = Canada, etc
	// 		// Currently not necessary to loop over worldwide listings.
	// 		// See the front CL page for each `div.colmask` if needed for other countries.
	// 		// Maybe set up an external 'for' in the future.
	// 		var elementList = colmaskList[0].querySelectorAll(`div.box_${i} *`);		

	// 		// Itterate over all elements and grab only the information we want.
	// 		for (let i = 0; i < elementList.length; i++) {

	// 			// The 'h4' elements are the territory names.
	// 			if (elementList[i].localName === 'h4') {
	// 				var territoryName = elementList[i].innerHTML;
	// 			}
	// 			// The 'li' elements are both city name and URL.
	// 			if (elementList[i].localName === 'li') {
    //                 var cityName = elementList[i].innerText;
    //                 var cityUrl = elementList[i].innerHTML;
    //                 var countryName = 'United States'; // temp hard coded

	// 				container.push(
	// 					{
    //                         territory_name: territoryName,
    //                         city_name: cityName, 
    //                         city_url: cityUrl,
    //                         country_name: countryName
	// 					}
	// 				);
	// 			}
	// 		}	
	// 	}
		
	// 	return container;
	// });

	// await browser.close();
	// return cityLinks;
};

module.exports = getData;