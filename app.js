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
		
		let elementList = colmaskList[0].querySelectorAll(`div.box_${1} *`);		

		for (let i = 0; i < elementList.length; i++) {
			let tempObject = {};
			if(elementList[i].localName === 'h4') {
				newEntry = true;
				territoryName = elementList[i].innerHTML;
				//container.push(elementList[i].innerHTML)
			}
			
			if (newEntry) {
				tempObject['territoryName'] = territoryName
				container.push(tempObject);
				newEntry = false;
			}
			//container.push(tempObject)
		}
		
		return container;
	});


	//var_dump(pages);

	console.log(pages)
	// for (const page in pages[10]) {
	// 	// for (const key in page) {
	// 	// 	console.log(key)
	// 	// }
	// 	console.log(page)
	// }

	await browser.close();
})();

//getUserAgent = useragent.list();
// console.log(getUserAgent);



