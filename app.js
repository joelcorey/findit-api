const puppeteer = require('puppeteer');
const useragent = require('./util/useragent.js');
const var_dump = require('var_dump');

// get all cities dependant on state - for U.S., territories for CA, etc
// break down each job category
// scrape each city per job category
// filter results through keywords
// pay attention to date of posting - select 1 day or several going back in to the past

//https://www.w3schools.com/xml/xpath_syntax.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate
//https://blog.bitsrc.io/web-scraping-with-puppeteer-e73e5fee7474
(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.craigslist.org/about/sites', { 
		waitUntil: 'networkidle2',
		//waitForSelector: 'h4'
	});

	const pages = await page.evaluate(() => {
		let container = [];

		let colmaskList = document.querySelectorAll(`div.colmask`);

		// Currently not necessary to loop over the worldwide listings.
		// We only need the first box for U.S. listings. 
		// See the front CL page for each `div.colmask` if needed for other countries.
		// Maybe set up an external 'for in loop' in the future here.
		let boxList = colmaskList[0].querySelectorAll(`div.box`);

		// There are four columns of cities on the page, return that count for informative reasons.
		container.push( { 'boxListCount': boxList.length } );

		for (let i = 0; i < boxList.length; i++) {
			
			let territoryNameList = boxList[i].querySelectorAll(`h4`);
			let territoryCityList = boxList[i].querySelectorAll(`ul`)

			// gets the per column territory list
			container.push( { 'territoryNameListCount': territoryNameList.length } )

			for (let q = 0; q < territoryNameList.length; q++) {
				let tempContainer = {}

				
				
				// construct some of our template object
				tempContainer['territoryName'] = territoryNameList[q].innerText;
				tempContainer['territoryCityListCount'] = territoryCityList.length;
				tempContainer['cities'] = [];

				for (let r = 0; r < territoryCityList.length; r++) {
				//for (let r = 0; r < 5; r++) {

					tempCityContainer = {}
					
					tempCityContainer[name] = territoryCityList[r].innerText;

					tempContainer['cities'].push(tempCityContainer)
				}
				container.push(tempContainer);
			}

		}
		
		//return boxList;
		//return territoryCityList
		return container;
	});


	console.log(pages);
	await browser.close();
})();

//getUserAgent = useragent.list();
// console.log(getUserAgent);



