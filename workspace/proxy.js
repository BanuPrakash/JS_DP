const user = {
    firstName: 'Roger',
    lastName: 'Smith',
    email: 'roger@gmail.com',
    age: 30
}

const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read`);
        return target[property];
    },

    set(target, property, value) {
        if(typeof value !== 'number') {
            throw new Error('Age must be a number')
        }
        if( value < 18) {
            throw new Error('User must be 18 or older')
        }
        target[property] = value;
    }
}

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.firstName);

proxyUser.age = 15;