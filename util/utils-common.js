const config = require('./util/config-common.js.js.js');
const filter = require('./util/filter.js.js.js');
const useragent = require('./util/useragent.js.js.js');

function getUserAgent() {
	return useragent[Math.floor(Math.random() * useragent.length)]
}

// console.log(filter);
// console.log(config.categories);
// console.log(config.keywords);