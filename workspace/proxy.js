const user = {
    firstName: 'Roger',
    lastName: 'Smith',
    email: 'roger@gmail.com'
}

const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read`);
        return target[property];
    }
}

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.firstName);