const puppeteer = require('puppeteer');
const useragent = require('./util/useragent.js');
const var_dump = require('var_dump');

// get all cities dependant on state - for U.S., territories for CA, etc
// break down each job category
// scrape each city per job category
// filter results through keywords
// pay attention to date of posting - select 1 day or several going back in to the past

function getUserAgent() {
	return useragent[Math.floor(Math.random() * useragent.length)]
}

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

		let newEntry = true;

		let templateObject = {};
		let cityCount = 0;

		for (let i = 0; i < elementList.length; i++) {

			if (elementList[i].localName === 'h4') {
				newEntry = true;
				templateObject.territoryName = elementList[i].innerHTML;
				//templateObject.cityList = [];
			}
			
			if (elementList[i].localName === 'li') {
			 	cityCount++;
			}
			
			// if (elementList[i].localName === 'li') {
			// 	// let cityName = elementList[i].innerText;
			// 	// let cityUrl = elementList[i].innerHTML;
			// 	cityList.push( elementList[i].innerHTML );
			// }

			if (newEntry) {
				templateObject.cityCount = cityCount;
				container.push(templateObject);
				// container.push(cityUrl)
				newEntry = false;
				templateObject = {};
				cityCount = 0;
			}

			//container.push(tempObject)
		}
		
		return container;
	});


	var_dump(pages);

	//console.log(pages)
	// for (const page in pages[10]) {
	// 	// for (const key in page) {
	// 	// 	console.log(key)
	// 	// }
	// 	console.log(page)
	// }
	//console.log(pages[0]['territoryName'] + ' ' + pages[0]['cityList'][1]['cityName'] + ' ' + pages[0]['cityList'][1]['cityUrl'])

	await browser.close();
})();





