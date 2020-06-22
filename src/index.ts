// setup mstime to measure API response time
const mstime = require('mstime');
mstime.plugins([{ plugin: require('mstime/dist/cjs/plugins/msPluginTrimMean') }]);
mstime.start('app-start');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

console.log('WE ARE ALIVE')

// // HTTPS options
// const options = {
// };
// const server = spdy.createServer(options, app);

// if (socketEnabled) {
//   socket.setup(server);
// }
// app.listen(port, () => {
//   console.info(`--- 🌟  Started (${env}) --- https://localhost:${port}`);
//   console.log(`${mstime.end('app-start').last} ms`);
//   refresher.start();
// });

// if (env === 'development') {
//   // initialize test data once (admin@example.com)
//   require('./api/utils/InitData');
// }

