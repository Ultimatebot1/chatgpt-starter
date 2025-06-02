const axios = require('axios');

let PAPER_TRADING = true; // toggle for paper/live
let REVERSE_MODE = false; // toggle for reverse strategy

const simulateTrade = (direction, pair, price) => {
  console.log(`[PAPER] ${direction} ${pair} at $${price}`);
};

const executeTrade = async (direction, pair, price) => {
  if (PAPER_TRADING) {
    simulateTrade(direction, pair, price);
  } else {
    // Replace with live trading logic (exchange API call)
    console.log(`[LIVE] ${direction} ${pair} at $${price}`);
  }
};

const analyzeMarket = async () => {
  try {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const btcPrice = data.bitcoin.usd;

    const goingUp = btcPrice > 68000;
    const goingDown = btcPrice < 66000;

    if (REVERSE_MODE) {
      if (goingUp) await executeTrade('SELL', 'BTC/USD', btcPrice);
      else if (goingDown) await executeTrade('BUY', 'BTC/USD', btcPrice);
    } else {
      if (goingUp) await executeTrade('BUY', 'BTC/USD', btcPrice);
      else if (goingDown) await executeTrade('SELL', 'BTC/USD', btcPrice);
    }
  } catch (err) {
    console.error('Market analysis failed:', err.message);
  }
};

setInterval(analyzeMarket, 10000); // runs every 10 sec
// Auto-run after deployment
(async () => {
  await analyzeMarket();
})();
