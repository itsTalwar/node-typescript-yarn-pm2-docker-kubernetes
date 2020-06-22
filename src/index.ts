// setup mstime to measure API response time
const mstime = require('mstime');
mstime.plugins([{ plugin: require('mstime/dist/cjs/plugins/msPluginTrimMean') }]);
mstime.start('app-start');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

console.log('WE ARE ALIVE')

