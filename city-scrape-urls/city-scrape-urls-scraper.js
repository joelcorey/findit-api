const puppeteer = require('puppeteer');
const var_dump = require('var_dump');

const configCommon = require('../util/config-common.js');
const filter = require('../util/filter.js');
const useragent = require('../util/useragent.js');

const buildData = async (url) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url, { 
		waitUntil: 'networkidle2',
		//waitForSelector: 'time'
	});
	console.log(`Awaiting ${url}`);
	const result = await page.evaluate(() => {
		
		let container = [];
		let resultInfo = document.querySelectorAll(`p.result-info`);

		for (let i = 0; i < resultInfo.length; i++) {

			let timeInfo = resultInfo[i].querySelector(`time.result-date`);
			let dateTime = timeInfo.dateTime;
			let dateTitle = timeInfo.innerHTML;

			let resultTitle = resultInfo[i].querySelector(`a.result-title`);
			let resultTitleText = resultTitle.innerText;
			let resultTitleHref = resultTitle.href;

			container.push(
				{
					resultTitleText,
					resultTitleHref,
					dateTitle,
					dateTime,
				}
			);
		}
		
		
		return container;

	});

	await browser.close();
	// var_dump(result)
	return result;
};

const getData = async (cities) => {
	for (let i = 0; i < 10; i++) {
	//for (let i = 0; i < cities.length; i++) {
		for (let q = 0; q < configCommon.categories.length; q++) {
			let url = cities[i].city_url + configCommon.categories[q];
			// console.log(url);
			let data = await buildData(url)
			return data;
		}
	}
}

module.exports = getData;