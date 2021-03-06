const puppeteer = require('puppeteer');
const var_dump = require('var_dump');

const configCommon = require('../util/config-common.js');
const filter = require('../util/filter.js');
const useragent = require('../util/useragent.js');

const buildData = async (url) => {

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// useragent stuff
	await page.setUserAgent(useragent[Math.floor(Math.random() * useragent.length)]);
	const userAgent = await page.evaluate(() => navigator.userAgent );
	//console.log(' !!! ** !! CUSTOM USERAGENT: ' + userAgent);

	await page.goto(url, { 
		waitUntil: 'networkidle2',
		//waitForSelector: 'time'
	});

	console.log(`Awaiting ${url}`);

	const result = await page.evaluate(() => {
		
		let container = [];
		let resultInfo = document.querySelectorAll(`div.result-info`);

		for (let i = 0; i < resultInfo.length; i++) {

			let timeInfo = resultInfo[i].querySelector(`time.result-date`);
			let dateTitle = timeInfo.innerHTML;
			let dateTime = timeInfo.dateTime;

			let dateTimeArray = dateTime.split(" ");
			let dateTimeSeperateArray = dateTimeArray[0].split("-");

			let resultTitle = resultInfo[i].querySelector(`a.result-title`);
			let resultTitleText = resultTitle.innerText;
			let resultTitleHref = resultTitle.href;

			container.push(
				{
					resultTitleText,
					resultTitleHref,
					date: {
						dateTitle,
						dateString: dateTimeArray[0],
						timeString: dateTimeArray[1],
						year: dateTimeSeperateArray[0],
						month: dateTimeSeperateArray[1],
						day: dateTimeSeperateArray[2]
					}
				}
			);
		}
				
		return container;
	});

	await browser.close();
	// var_dump(result)
	return result;
};

module.exports = buildData;