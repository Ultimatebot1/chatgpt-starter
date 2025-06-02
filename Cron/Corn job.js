const runBot = require('../trader');

function startCronJob() {
  setInterval(() => {
    console.log(`[CRON] Running trader.js at ${new Date().toISOString()}`);
    runBot();
  }, 10000); // runs every 10 seconds
}

module.exports = startCronJob;
