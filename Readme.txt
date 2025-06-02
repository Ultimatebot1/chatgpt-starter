UltimateBot Paper Trading with Reverse Mode
-------------------------------------------

This bot:
- Simulates paper trades by default.
- Supports reverse logic: when market goes up, it sells; when down, it buys.
- Uses CoinGecko for BTC/USD prices.
- Runs every 10 seconds.

To enable live trading or reverse mode, change the variables inside trader.js:
  PAPER_TRADING = false;
  REVERSE_MODE = true;

This is for educational use only.
