class Percentage {
    constructor(percentage) {
        this.percentage = percentage;
    }

    toString() {
        return `${this.percentage} %`
    }

    valueOf() {
        return this.percentage / 100;
    }
}

let fivePercent = new Percentage(5);

let value = 100 * fivePercent; // tread object as primitive

console.log(value);

console.log(`${fivePercent} of 50 is ${50 * fivePercent}`)