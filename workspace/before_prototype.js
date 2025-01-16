class Address {
    constructor(streetAddress, city, country) {
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }

    toString() {
        return `Address: ${this.streetAddress}, ` +
            `${this.city}, ${this.country}`;
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address; //!
    }

    toString() {
        return `${this.name} lives at ${this.address}`;
    }

    greet() {
        console.log(
            `Hi, my name is ${this.name}, ` +
            `I live at ${this.address.toString()}`
        );
    }
}

let john = new Person('John',
    new Address('123 London Road', 'London', 'UK'));

// copy only fields/state and not behaviour and type [Person , Address]
let jane = JSON.parse(JSON.stringify(john));

jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St';

console.log(john.toString());
console.log(jane.toString()); // inherited method

john.greet();
// this won't work, only dictionary [key/value] pairs are copied and not type info.
jane.greet();
