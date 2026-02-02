class Person {
    // name;
    // age;
    constructor() {
        // this.name = name;
        // this.age = age;
        this.streetAddress = this.postCode = this.city = "";
        this.companyName = this.position = ""
    }

    toString() {
        return `Person lives at
            ${this.city} and works in ${this.companyName}
        `
    }
}

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person;
        // this.person.name = name;
        // this.person.age = age;
    }
    get lives() {
        return new PersonAddressBuilder(this.person);
    }

    get works() {
        return new PersonJobBuilder(this.person);
    }

    build() {
        return this.person;
    }
} 


class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(streetAddress) {
        this.person.streetAddress = streetAddress;
        return this;
    }

    in(city) {
        this.person.city = city;
        return this;
    }
}

class PersonJobBuilder extends PersonBuilder {
     constructor(person) {
        super(person);
    }

    at(companyName) {
        this.person.companyName = companyName;
        return this; // good for chaining
    }

    asA(position) {
        this.person.position = position;
        return this;
    }
}

// Builder pattern
let person = new PersonBuilder()
    .lives.at('123 MG Road').in('Delhi')
    .works.at('Adobe').asA('Analyst')
    .build();


    console.log(person);