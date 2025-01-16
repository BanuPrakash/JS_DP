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

// implement Serializer to clone

class Serializer {
    // Person, Address
    constructor(types) {
        this.types = types;
    }

    markRecursive(object) {
        // anoint each object with a type index
        let idx = this.types.findIndex(t => t.name === object.constructor.name);
        if (idx !== -1) {
            object['typeIndex'] = idx; //  Person index = 0, Address index =1

            for (let key in object) {
                if (object.hasOwnProperty(key) && object[key] != null) {
                    this.markRecursive(object[key]);
                }
            }
        }
    }

    reconstruct(object) {
        if (object.hasOwnProperty('typeIndex')) {
            let type = this.types[object.typeIndex];
            let obj = new type(); // new Person(); new Address()
            for (let key in object) {
                if (object.hasOwnProperty(key) && object[key] != null) {
                    obj[key] = this.reconstruct(object[key]);
                }
            }
            delete obj.typeIndex;
            return obj;
        }

        return object;
    }
    clone(object) {
        // need type info; add typeIndex for  Person, Address
        this.markRecursive(object);

        let copy = JSON.parse(JSON.stringify(object)); // just raw data key/value
        // console.log(copy);

        return this.reconstruct(copy); // add typeInfo
    }
}
let john = new Person('John',
    new Address('123 London Road', 'London', 'UK'));


let serializer = new Serializer([Person, Address]);

jane = serializer.clone(john);

jane.name = 'Jane';
console.log(jane);
jane.greet();
john.greet();