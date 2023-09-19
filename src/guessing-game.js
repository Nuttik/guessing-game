class GuessingGame {
  constructor() {}

  setRange = (min, max) => {
    this.min = min;
    this.max = max;
  };

  guess() {
    this.number = Math.round((this.min + this.max) / 2);
    return this.number; //любое число между мин и макс;
  }

  lower() {
    this.setRange(this.min, this.number);
  }

  greater() {
    this.setRange(this.number, this.max);
  }
}

module.exports = GuessingGame;
