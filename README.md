# findit-api

## Why?
In development: Port old PHP Craigslist web scraper to Node/JavaScript using Puppeteer.

### Todo
* ~~get all cities dependant on territory (U.S. states only for now)~~
* ~~Use above to link build for each city in each state.~~
* scrape each city per job category
* break down each job category
* filter results through keywords
* pay attention to date of posting - select 1 day or several going back in to the past
* Implement Restful API for a frontend
* polite and async web scraping per state
* use proxy per state
* track proxy performance using rating system
* select best proxies for scraping with on as needed basis
* put filters in database from flat file
* add life cycle to filters so that older filters automatically die
* add right click contextual menu to remove search result and add to filters from front end, to include API endpoint
* add option for filter custom duration
* group exact match search result titles under first result to clean up results listing, handle on backend or frontend?
* abstract scraping instructions in to "recipe" like JSON files