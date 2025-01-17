class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];
    }

    execute(command) {
        this.value = command.execute(this.value)
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }
}

class AddCommand {
    constructor(value) {
        this.value = value;
    }

    execute(value) {
        return this.value + value;
    }

    undo(value) {
        return value - this.value;
    }
}

class SubCommand {
    constructor(value) {
        this.value = value;
    }

    execute(value) {
        return value - this.value;
    }

    undo(value) {
        return value + this.value;
    }
}

let calc = new Calculator();
// issue command
calc.execute(new AddCommand(100));
console.log("Value ", calc.value);
calc.execute(new SubCommand(20));
console.log("Value ", calc.value);
calc.execute(new AddCommand(200));
console.log("Value ", calc.value);
calc.undo();
console.log("Value ", calc.value);
calc.undo();
console.log("Value ", calc.value);