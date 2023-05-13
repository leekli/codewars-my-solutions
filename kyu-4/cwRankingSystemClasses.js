// Codewars style ranking system
// https://www.codewars.com/kata/51fda2d95d6efda45e00004e

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(actRank) {
    if (actRank > 8 || actRank < -8 || actRank === 0)
      throw new Error("Not valid");
    if (actRank === this.rank) this.progress += 3;
    if (actRank - this.rank - 1 < -2) {
      if (
        actRank < this.rank &&
        this.rank + actRank <= 0 &&
        this.rank - actRank - 1 !== 2 &&
        this.rank > 0 &&
        actRank < 0
      ) {
        this.progress += 1;
      }
    }

    if (actRank === this.rank - 1) this.progress += 1;

    if (actRank > this.rank) {
      let diff = actRank - this.rank;
      if (this.rank < 0 && this.rank + diff >= 0) diff--;
      if (diff >= 9) diff--;
      const calc = 10 * diff * diff;
      this.progress += calc;
    }

    if (this.progress >= 100) {
      while (Math.floor(this.progress / 100) !== 0) {
        this.progress -= 100;
        if (this.rank + 1 !== 0 && this.rank + 1 < 9) {
          this.rank++;
        } else if (this.rank + 1 === 0) {
          this.rank = 1;
        }
      }
    }
    if (this.rank === 8) this.progress = 0;
  }
}
