function logTrade({ type, symbol, amount, price, timestamp, reversed }) {
  console.log(`[TRADE] ${type.toUpperCase()} ${symbol} | Amount: ${amount} | Price: ${price} | Time: ${timestamp} | Reversed: ${reversed}`);
}

module.exports = { logTrade };
