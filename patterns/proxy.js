const user = {
    firstName : 'Roger',
    lastName : 'Smith',
    age: 25
}


const handler = {
    // get() Trap
    get(target, property) {
        // console.log(`Property ${property} has been read`);
        return property === 'fullName' ?
            `${target.firstName} ${target.lastName}` :
            target[property];
    },
    // set() Trap
    set(target, property, value) {
        if(property === 'age') {
            if(typeof value !== 'number') {
                throw new Error('Age has to be a number')
            }
            if( value < 18) {
                throw new Error(`Age ${value} has to be min of 18`)
            }
        }
        target[property] = value;
    },

    // // apply() Trap
    // apply(target, thisArg, args) {
    //     return target(...args).toUpperCase();
    // }
}

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.firstName);
console.log(proxyUser.fullName);

proxyUser.age = 15;

