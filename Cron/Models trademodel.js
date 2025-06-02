// models/tradeModel.js

class Trade {
  constructor(type, symbol, amount, price, reversed = false) {
    this.type = type;
    this.symbol = symbol;
    this.amount = amount;
    this.price = price;
    this.timestamp = new Date().toISOString();
    this.reversed = reversed;
  }
}

module.exports = Trade;
